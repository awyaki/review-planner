import path from "path";
import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    if (!config.resolve?.alias) return config;
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/app": path.resolve(__dirname, "../src/app"),
      "@/lib/colors": path.resolve(__dirname, "../src/lib/colors"),
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/providers": path.resolve(__dirname, "../src/providers"),
      "@/hooks": path.resolve(__dirname, "../src/hooks"),
    };
    return config;
  },
};
export default config;
