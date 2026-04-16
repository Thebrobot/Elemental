import type { ImageMetadata } from "astro";
import blogNeuromodulators from "../assets/images/blog/blog-neuromodulators.png";
import blogSkinLaser from "../assets/images/blog/blog-skin-laser.png";
import blogBodyContouring from "../assets/images/blog/blog-body-contouring.png";
import blogWellnessMetabolic from "../assets/images/blog/blog-wellness-metabolic.png";

/** Maps frontmatter `heroImage` paths to imported assets. */
const byHeroPath: Record<string, ImageMetadata> = {
  "/images/blog/blog-neuromodulators.png": blogNeuromodulators,
  "/images/blog/blog-skin-laser.png": blogSkinLaser,
  "/images/blog/blog-body-contouring.png": blogBodyContouring,
  "/images/blog/blog-wellness-metabolic.png": blogWellnessMetabolic,
};

export function getBlogHeroImage(heroImage: string): ImageMetadata | undefined {
  if (heroImage.startsWith("http")) return undefined;
  const normalized = heroImage.startsWith("/") ? heroImage : `/${heroImage}`;
  return byHeroPath[normalized];
}
