/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      "bg-primary": "rgb(var(--color-bg-primary) / <alpha-value>)",
      "bg-secondary": "rgb(var(--color-bg-secondary) / <alpha-value>)",
      "text-on-gb-primary":
        "rgb(var(--color-text-on-bg-primary) / <alpha-value>)",
      "text-on-gb-secondary":
        "rgb(var(--color-text-on-bg-secondary) / <alpha-value>)",
      sky: "#72B2E6",
      white: "#FFFFFF",
      black: "#2E2E2E",
      gray: "#D8D8D8",
      orange: "#FF8C45",
      "light-gray": "#F1F1F1",
      "dark-gray": "#616161",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
