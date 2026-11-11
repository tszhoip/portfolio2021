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

const widths = ["25%", "50%", "100%"];
widths.w25 = widths[0];
widths.w50 = widths[1];
widths.w100 = widths[2];

const flexDirection = ["row", "column"];
flexDirection.row = flexDirection[0];
flexDirection.column = flexDirection[1];

// The site-wide cap. Its own token rather than part of `layout`, because it
// is the one number that defines the page itself; everything in `layout`
// describes what happens inside it.
const maxWidth = '2000px';

// Layout tokens for the <Page>/<Section> system.
//
// A section is one of two heights and nothing else: it fills the viewport, or
// it is as tall as its content. Both are named here so the pair reads as a
// choice rather than one token and one default.

// Spacing is two scales of the same four steps, split by what they measure.
// `space` is the room around things - padding and margin. `gap` is the room
// between things - the gutter, and the gaps inside a grid or flex row.
//
// Same numbers, so the two always agree; separate names, so a change to the
// gutter does not move every margin on the site with it.
//
// Flat across every breakpoint for now. Making a step respond to viewport
// means giving that one step an array, not adding a token.
const steps = { none: '0px', tight: '8px', snug: '16px', loose: '32px' };

const space = { ...steps };
const gap = { ...steps };

// Card proportions. A ratio rather than a height, so a card is the same shape
// at every width instead of drifting from portrait to landscape as the window
// grows. Narrow screens get the portrait one, where a tall card uses the space
// a phone actually has.
const ratio = {
  portrait: '4 / 5',
  landscape: '5 / 4',
};

const layout = {
  fullHeight: '100vh',
  fitContent: 'auto',
  ratio,
  space,
  gap,
  fontStack: `'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif`,
};

// Type tokens. Three sizes, two weights, three leadings — every style on the
// site is one combination of these.
//
// `scale` is a multiplier per size per breakpoint rather than a second table
// of values, so the responsive behaviour is a rule you can read rather than
// nine numbers to keep in sync.
const text = {
  // `size` is the size from the narrowest width up. `steps` names only the
  // breakpoints where it changes, and a size holds its last value until the
  // next one - so the empty object against S is the statement that S never
  // moves.
  //
  // These were multipliers, which read well until a step had to land on a
  // value the base did not divide into: 56 is not a multiple of 24. Pixels
  // say what renders, and that is what /system has to print anyway.
  size: { S: '10px', M: '14px', L: '24px' },
  weight: { reg: 400, bold: 700 },
  leading: { tight: 1, snug: 1.2, loose: 1.5 },
  steps: {
    S: {},
    M: { XL: '21px' },
    L: { M: '48px', XL: '64px' },
  },
  // leading paired to the size it was drawn against, so the common case needs
  // no decision; pass `leading` to override.
  defaultLeading: { S: 'loose', M: 'loose', L: 'snug' },
  tracking: '-0.02em',
  color: '#000',
};

export const base = {
  maxWidth,
  layout,
  text,
  // styled-system reads `theme.space` for every p/m prop, so the same scale
  // sits here under the name it looks for. That is what lets a call site say
  // p="tight" instead of an index into a table nobody can read.
  //
  // It also fails loudly: a leftover numeric index finds no key here and
  // renders no padding at all, rather than quietly rendering the wrong value
  // off styled-system's built-in scale the way the old `spaces` array did.
  space,
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
    widths,
    fonts,
    flexDirection,
  };