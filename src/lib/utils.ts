import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 * Used by every shadcn/ui component.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as a localized price string, e.g. 89 -> "$89.00". */
export function formatPrice(value: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
}

/**
 * Turn a product/category name into a URL-safe slug.
 * "Blush Garden Bouquet!" -> "blush-garden-bouquet"
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents (combining diacritics)
    .replace(/[^a-z0-9\s-]/g, "") // remove non-alphanumerics
    .replace(/[\s_-]+/g, "-") // collapse whitespace/underscores to a dash
    .replace(/^-+|-+$/g, ""); // trim leading/trailing dashes
}

/** Format an ISO date string for display, e.g. "Jun 21, 2026". */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}
