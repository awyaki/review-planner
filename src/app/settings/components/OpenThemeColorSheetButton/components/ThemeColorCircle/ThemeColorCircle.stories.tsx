import type { Meta, StoryObj } from "@storybook/react";
import { ThemeColorCircle } from "./index";
import { colors } from "@/lib/colors";

const meta: Meta<typeof ThemeColorCircle> = {
  title: "ThemeColorCircle",
  component: ThemeColorCircle,
};

export default meta;

type Story = StoryObj<typeof ThemeColorCircle>;

export const Primary: Story = {
  render: () => (
    <ThemeColorCircle
      background={colors["white"].code}
      color={colors["orange"].code}
    />
  ),
};
