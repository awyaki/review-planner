import type { Meta, StoryObj } from "@storybook/react";
import { Schedule } from "./index";

const meta: Meta<typeof Schedule> = {
  title: "Schedule",
  component: Schedule,
};

export default meta;

type Story = StoryObj<typeof Schedule>;

export const Primary: Story = {
  render: () => <Schedule nDaysAfters={[]} />,
};
