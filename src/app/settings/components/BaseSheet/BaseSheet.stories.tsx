import type { Meta, StoryObj } from "@storybook/react";
import { BaseSheet } from "./index";

const meta: Meta<typeof BaseSheet> = {
  title: "Sheet",
  component: BaseSheet,
};

export default meta;

type Story = StoryObj<typeof BaseSheet>;

export const Base: Story = {
  render: () => <BaseSheet onClose={() => {}} />,
};
