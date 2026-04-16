/**
 * Inline SVG marks for service categories (stroke icons, `currentColor`).
 * Paths adapted from Lucide v0.460.0 (ISC). Replace with your own exports
 * from an icon pack when you finalize artwork.
 *
 * @see https://lucide.dev/license
 */
export type CategoryMarkId = "injectables" | "skin" | "body" | "wellness" | "products";

function categorySvg(inner: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}

/** Syringe (Lucide `syringe`) */
const injectablesPaths = [
  `<path d="m18 2 4 4"/>`,
  `<path d="m17 7 3-3"/>`,
  `<path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/>`,
  `<path d="m9 11 4 4"/>`,
  `<path d="m5 19-3 3"/>`,
  `<path d="m14 4 6 6"/>`,
].join("");

/** Droplets (Lucide `droplets`) — skin / hydration */
const skinPaths = [
  `<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>`,
  `<path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>`,
].join("");

/** User (common Lucide-style silhouette) — body */
const bodyPaths = [`<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>`, `<circle cx="12" cy="7" r="4"/>`].join(
  ""
);

/** Heart pulse (Lucide `heart-pulse`) — wellness */
const wellnessPaths = [
  `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>`,
  `<path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>`,
].join("");

/** Shopping bag (Lucide `shopping-bag`) — retail / products */
const productsPaths = [
  `<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>`,
  `<path d="M3 6h18"/>`,
  `<path d="M16 10a4 4 0 0 1-8 0"/>`,
].join("");

export const categoryMarkSvg: Record<CategoryMarkId, string> = {
  injectables: categorySvg(injectablesPaths),
  skin: categorySvg(skinPaths),
  body: categorySvg(bodyPaths),
  wellness: categorySvg(wellnessPaths),
  products: categorySvg(productsPaths),
};

export function categoryMarkHtml(id: string): string {
  const key = id as CategoryMarkId;
  return categoryMarkSvg[key] ?? categoryMarkSvg.injectables;
}
