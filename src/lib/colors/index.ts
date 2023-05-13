/*
 * This colors object must be
 * sync to confing.theme.colors in tailwind.config.js
 **/
export const colors = {
  sky: "#72B2E6",
  white: "#FFFFFF",
  black: "#2E2E2E",
  gray: "#D8D8D8",
  orange: "#FF8C45",
  "light-gray": "#F1F1F1",
  "dark-gray": "#616161",
};

export type Colors = keyof typeof colors;

export type Theme = { primary: Colors; background: Colors };
