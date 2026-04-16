/** Shared nav types (mega menu + flattened full menu). */

export type NavServiceItem = { readonly label: string; readonly href: string };

export type NavServiceSection = {
  readonly title: string;
  readonly items: readonly NavServiceItem[];
};

export type NavMegaColumn = {
  /** Matches `ServiceCategory` for Where to Start anchors (`#menu-${menuAnchor}`). */
  readonly menuAnchor: string;
  readonly label: string;
  readonly sections: readonly NavServiceSection[];
};
