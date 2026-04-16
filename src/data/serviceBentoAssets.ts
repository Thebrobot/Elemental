import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/service-bento/*.png",
  { eager: true, import: "default" },
);

function slugFromPath(filePath: string): string {
  const file = filePath.split("/").pop() ?? "";
  return file.replace(/\.png$/i, "");
}

const bySlug: Record<string, ImageMetadata> = {};
for (const path of Object.keys(modules)) {
  bySlug[slugFromPath(path)] = modules[path] as unknown as ImageMetadata;
}

/** Editorial tile art (was `public/images/service-bento/{slug}.png`). */
export function getServiceBentoImage(slug: string): ImageMetadata | undefined {
  return bySlug[slug];
}
