import { colors } from "@/lib/colors";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckableThemeColorCircle } from "./index";

const meta: Meta<typeof CheckableThemeColorCircle> = {
  title: "CheckableThemeColorCircle",
  component: CheckableThemeColorCircle,
  argTypes: {
    isChecked: {
      options: [true, false],
      control: { type: "radio" },
    },
    background: {
      options: [...Object.keys(colors)],
      control: { type: "select" },
    },
    theme: {
      options: [...Object.keys(colors)],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckableThemeColorCircle>;

export const Primary: Story = {
  args: {
    isChecked: true,
    background: "white",
    theme: "sky",
  },
};
