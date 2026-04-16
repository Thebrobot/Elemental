import fs from "node:fs";
import path from "node:path";

const SLOT_EXTS = [".webp", ".jpg", ".jpeg", ".png"] as const;

function firstExisting(basePathWithoutExt: string): string | null {
  for (const ext of SLOT_EXTS) {
    const p = `${basePathWithoutExt}${ext}`;
    if (fs.existsSync(p)) return p;
  }
  return null;
}

/** Absolute path to `public/`. */
function publicDir(): string {
  return path.join(process.cwd(), "public");
}

/**
 * In-body treatment banner: `public/images/service-slots/body/{slug}.(webp|jpg|jpeg|png)`.
 * Returns public URL path or null if no file.
 */
export function resolveBodySlotSrc(slug: string): string | null {
  const abs = firstExisting(
    path.join(publicDir(), "images", "service-slots", "body", slug),
  );
  if (!abs) return null;
  const rel = path.relative(publicDir(), abs).split(path.sep).join("/");
  return `/${rel}`;
}

/**
 * Closing banner (bottom of service prose):
 * 1. Per-service: `public/images/service-slots/result/{slug}.(webp|jpg|jpeg|png)`
 * 2. Fallback (same on all pages until you add per-slug files):
 *    `public/images/service-slots/result-environment.(webp|jpg|jpeg|png)`
 */
export function resolveResultSlotSrc(slug: string): string | null {
  const perService = firstExisting(
    path.join(publicDir(), "images", "service-slots", "result", slug),
  );
  const abs =
    perService ??
    firstExisting(
      path.join(publicDir(), "images", "service-slots", "result-environment"),
    );
  if (!abs) return null;
  const rel = path.relative(publicDir(), abs).split(path.sep).join("/");
  return `/${rel}`;
}
