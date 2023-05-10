import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./index";

const meta: Meta<typeof MenuItem> = {
  title: "MenuItem",
  component: MenuItem,
  argTypes: {
    color: {
      options: ["light-gray", "gray"],
      control: { type: "radio" },
    },
    rounded: {
      options: ["top", "bottom", "none"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Primary: Story = {
  args: {
    color: "light-gray",
    rounded: "none",
    text: "サンプルテキスト",
  },
};
