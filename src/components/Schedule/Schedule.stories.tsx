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
      schedule={[
        {
          id: 1,
          baseDate: new Date("2023-6-23"),
          daysAfter: 1,
        },
        {
          id: 2,
          baseDate: new Date("2023-6-23"),
          daysAfter: 3,
        },
        {
          id: 3,
          baseDate: new Date("2023-7-23"),
          daysAfter: 5,
        },
      ]}
    />
  ),
};
