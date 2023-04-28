import { type Meta, StoryObj } from "@storybook/react";
import { List } from "./index";

const meta: Meta<typeof List> = {
  title: "List",
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const NormalList: Story = {
  render: () => (
    <List
      data={[
        { id: "1", text: "1日後" },
        { id: "2", text: "2日後" },
        { id: "3", text: "3日後" },
        { id: "4", text: "4日後" },
      ]}
      onDelete={(id) => console.log(`Delete item ${id}`)}
      onUpdate={(id) => console.log(`Update item ${id}`)}
    />
  ),
};
