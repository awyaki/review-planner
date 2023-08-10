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
