/**
 * Small stroke icons for the Where to Start journey (Lucide-style, `currentColor`).
 * @see https://lucide.dev/license (ISC)
 */
function decoSvg(inner: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}

/** Lucide `message-square` */
const step1 = `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`;

/** Lucide `book-open` */
const step2 = [
  `<path d="M12 7v14"/>`,
  `<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>`,
].join("");

/** Lucide `calendar-check-2` */
const step3 = [
  `<path d="M8 2v4"/>`,
  `<path d="M16 2v4"/>`,
  `<path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/>`,
  `<path d="M3 10h18"/>`,
  `<path d="m16 20 2 2 4-4"/>`,
].join("");

export const whereToStartJourneyIcons: [string, string, string] = [
  decoSvg(step1),
  decoSvg(step2),
  decoSvg(step3),
];
