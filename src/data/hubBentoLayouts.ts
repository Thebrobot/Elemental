/**
 * Explicit 12-column bento placements (grid lines are 1-based).
 * Each tile: column start, column span, row start, row span.
 * Every layout tiles a full rectangle with no empty cells.
 */

export type HubBentoCell = {
  colStart: number;
  colSpan: number;
  rowStart: number;
  rowSpan: number;
};

/** Hand-tuned layouts for common treatment counts (site categories top out around 10). */
const LAYOUTS: Record<number, HubBentoCell[]> = {
  1: [{ colStart: 1, colSpan: 12, rowStart: 1, rowSpan: 4 }],
  2: [
    { colStart: 1, colSpan: 6, rowStart: 1, rowSpan: 3 },
    { colStart: 7, colSpan: 6, rowStart: 1, rowSpan: 3 },
  ],
  3: [
    { colStart: 1, colSpan: 8, rowStart: 1, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 12, rowStart: 3, rowSpan: 2 },
  ],
  4: [
    { colStart: 1, colSpan: 6, rowStart: 1, rowSpan: 2 },
    { colStart: 7, colSpan: 6, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 6, rowStart: 3, rowSpan: 2 },
    { colStart: 7, colSpan: 6, rowStart: 3, rowSpan: 2 },
  ],
  5: [
    { colStart: 1, colSpan: 6, rowStart: 1, rowSpan: 2 },
    { colStart: 7, colSpan: 6, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 3, rowSpan: 2 },
  ],
  6: [
    { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 3, rowSpan: 2 },
  ],
  7: [
    { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 1, colSpan: 12, rowStart: 5, rowSpan: 2 },
  ],
  8: [
    { colStart: 1, colSpan: 6, rowStart: 1, rowSpan: 2 },
    { colStart: 7, colSpan: 3, rowStart: 1, rowSpan: 2 },
    { colStart: 10, colSpan: 3, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 1, colSpan: 6, rowStart: 5, rowSpan: 2 },
    { colStart: 7, colSpan: 6, rowStart: 5, rowSpan: 2 },
  ],
  9: [
    { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 5, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 5, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 5, rowSpan: 2 },
  ],
  10: [
    { colStart: 1, colSpan: 3, rowStart: 1, rowSpan: 2 },
    { colStart: 4, colSpan: 3, rowStart: 1, rowSpan: 2 },
    { colStart: 7, colSpan: 3, rowStart: 1, rowSpan: 2 },
    { colStart: 10, colSpan: 3, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 3, rowStart: 3, rowSpan: 2 },
    { colStart: 4, colSpan: 3, rowStart: 3, rowSpan: 2 },
    { colStart: 7, colSpan: 3, rowStart: 3, rowSpan: 2 },
    { colStart: 10, colSpan: 3, rowStart: 3, rowSpan: 2 },
    { colStart: 1, colSpan: 6, rowStart: 5, rowSpan: 2 },
    { colStart: 7, colSpan: 6, rowStart: 5, rowSpan: 2 },
  ],
  11: [
    { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 5, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 5, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 5, rowSpan: 2 },
    { colStart: 1, colSpan: 6, rowStart: 7, rowSpan: 2 },
    { colStart: 7, colSpan: 6, rowStart: 7, rowSpan: 2 },
  ],
  12: [
    { colStart: 1, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 1, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 3, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 5, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 5, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 5, rowSpan: 2 },
    { colStart: 1, colSpan: 4, rowStart: 7, rowSpan: 2 },
    { colStart: 5, colSpan: 4, rowStart: 7, rowSpan: 2 },
    { colStart: 9, colSpan: 4, rowStart: 7, rowSpan: 2 },
  ],
};

function fallbackLayout(count: number): HubBentoCell[] {
  const cells: HubBentoCell[] = [];
  let row = 1;
  let idx = 0;
  while (idx < count) {
    const remaining = count - idx;
    const inRow = Math.min(3, remaining);
    let spans: number[];
    if (inRow === 1) spans = [12];
    else if (inRow === 2) spans = [6, 6];
    else spans = [4, 4, 4];
    let col = 1;
    for (const sp of spans) {
      cells.push({ colStart: col, colSpan: sp, rowStart: row, rowSpan: 2 });
      col += sp;
    }
    idx += inRow;
    row += 2;
  }
  return cells;
}

export function getHubBentoPlacements(count: number): HubBentoCell[] {
  const preset = LAYOUTS[count];
  if (preset && preset.length === count) return preset;
  return fallbackLayout(count);
}
