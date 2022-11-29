const fontSizes = ["12px", "16px", "32px"];
fontSizes.s = fontSizes[0];
fontSizes.m = fontSizes[1];
fontSizes.l = fontSizes[2];

const breakpoints = ["600px", "900px", "1200px", "1800px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const spaces = ["8px", "12px", "16px", "24px", "32px", "56px"];
spaces.smaller = spaces[0];
spaces.small = spaces[1];
spaces.medium = spaces[2];
spaces.large = spaces[3];
spaces.larger = spaces[4];
spaces.extraLarge = spaces[5];

const gridRows = ["2"]

const widths = ["25%", "50%", "100%"];
widths.w25 = widths[0];
widths.w50 = widths[1];
widths.w100 = widths[2];

export const base = {
  colors: {
    nav10: "#3D63C6",
    nav20: "#0E2E81",
    nav30: "#132144",
    yel10: "#E7CA92",
    yel20: "#DCAB4C",
    yel30: "#BD871F",
    gre10: "#F4EFEA",
    gre20: "#D3C9BE",
    blk10: "#272E28",
    blk20: "#151716",
    
  },
    fontSizes,
    breakpoints,
    spaces,
    widths
  }