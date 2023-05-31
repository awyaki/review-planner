import type { Meta, StoryObj } from "@storybook/react";
import { NotificationItem } from "./index";

const meta: Meta<typeof NotificationItem> = {
  title: "NotificationItem",
  component: NotificationItem,
};

export default meta;

type Story = StoryObj<typeof NotificationItem>;

export const TopNotificationItem: Story = {
  render: () => (
    <NotificationItem
      day="1日"
      color="gray"
      rounded="top"
      isCompleted={true}
      onClick={() => {}}
    />
  ),
};

export const NormalNotificationItem: Story = {
  render: () => (
    <NotificationItem
      day="3日"
      color="light-gray"
      isCompleted={false}
      onClick={() => {}}
    />
  ),
};

export const BottmNotificationItem: Story = {
  render: () => (
    <NotificationItem
      day="5日"
      color="gray"
      rounded="bottom"
      isCompleted={true}
      onClick={() => {}}
    />
  ),
};
