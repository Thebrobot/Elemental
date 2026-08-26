// Elemental Skin & Body Medical Aesthetics - central site configuration

import type { NavMegaColumn, NavServiceItem, NavServiceSection } from "./navTypes";

export const siteConfig = {
  name: "Elemental Skin & Body Medical Aesthetics",
  legalName: "Elemental Skin & Body Medical Aesthetics",
  tagline: "Medical aesthetics clinic in Elkhorn, Wisconsin",
  description:
    "Medical aesthetics clinic in Elkhorn, WI: Botox, fillers, laser, Morpheus8, body contouring & medical weight loss. Serving Walworth County, Lake Geneva & beyond.",

  url: "https://elementalskinandbody.com",
  phone: "",
  phoneDisplay: "",
  email: "",
  address: {
    street: "",
    city: "Elkhorn",
    state: "WI",
    zip: "",
    country: "US",
    county: "Walworth County",
  },

  bookingUrl: "#",
  bookingLabel: "Book online",

  /**
   * Brand marks: header needs a dark-on-light asset; footer needs a light-on-dark asset.
   * Do not point both at the same local file unless it is a true dual-purpose export (e.g. SVG).
   * `public/images/elemental-logo.png` is a large square RGB master and is not suitable as a drop-in for both surfaces.
   */
  logoUrlHeader:
    "https://assets.cdn.filesafe.space/sg6GOaZxcaTTzQL7krbU/media/69dffbdfdb7c222f716c9b32.png",
  logoUrlFooter:
    "https://assets.cdn.filesafe.space/sg6GOaZxcaTTzQL7krbU/media/69dffbdfd75d436f5307d862.png",

  social: {
    facebook: "",
    instagram: "",
    google: "",
  },

  defaultOGImage: "/images/og-default.jpg",
  twitterHandle: "",

  schema: {
    type: "MedicalBusiness",
    priceRange: "$$",
    openingHours: [] as string[],
    image: "/images/og-default.jpg",
    geo: {
      latitude: 0,
      longitude: 0,
    },
  },

  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    serviceMegaColumns: [
      {
        menuAnchor: "injectables",
        label: "Injectables",
        sections: [
          {
            title: "Injectables",
            items: [
              { label: "Botox & Jeuveau", href: "/services/injectables/botox-jeuveau" },
              { label: "Dermal Fillers", href: "/services/injectables/dermal-fillers" },
              { label: "BioFill", href: "/services/injectables/biofill" },
              { label: "Vampire Facelift", href: "/services/injectables/vampire-facelift" },
            ],
          },
        ],
      },
      {
        menuAnchor: "skin",
        label: "Skin & laser",
        sections: [
          {
            title: "Skin & laser",
            items: [
              { label: "Diamond Glow", href: "/services/skin/diamond-glow" },
              { label: "Vampire Facial", href: "/services/skin/vampire-facial" },
              { label: "Dermaplaning", href: "/services/skin/dermaplaning" },
              { label: "Chemical Peels", href: "/services/skin/chemical-peels" },
              { label: "Hyfrecator", href: "/services/skin/hyfrecator" },
              { label: "Microneedling", href: "/services/skin/microneedling" },
              { label: "Microneedling RF (Morpheus8)", href: "/services/skin/morpheus8" },
              { label: "IPL Photofacial", href: "/services/skin/ipl-photofacial" },
            ],
          },
        ],
      },
      {
        menuAnchor: "body",
        label: "Body & devices",
        sections: [
          {
            title: "Body & devices",
            items: [
              { label: "Laser Hair Removal", href: "/services/body/laser-hair-removal" },
              { label: "FaceTite", href: "/services/body/facetite" },
              { label: "BodyTite", href: "/services/body/bodytite" },
              { label: "Liposuction", href: "/services/body/liposuction" },
              { label: "Quantum", href: "/services/body/quantum" },
              { label: "Emsculpt Neo", href: "/services/body/emsculpt-neo" },
              { label: "Shockwave", href: "/services/body/shockwave" },
            ],
          },
        ],
      },
      {
        menuAnchor: "wellness",
        label: "Wellness",
        sections: [
          {
            title: "Wellness",
            items: [
              { label: "Medical Weight Loss", href: "/services/wellness/medical-weight-loss" },
              { label: "BIO-ID Hormone Replacement", href: "/services/wellness/bio-id-hormone-replacement" },
              { label: "Wellness Labs", href: "/services/wellness/wellness-labs" },
              { label: "PRP Joint Injections", href: "/services/wellness/prp-joint-injections" },
              { label: "O-Shot (Women)", href: "/services/wellness/o-shot" },
              { label: "P-Shot (Men)", href: "/services/wellness/p-shot" },
              { label: "Emsella", href: "/services/wellness/emsella" },
              { label: "Shockwave — Sexual Health", href: "/services/wellness/shockwave-sexual-health" },
              { label: "IV Therapies / Peptides", href: "/services/wellness/iv-therapies-peptides" },
              { label: "B-12 / MIC Injections", href: "/services/wellness/b12-mic-injections" },
            ],
          },
        ],
      },
    ] as const satisfies readonly NavMegaColumn[],
  },
} as const;

export type NavServiceGroup = { menuAnchor: string; category: string; items: NavServiceItem[] };

export function getNavServiceGroups(): NavServiceGroup[] {
  return siteConfig.nav.serviceMegaColumns.map((col) => ({
    menuAnchor: col.menuAnchor,
    category: col.label,
    items: col.sections.flatMap((sec: NavServiceSection) => [...sec.items]),
  }));
}

export const fullAddress = [
  siteConfig.address.street,
  [siteConfig.address.city, siteConfig.address.state, siteConfig.address.zip].filter(Boolean).join(", "),
]
  .filter(Boolean)
  .join(" - ");

// Cities & county within ~40 miles of Elkhorn served by the practice
export const areaServed = [
  { "@type": "City", name: "Elkhorn", addressRegion: "WI" },
  { "@type": "City", name: "Lake Geneva", addressRegion: "WI" },
  { "@type": "City", name: "Delavan", addressRegion: "WI" },
  { "@type": "City", name: "Whitewater", addressRegion: "WI" },
  { "@type": "City", name: "Burlington", addressRegion: "WI" },
  { "@type": "City", name: "East Troy", addressRegion: "WI" },
  { "@type": "City", name: "Mukwonago", addressRegion: "WI" },
  { "@type": "City", name: "Walworth", addressRegion: "WI" },
  { "@type": "City", name: "Genoa City", addressRegion: "WI" },
  { "@type": "City", name: "Twin Lakes", addressRegion: "WI" },
  { "@type": "City", name: "Janesville", addressRegion: "WI" },
  { "@type": "City", name: "Kenosha", addressRegion: "WI" },
  { "@type": "City", name: "Racine", addressRegion: "WI" },
  { "@type": "County", name: "Walworth County", addressRegion: "WI" },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone || undefined,
  email: siteConfig.email || undefined,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street || undefined,
    addressLocality: siteConfig.address.city || undefined,
    addressRegion: siteConfig.address.state || undefined,
    postalCode: siteConfig.address.zip || undefined,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.schema.geo.latitude,
    longitude: siteConfig.schema.geo.longitude,
  },
  priceRange: siteConfig.schema.priceRange,
  medicalSpecialty: ["Dermatology", "PlasticSurgery"],
  areaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Medical Aesthetic & Wellness Services",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Injectables & PRP: Botox, Jeuveau, Dermal Fillers, BioFill, Vampire Facelift" },
      { "@type": "OfferCatalog", name: "Skin & Laser Treatments: Diamond Glow, Vampire Facial, IPL, Morpheus8, Microneedling, Chemical Peels" },
      { "@type": "OfferCatalog", name: "Body Contouring & Devices: Emsculpt Neo, Liposuction, FaceTite, BodyTite, Laser Hair Removal" },
      { "@type": "OfferCatalog", name: "Wellness & Performance: Medical Weight Loss, Hormone Therapy, Emsella, Shockwave Sexual Health, IV Therapies, Peptides" },
    ],
  },
  ...(siteConfig.schema.openingHours.length
    ? { openingHoursSpecification: siteConfig.schema.openingHours }
    : {}),
  image: `${siteConfig.url}${siteConfig.schema.image}`,
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.google].filter(Boolean),
};
