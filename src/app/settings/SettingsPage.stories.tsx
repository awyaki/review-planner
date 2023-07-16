import type { Meta, StoryObj } from "@storybook/react";
import SettingsPage from "./page";
import {
  ThemeColorContextProvider,
  BaseContextProvider,
} from "@/app/providers";

const meta: Meta<typeof SettingsPage> = {
  title: "SettingsPage",
  component: SettingsPage,
  decorators: [
    (Story) => {
      return (
        <ThemeColorContextProvider>
          <BaseContextProvider>
            <Story />
          </BaseContextProvider>
        </ThemeColorContextProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof SettingsPage>;

export const Primary: Story = {
  render: () => <SettingsPage />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
