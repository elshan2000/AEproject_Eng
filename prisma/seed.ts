import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

/** Categories to create. Slugs are derived from the name. */
const categories = [
  { name: "Bouquets", slug: "bouquets" },
  { name: "Roses", slug: "roses" },
  { name: "Wedding", slug: "wedding" },
  { name: "Plants", slug: "plants" },
  { name: "Seasonal", slug: "seasonal" },
];

/** Sample products keyed by category slug so we can resolve the FK after upsert. */
const productsByCategory: Record<
  string,
  Array<{
    name: string;
    slug: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
    featured: boolean;
  }>
> = {
  bouquets: [
    {
      name: "Blush Garden Bouquet",
      slug: "blush-garden-bouquet",
      description:
        "A soft arrangement of garden roses, ranunculus, and eucalyptus in dusty pink tones. Hand-tied and wrapped in kraft paper.",
      price: 89.0,
      imageUrl: "/images/products/blush-garden-bouquet.svg",
      stock: 12,
      featured: true,
    },
    {
      name: "Wildflower Meadow",
      slug: "wildflower-meadow",
      description:
        "An effortless, just-picked bunch of seasonal wildflowers in cheerful pastel hues.",
      price: 65.0,
      imageUrl: "/images/products/wildflower-meadow.svg",
      stock: 20,
      featured: false,
    },
  ],
  roses: [
    {
      name: "Classic Red Roses",
      slug: "classic-red-roses",
      description:
        "A dozen long-stemmed red roses, the timeless gesture of love. Presented in elegant tissue.",
      price: 110.0,
      imageUrl: "/images/products/classic-red-roses.svg",
      stock: 30,
      featured: true,
    },
    {
      name: "Ivory Rose Box",
      slug: "ivory-rose-box",
      description:
        "Two dozen ivory roses arranged in a keepsake hat box. Understated luxury.",
      price: 165.0,
      imageUrl: "/images/products/ivory-rose-box.svg",
      stock: 8,
      featured: false,
    },
  ],
  wedding: [
    {
      name: "Bridal Cascade",
      slug: "bridal-cascade",
      description:
        "A flowing bridal bouquet of white peonies, orchids, and trailing ivy. Made to order for your day.",
      price: 240.0,
      imageUrl: "/images/products/bridal-cascade.svg",
      stock: 5,
      featured: true,
    },
  ],
  plants: [
    {
      name: "Potted Orchid",
      slug: "potted-orchid",
      description:
        "A graceful white phalaenopsis orchid in a ceramic pot. Long-lasting and low-maintenance.",
      price: 75.0,
      imageUrl: "/images/products/potted-orchid.svg",
      stock: 15,
      featured: false,
    },
  ],
  seasonal: [
    {
      name: "Spring Tulip Bunch",
      slug: "spring-tulip-bunch",
      description:
        "A vibrant bunch of seasonal tulips in mixed colours. A bright welcome to the season.",
      price: 55.0,
      imageUrl: "/images/products/spring-tulip-bunch.svg",
      stock: 25,
      featured: true,
    },
  ],
};

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Admin user (idempotent upsert).
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? "admin@flowershop.local";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? "admin12345";
  const passwordHash = await bcrypt.hash(adminPassword, 12);

  const admin = await prisma.admin.upsert({
    where: { email: adminEmail },
    update: {},
    create: { email: adminEmail, passwordHash },
  });
  console.log(`✓ Admin ready: ${admin.email}`);

  // 2. Categories (idempotent upsert by unique slug).
  const categoryIdBySlug = new Map<string, string>();
  for (const c of categories) {
    const category = await prisma.category.upsert({
      where: { slug: c.slug },
      update: { name: c.name },
      create: c,
    });
    categoryIdBySlug.set(c.slug, category.id);
  }
  console.log(`✓ ${categories.length} categories ready`);

  // 3. Products (idempotent upsert by unique slug).
  let productCount = 0;
  for (const [categorySlug, products] of Object.entries(productsByCategory)) {
    const categoryId = categoryIdBySlug.get(categorySlug);
    if (!categoryId) continue;

    for (const p of products) {
      await prisma.product.upsert({
        where: { slug: p.slug },
        update: {
          name: p.name,
          description: p.description,
          price: new Prisma.Decimal(p.price),
          imageUrl: p.imageUrl,
          stock: p.stock,
          featured: p.featured,
          categoryId,
        },
        create: {
          name: p.name,
          slug: p.slug,
          description: p.description,
          price: new Prisma.Decimal(p.price),
          imageUrl: p.imageUrl,
          stock: p.stock,
          featured: p.featured,
          categoryId,
        },
      });
      productCount++;
    }
  }
  console.log(`✓ ${productCount} products ready`);
  console.log("🌸 Seed complete.");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
