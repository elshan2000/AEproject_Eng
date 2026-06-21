import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/shop/product-grid";
import { SectionHeading } from "@/components/shop/section-heading";
import { EmptyState } from "@/components/shop/empty-state";
import type { ProductWithCategory } from "@/types";

export function FeaturedProducts({
  products,
}: {
  products: ProductWithCategory[];
}) {
  return (
    <section className="section py-20">
      <SectionHeading
        eyebrow="Curated for you"
        title="Featured arrangements"
        description="A handpicked selection of our most-loved bouquets."
      />
      <div className="mt-10">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <EmptyState
            title="No featured products yet"
            description="Check back soon — beautiful things are blooming."
          />
        )}
      </div>
      <div className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/products">View all flowers</Link>
        </Button>
      </div>
    </section>
  );
}
