import type { ExploreCategory } from "../islands/TreatmentCategoryExplorer";
import {
  categoryLabels,
  getHubCategories,
  getServicesByCategory,
  type ServiceCategory,
} from "./serviceRegistry";

const categoryExplorerTabLabels: Record<ServiceCategory, string> = {
  injectables: "Injectables",
  skin: "Skin & laser",
  body: "Body",
  wellness: "Wellness",
};

const categoryExplorerIntros: Record<ServiceCategory, string> = {
  injectables:
    "Neuromodulators, fillers, BioFill, and PRP facial options, planned around your expression, volume, and goals.",
  skin: "Facials, peels, IPL, microneedling, Morpheus8, and supporting skin services for tone, texture, and clarity.",
  body: "Contour, tighten, smooth, and strengthen with laser hair removal, RF, and muscle-stimulation technologies.",
  wellness: "Medical weight loss, hormones, labs, IV and peptide support, and intimate wellness, guided with follow-up.",
};

/** Shared tab + treatment list data for `TreatmentCategoryExplorer` (homepage, where-to-start, etc.). */
export function getTreatmentExplorerCategories(): ExploreCategory[] {
  return getHubCategories().map((category: ServiceCategory) => {
    const services = getServicesByCategory(category).sort((a, b) => a.name.localeCompare(b.name));
    return {
      id: category,
      tabLabel: categoryExplorerTabLabels[category],
      label: categoryLabels[category],
      intro: categoryExplorerIntros[category],
      treatments: services.map((s) => ({
        name: s.name,
        href: `/services/${s.category}/${s.slug}`,
      })),
    };
  });
}
