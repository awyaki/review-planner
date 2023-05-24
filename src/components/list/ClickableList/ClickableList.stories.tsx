import { type Meta, StoryObj } from "@storybook/react";
import { ClickableList } from "./index";

const dataForList: Parameters<typeof ClickableList>["0"]["data"] = [
  { id: "1", text: "1日後" },
  { id: "2", text: "2日後" },
  { id: "3", text: "3日後" },
  { id: "4", text: "4日後" },
];

const meta: Meta<typeof ClickableList> = {
  title: "ClickableList",
  component: ClickableList,
  argTypes: {
    data: {
      options: ["3items", "4items"],
      mapping: {
        "3items": dataForList.slice(1),
        "4items": dataForList.slice(),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ClickableList>;

export const NormalList: Story = {
  args: {
    data: [
      { id: "1", text: "1日後" },
      { id: "2", text: "2日後" },
      { id: "3", text: "3日後" },
    ],
  },
};

export const OneItemList: Story = {
  args: {
    data: [{ id: "1", text: "1日後" }],
  },
};
