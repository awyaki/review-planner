type ColorCode = `#${string}`;

const colors = {
  sky: "#72B2E6",
  white: "#FFFFFF",
  gray: "#D8D8D8",
  lightGray: "#F1F1F1",
  darkGray: "#616161",
} satisfies {
  [k: string]: ColorCode;
};

type Colors = keyof typeof colors;

export { colors, type Colors };
