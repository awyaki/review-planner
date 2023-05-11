import type { Meta, StoryObj } from "@storybook/react";
import MenuPage from "./page";

const meta: Meta<typeof MenuPage> = {
  title: "MenuPage",
  component: MenuPage,
};

export default meta;

type Story = StoryObj<typeof MenuPage>;

export const Primary: Story = {
  render: () => <MenuPage />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
