import type { Meta, StoryObj } from "@storybook/react";
import SettingsPage from "./page";

const meta: Meta<typeof SettingsPage> = {
  title: "SettingsPage",
  component: SettingsPage,
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
