

const fontSizes = ["9px","12px", "16px", "32px","48px","64px","80px"];
fontSizes.xxs = fontSizes[0];
fontSizes.xs = fontSizes[1];
fontSizes.s = fontSizes[2];
fontSizes.m = fontSizes[3];
fontSizes.l = fontSizes[4];
fontSizes.xl = fontSizes[5];
fontSizes.xxl = fontSizes[6];

const fonts = ["Helvetica", "AIR", "Hong", "PIX"];
fonts.helvetica = fonts[0];
fonts.air = fonts[1];
fonts.hong = fonts[2];
fonts.pix = fonts[3];


const breakpoints = ["600px", "900px", "1400px", "1800px"];
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
  };