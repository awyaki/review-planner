import type { Meta, StoryObj } from "@storybook/react";
import { ThemeColorCircle } from "./index";

const meta: Meta<typeof ThemeColorCircle> = {
  title: "ThemeColorCircle",
  component: ThemeColorCircle,
};

export default meta;

type Story = StoryObj<typeof ThemeColorCircle>;

export const Primary: Story = {
  render: () => <ThemeColorCircle background="white" theme="sky" />,
};
