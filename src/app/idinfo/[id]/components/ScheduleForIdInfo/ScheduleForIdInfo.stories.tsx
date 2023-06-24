import type { Meta, StoryObj } from "@storybook/react";
import { ScheduleForIdInfo } from "./index";

const meta: Meta<typeof ScheduleForIdInfo> = {
  title: "ScheduleForIdInfo",
  component: ScheduleForIdInfo,
};

export default meta;

type Story = StoryObj<typeof ScheduleForIdInfo>;

export const Primary: Story = {
  render: () => (
    <ScheduleForIdInfo
      schedules={[
        {
          id: 123,
          baseDate: new Date(),
          daysAfter: [1, 2, 3],
        },
        {
          id: 124,
          baseDate: new Date(),
          daysAfter: [1, 3, 5, 7],
        },
      ]}
    />
  ),
};
