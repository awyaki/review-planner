type Color = {
  code: string;
  rgb: string;
};

export const colors = {
  sky: { code: "#72B2E6", rgb: "114 178 230" },
  white: { code: "#FFFFFF", rgb: "255 255 255" },
  black: { code: "#2E2E2E", rgb: "46 46 46" },
  gray: { code: "#D8D8D8", rgb: "216 216 216" },
  orange: { code: "#FF8C45", rgb: "255 140 69" },
  "light-gray": { code: "#F1F1F1", rgb: "241 241 241" },
  "dark-gray": { code: "#616161", rgb: "97 97 97" },
} satisfies { [k: string]: Color };

export type Colors = keyof typeof colors;

export type Theme = {
  primary: Color;
  "text-on-primary": Color;
  "bg-primary": Color;
  "bg-secondary": Color;
  "text-on-bg-primary": Color;
  "text-on-bg-secondary": Color;
};

export const themeNames = ["sky-light", "orange-light"] as const;
export type ThemeName = FlatArray<typeof themeNames, 0>;

export const themes = {
  "sky-light": {
    primary: { ...colors.sky },
    "text-on-primary": { ...colors.white },
    "bg-primary": { ...colors.white },
    "bg-secondary": { ...colors.sky },
    "text-on-bg-primary": { ...colors["dark-gray"] },
    "text-on-bg-secondary": { ...colors.white },
  },
  "orange-light": {
    primary: { ...colors.orange },
    "text-on-primary": { ...colors.white },
    "bg-primary": { ...colors.white },
    "bg-secondary": { ...colors.orange },
    "text-on-bg-primary": { ...colors["dark-gray"] },
    "text-on-bg-secondary": { ...colors.white },
  },
} satisfies { [k in ThemeName]: Theme };

const isThemeName = (u: string): u is ThemeName => {
  return themeNames.some((name) => u === name);
};

export const parseIntoThemeName = (u: string): ThemeName => {
  if (isThemeName(u)) {
    return u;
  }
  throw new Error("Failed to parse into ThemeName");
};
