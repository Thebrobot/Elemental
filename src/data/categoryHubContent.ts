import { categoryLabels, type ServiceCategory } from "./serviceRegistry";

/** Document `<title>` segment before `| ${siteConfig.name}, Elkhorn, WI` (matches .cursorrules pattern). */
const pageTitleFocus: Record<ServiceCategory, string> = {
  injectables: "Injectables & facial rejuvenation",
  skin: "Skin & laser treatments",
  body: "Body contouring & devices",
  wellness: "Wellness & performance",
};

/** Homepage outcome-card headline: reused as category hub H1. */
const heroHeadline: Record<ServiceCategory, string> = {
  injectables: "Soften lines & restore volume",
  skin: "Clearer tone & smoother texture",
  body: "Shape, tighten & feel stronger",
  wellness: "Weight, hormones & whole-person care",
};

/** Short supporting line under the hero (aligned with homepage outcome cards). */
const heroTagline: Record<ServiceCategory, string> = {
  injectables: "Neuromodulators, fillers & PRP mapped to your face, not a template.",
  skin: "Facials, peels, IPL & microneedling for your goals and downtime.",
  body: "Body contouring, tightening, laser hair removal & core support.",
  wellness: "Medical weight loss, BHRT, labs, IV therapies & private consults.",
};

/** Unique meta descriptions (~150–160 chars) for category hub pages. */
const metaDescription: Record<ServiceCategory, string> = {
  injectables:
    "Explore injectables in Elkhorn, WI: Botox, Jeuveau, fillers, BioFill, Vampire Facial & Facelift. Physician-led mapping, not a template. Elemental Skin & Body.",
  skin:
    "Skin & laser in Elkhorn, WI: Diamond Glow, peels, IPL, microneedling, Morpheus8 & more. Browse treatments and book at Elemental Skin & Body Medical Aesthetics.",
  body:
    "Body & devices in Elkhorn, WI: laser hair removal, FaceTite, BodyTite, Emsculpt Neo, Emsella & more. Physician-led Elemental Skin & Body, Walworth County.",
  wellness:
    "Wellness services in Elkhorn, WI: medical weight loss, BHRT, labs, IV therapies, PRP joints & intimate wellness. Elemental Skin & Body Medical Aesthetics.",
};

export function getCategoryHubPageTitleFocus(category: ServiceCategory): string {
  return pageTitleFocus[category];
}

export function getCategoryHubMetaDescription(category: ServiceCategory): string {
  return metaDescription[category];
}

export function getCategoryHubHeroHeadline(category: ServiceCategory): string {
  return heroHeadline[category];
}

export function getCategoryHubHeroTagline(category: ServiceCategory): string {
  return heroTagline[category];
}

export function getCategoryHubBreadcrumbLabel(category: ServiceCategory): string {
  return categoryLabels[category];
}

export function getOtherCategoryHubLinks(
  current: ServiceCategory,
): { href: string; label: string }[] {
  const order: ServiceCategory[] = ["injectables", "skin", "body", "wellness"];
  return order
    .filter((c) => c !== current)
    .map((c) => ({
      href: `/services/${c}/`,
      label: categoryLabels[c],
    }));
}
