import type { Meta, StoryObj } from "@storybook/react";
import { AccountSheet } from "./index";

const meta: Meta<typeof AccountSheet> = {
  title: "Sheet",
  component: AccountSheet,
};

export default meta;

type Story = StoryObj<typeof AccountSheet>;

export const Account: Story = {
  render: () => <AccountSheet onClose={() => {}} />,
};
