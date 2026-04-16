import type { ServiceDefinition } from "./serviceRegistry";

/** Editorial tile art in public/images/service-bento/{slug}.png */
export function hubTileImageSrc(service: ServiceDefinition): string {
  return `/images/service-bento/${service.slug}.png`;
}
