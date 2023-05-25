import type { Meta, StoryObj } from "@storybook/react";
import { EmptyScheduleItem } from "./index";

const meta: Meta<typeof EmptyScheduleItem> = {
  title: "EmptyScheduleItem",
  component: EmptyScheduleItem,
};

export default meta;

type Story = StoryObj<typeof EmptyScheduleItem>;

export const Primary: Story = {
  render: () => <EmptyScheduleItem />,
};
