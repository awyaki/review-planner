import type { Meta, StoryObj } from "@storybook/react";
import { Item } from "./index";

const meta: Meta<typeof Item> = {
  title: "ListItem",
  component: Item,
};

export default meta;

type Story = StoryObj<typeof Item>;

export const TopItem: Story = {
  render: () => <Item text="1日後" color="gray" rounded="top" />,
};
