import { flex } from "styled-system";


const fontSizes = ["10px","10px", "14px", "14px","32px","48px","64px"];
fontSizes.xxs = fontSizes[0];
fontSizes.xs = fontSizes[1];
fontSizes.s = fontSizes[2];
fontSizes.m = fontSizes[3];
fontSizes.l = fontSizes[4];
fontSizes.xl = fontSizes[5];
fontSizes.xxl = fontSizes[6];

const fonts = ["Helvetica", "Inter", "Inter", "Inter"];
fonts.helvetica = fonts[0];
fonts.air = fonts[1];
fonts.hong = fonts[2];
fonts.pix = fonts[3];


const breakpoints = ["600px", "900px", "1400px", "1800px"];
breakpoints.S = breakpoints[0];
breakpoints.M = breakpoints[1];
breakpoints.L = breakpoints[2];
breakpoints.XL = breakpoints[3];

const spaces = ["8px", "12px", "16px", "24px", "32px", "56px"];
spaces.smaller = spaces[0];
spaces.small = spaces[1];
spaces.medium = spaces[2];
spaces.large = spaces[3];
spaces.larger = spaces[4];
spaces.extraLarge = spaces[5];

const widths = ["25%", "50%", "100%"];
widths.w25 = widths[0];
widths.w50 = widths[1];
widths.w100 = widths[2];

const flexDirection = ["row", "column"];
flexDirection.row = flexDirection[0];
flexDirection.column = flexDirection[1];

// Layout tokens for the <Page>/<Section> system. Site-wide width and gutters
// live here and nowhere else, so changing the cap is a one-line edit.
//
// Deliberately separate from the `spaces`/`fontSizes` arrays below: those are
// read by styled-system props on the older pages, where the indices are load
// bearing. Adding to them would move every page at once.
const layout = {
  maxWidth: '2000px',
  gutter: ['16px', '24px', '32px'],
  // vertical rhythm of a <Section>: [under 900px, default]
  sectionPadding: ['32px', '48px'],
  fullHeight: '100vh',
  // a closed state leaves room for the global footer rather than filling the
  // viewport, which would push its text visually high
  closedHeight: '70vh',
  gap: '8px',
  paragraphGap: '16px',
  background: '#fff',
  fontStack: `'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif`,
};

// Type tokens. Three sizes, two weights, three leadings — every style on the
// site is one combination of these.
//
// `scale` is a multiplier per size per breakpoint rather than a second table
// of values, so the responsive behaviour is a rule you can read rather than
// nine numbers to keep in sync.
const text = {
  size: { S: '10px', M: '14px', L: '24px' },
  weight: { reg: 400, bold: 700 },
  leading: { tight: 1, snug: 1.2, loose: 1.5 },
  scale: {
    S: { base: 1, L: 1, XL: 1 },
    M: { base: 1, L: 1, XL: 1.5 },
    L: { base: 1, L: 2, XL: 3 },
  },
  // leading paired to the size it was drawn against, so the common case needs
  // no decision; pass `leading` to override.
  defaultLeading: { S: 'loose', M: 'loose', L: 'snug' },
  tracking: '-0.02em',
  color: '#000',
};

export const base = {
  layout,
  text,
  colors: {
    nav10: "#3D63C6",
    nav20: "#0E2E81",
    nav30: "#132144",
    yel10: "#E7CA92",
    yel20: "#DCAB4C",
    yel30: "#BD871F",
    gre10: "#F4EFEA",
    gre20: "#D3C9BE",
    blk00: "#0F0F10",
    blk10: "#1B1B1E",
    blk20: "#313236",
    blk30: "#313236",
    blk40: "#5D5F68",
    blk50: "#787A87",
    blk60: "#A5A6B0",
    blk70: "#C2C3CE",
    
  },
    fontSizes,
    breakpoints,
    spaces,
    widths,
    fonts,
    flexDirection,
  };