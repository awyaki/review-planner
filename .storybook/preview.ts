import { AppRouterContext } from "next/dist/shared/lib/app-router-context";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextRouter: {
      Provider: AppRouterContext.Provider,
    },
  },
};

export default preview;
