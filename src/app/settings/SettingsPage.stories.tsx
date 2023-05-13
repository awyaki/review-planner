import type { Meta, StoryObj } from "@storybook/react";
import SettingsPage from "./page";
import { ThemeColorContextProvider } from "@/providers";

const meta: Meta<typeof SettingsPage> = {
  title: "SettingsPage",
  component: SettingsPage,
  decorators: [
    (Story) => {
      return (
        <ThemeColorContextProvider>
          <Story />
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
