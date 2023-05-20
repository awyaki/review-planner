export const colors = {
  sky: { code: "#72B2E6", rgb: "114 178 230" },
  white: { code: "#FFFFFF", rgb: "255 255 255" },
  black: { code: "#2E2E2E", rgb: "46 46 46" },
  gray: { code: "#D8D8D8", rgb: "216 216 216" },
  orange: { code: "#FF8C45", rgb: "255 140 69" },
  "light-gray": { code: "#F1F1F1", rgb: "241 241 241" },
  "dark-gray": { code: "#616161", rgb: "97 97 97" },
};

export type Colors = keyof typeof colors;

export const themes = [
  { primary: "sky", background: "white" },
  { primary: "orange", background: "white" },
] as const;

export type Theme = FlatArray<typeof themes, 1>;
