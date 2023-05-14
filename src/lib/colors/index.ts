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

export const themes = [
  { primary: "sky", background: "white" },
  { primary: "orange", background: "white" },
] as const;

export type Theme = FlatArray<typeof themes, 1>;

export const baseColorVariant = {
  sky: {
    white: "bg-sky text-white",
  },
  orange: {
    white: "bg-orange text-white",
  },
} satisfies {
  [primary in Theme["primary"]]: {
    [background in Theme["background"]]: `bg-${primary} text-${background}`;
  };
};
