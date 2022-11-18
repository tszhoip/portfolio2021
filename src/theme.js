const fontSizes = ["12px", "16px", "32px"];
fontSizes.s = fontSizes[0];
fontSizes.m = fontSizes[1];
fontSizes.l = fontSizes[2];

const breakpoints = ["600px", "900px", "1200px", "1800px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const spaces = ["4px", "8px", "16px", "32px", "48px", "56px"];
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



// export default {
//   colors: {
//     primary: "#ED4B9E",
//     secondary: "#4B4DED",
//     tertiary: "#F3D9DA",
//     dark: "red",
//     success: "#31D0AA",
//     text: "#4A4A68",
//     subtleText: "#8C8CA1",
//     accent: "#ECF1F4",
//     light: "#FAFCFE",
//     white: "#FFFFFF",
//   },
//   fontSizes,
//   breakpoints,
//   spaces
// };

export const base = {
  colors: {
    primary: "green",
    secondary: "#4B4DED",
    tertiary: "#F3D9DA",
    dark: "red",
    success: "#31D0AA",
    modes: {
      dark: {
        primary: "red",
        secondary: "#4B4DED",
        tertiary: "#F3D9DA",
        dark: "red",
        success: "#31D0AA",
      },
      light: {
        primary: "blue",
        secondary: "#4B4DED",
        tertiary: "#F3D9DA",
        dark: "blue",
        success: "#31D0AA",
      },
    }
  },
    fontSizes,
    breakpoints,
    spaces,
    widths
  }