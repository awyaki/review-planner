import type { Meta, StoryObj } from "@storybook/react";
import { IdItem } from "./index";

const meta: Meta<typeof IdItem> = {
  title: "ListIdItem",
  component: IdItem,
};

export default meta;

type Story = StoryObj<typeof IdItem>;

export const TopIdItem: Story = {
  render: () => (
    <IdItem id="123" color="gray" rounded="top" onClick={() => {}} />
  ),
};

export const NormalIdItem: Story = {
  render: () => <IdItem id="124" color="light-gray" onClick={() => {}} />,
};

export const BottmIdItem: Story = {
  render: () => (
    <IdItem id="125" color="gray" rounded="bottom" onClick={() => {}} />
  ),
};
