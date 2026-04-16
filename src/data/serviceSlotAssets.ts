import type { ImageMetadata } from "astro";
import resultEnvironment from "../assets/images/service-slots/result-environment.png";

const bodyModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/service-slots/body/*.png",
  { eager: true, import: "default" },
);

const resultModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/service-slots/result/*.png",
  { eager: true, import: "default" },
);

function slugFromPath(filePath: string): string {
  const file = filePath.split("/").pop() ?? "";
  return file.replace(/\.png$/i, "");
}

const bodyBySlug: Record<string, ImageMetadata> = {};
for (const path of Object.keys(bodyModules)) {
  bodyBySlug[slugFromPath(path)] = bodyModules[path] as unknown as ImageMetadata;
}

const resultBySlug: Record<string, ImageMetadata> = {};
for (const path of Object.keys(resultModules)) {
  resultBySlug[slugFromPath(path)] = resultModules[path] as unknown as ImageMetadata;
}

/** In-body treatment banner (was `public/images/service-slots/body/{slug}.png`). */
export function getBodySlotImage(slug: string): ImageMetadata | undefined {
  return bodyBySlug[slug];
}

/**
 * Closing banner: per-service `result/{slug}.png` when present, else shared
 * `result-environment.png`.
 */
export function getResultSlotImage(slug: string): ImageMetadata {
  return resultBySlug[slug] ?? resultEnvironment;
}
