import type { Meta, StoryObj } from "@storybook/react";
import { Schedule } from "./index";

const meta: Meta<typeof Schedule> = {
  title: "Schedule",
  component: Schedule,
};

export default meta;

type Story = StoryObj<typeof Schedule>;

export const Primary: Story = {
  render: () => (
    <Schedule
      schedule={
        new Map([
          [new Date("2023-6-23"), [1, 2, 3]],
          [new Date("2023-7-1"), [1, 3, 5, 7]],
        ])
      }
    />
  ),
};
