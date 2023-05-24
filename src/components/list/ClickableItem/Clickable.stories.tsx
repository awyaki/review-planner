import type { Meta, StoryObj } from "@storybook/react";
import { ClickableItem } from "./index";

const meta: Meta<typeof ClickableItem> = {
  title: "ClickableListItem",
  component: ClickableItem,
};

export default meta;

type Story = StoryObj<typeof ClickableItem>;

export const TopItem: Story = {
  render: () => (
    <ClickableItem
      text="1日後"
      color="gray"
      rounded="top"
      onClick={() => console.log("clicked")}
    />
  ),
};

export const NormalItem: Story = {
  render: () => <ClickableItem text="3日後" color="light-gray" />,
};

export const BottmItem: Story = {
  render: () => <ClickableItem text="5日後" color="gray" rounded="bottom" />,
};
