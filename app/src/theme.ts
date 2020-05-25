const SPACING = 4;

export const vidris = {
  vidris1: "#440154FF",
  vidris2: "#481567FF",
  vidris3: "#482677FF",
  vidris4: "#453781FF",
  vidris5: "#404788FF",
  vidris6: "#39568CFF",
  vidris7: "#33638DFF",
  vidris8: "#2D708EFF",
  vidris9: "#287D8EFF",
  vidris10: "#238A8DFF",
  vidris11: "#1F968BFF",
  vidris12: "#20A387FF",
  vidris13: "#29AF7FFF",
  vidris14: "#3CBB75FF",
  vidris15: "#55C667FF",
  vidris16: "#73D055FF",
  vidris17: "#95D840FF",
  vidris18: "#B8DE29FF",
  vidris19: "#DCE319FF",
  vidris20: "#FDE725FF",
};

//https://material-ui.com/customization/color/
export const theme = {
  fontBold: "700",
  fontNormal: "400",
  units: (unit: number, isNumber?: boolean) =>
    isNumber ? SPACING * unit : `${SPACING * unit}px`,
  input: () =>
    `height: 34px;
      line-height: 34px;
      padding:0 8px;`,

  gray: "#9e9e9e",
  gray50: "#fafafa",
  gray100: "#f5f5f5",
  gray200: "#eeeeee",
  gray300: "#e0e0e0",
  gray400: "#bdbdbd",
  gray500: "#9e9e9e",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#212121",

  tertiaryDark: "#440154",
  tertiaryMain: "#67AACA",
  tertiaryLight: "#BFE2F3",
  tertiaryContrastText: "#000",
  secondaryDark: "#197762",
  secondaryMain: "#3CBB75",
  secondaryLight: "#AEECDE",
  secondaryContrastText: "#000",
  primaryDark: "#95D840",
  primaryMain: "#DCE319",
  primaryLight: "#FDE725",
  primaryContrastText: "#000",

  ...vidris,
};
