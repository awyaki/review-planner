import type { Meta, StoryObj } from "@storybook/react";
import { ScheduleForIdInfo } from "./index";

const meta: Meta<typeof ScheduleForIdInfo> = {
  title: "ScheduleForIdInfo",
  component: ScheduleForIdInfo,
};

export default meta;

type Story = StoryObj<typeof ScheduleForIdInfo>;

export const Primary: Story = {
  render: () => <ScheduleForIdInfo nDaysAfters={[]} />,
};
