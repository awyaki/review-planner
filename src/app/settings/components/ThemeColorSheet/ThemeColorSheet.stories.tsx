import type { Meta, StoryObj } from "@storybook/react";
import { ThemeColorSheet } from "./index";

const meta: Meta<typeof ThemeColorSheet> = {
  title: "Sheet",
  component: ThemeColorSheet,
};

export default meta;

type Story = StoryObj<typeof ThemeColorSheet>;

export const ThemeColor: Story = {
  render: () => <ThemeColorSheet onClose={() => {}} />,
};
