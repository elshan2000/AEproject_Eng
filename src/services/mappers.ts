import type { Category, Product } from "@prisma/client";
import type { CategoryDTO, ProductDTO, ProductWithCategory } from "@/types";

/**
 * Mappers convert Prisma rows (which contain `Prisma.Decimal` and `Date`
 * objects that cannot cross the Server→Client boundary) into plain,
 * JSON-serializable DTOs. Every service returns DTOs, never raw Prisma models.
 */

export function toCategoryDTO(category: Category): CategoryDTO {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    createdAt: category.createdAt.toISOString(),
    updatedAt: category.updatedAt.toISOString(),
  };
}

export function toProductDTO(product: Product): ProductDTO {
  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    price: Number(product.price), // Decimal -> number
    imageUrl: product.imageUrl,
    stock: product.stock,
    featured: product.featured,
    categoryId: product.categoryId,
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  };
}

export function toProductWithCategory(
  product: Product & { category: Category }
): ProductWithCategory {
  return {
    ...toProductDTO(product),
    category: toCategoryDTO(product.category),
  };
}
