import type { Metadata } from "next";
import { ProductGrid } from "@/components/shop/product-grid";
import { ProductsFilters } from "@/components/shop/products-filters";
import { Pagination } from "@/components/shop/pagination";
import { EmptyState } from "@/components/shop/empty-state";
import { SectionHeading } from "@/components/shop/section-heading";
import { listProducts } from "@/services/product.service";
import { listCategories } from "@/services/category.service";
import type { ProductListParams } from "@/types";

export const metadata: Metadata = {
  title: "Shop Flowers",
  description:
    "Browse our full collection of hand-tied bouquets, roses, plants and seasonal arrangements.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

const SORTS = ["newest", "price-asc", "price-desc"] as const;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;

  const page = Math.max(1, Number(first(sp.page)) || 1);
  const categorySlug = first(sp.category);
  const search = first(sp.search);
  const sortRaw = first(sp.sort);
  const sort = (SORTS as readonly string[]).includes(sortRaw ?? "")
    ? (sortRaw as ProductListParams["sort"])
    : "newest";

  const [result, categories] = await Promise.all([
    listProducts({ page, pageSize: 12, categorySlug, search, sort }),
    listCategories(),
  ]);

  // Flatten for building pagination links.
  const flatParams: Record<string, string | undefined> = {
    category: categorySlug,
    search,
    sort: sort === "newest" ? undefined : sort,
  };

  return (
    <div className="section py-12 lg:py-16">
      <SectionHeading
        align="left"
        eyebrow="The collection"
        title="Shop all flowers"
        description="Hand-tied arrangements for every occasion."
      />

      <div className="mt-8">
        <ProductsFilters categories={categories} />
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {result.total} {result.total === 1 ? "product" : "products"}
        {categorySlug ? " in this category" : ""}
        {search ? ` matching “${search}”` : ""}
      </p>

      <div className="mt-4">
        {result.items.length > 0 ? (
          <>
            <ProductGrid products={result.items} />
            <Pagination
              page={result.page}
              totalPages={result.totalPages}
              searchParams={flatParams}
            />
          </>
        ) : (
          <EmptyState
            title="No flowers found"
            description="Try adjusting your search or filters to find what you're looking for."
          />
        )}
      </div>
    </div>
  );
}
