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
  "bg-primary": Color;
  "bg-secondary": Color;
  "text-on-bg-primary": Color;
  "text-on-bg-secondary": Color;
};

export const themes = {
  "sky-light": {
    primary: { ...colors.sky },
    "bg-primary": { ...colors.white },
    "bg-secondary": { ...colors.sky },
    "text-on-bg-primary": { ...colors["dark-gray"] },
    "text-on-bg-secondary": { ...colors.white },
  },
  "orange-light": {
    primary: { ...colors.orange },
    "bg-primary": { ...colors.white },
    "bg-secondary": { ...colors.orange },
    "text-on-bg-primary": { ...colors["dark-gray"] },
    "text-on-bg-secondary": { ...colors.white },
  },
} satisfies { [k: string]: Theme };

export type ThemeName = keyof typeof themes;
