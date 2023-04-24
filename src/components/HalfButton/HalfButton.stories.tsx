import type { StoryObj, Meta } from "@storybook/react";
import { HalfButton } from "./index";

const meta: Meta<typeof HalfButton> = {
  title: "HalfButton",
  component: HalfButton,
};

export default meta;

type Story = StoryObj<typeof HalfButton>;

export const AddButton: Story = {
  render: () => (
    <HalfButton
      text="追加"
      color="sky"
      textColor="white"
      roundedSide="right"
      onClick={() => {}}
    />
  ),
};

export const SecondaryAddButton: Story = {
  render: () => (
    <HalfButton
      text="追加"
      color="white"
      textColor="sky"
      roundedSide="right"
      onClick={() => {}}
    />
  ),
};

export const CancelButton: Story = {
  render: () => (
    <HalfButton
      text="キャンセル"
      color="gray"
      textColor="dark-gray"
      onClick={() => {}}
      roundedSide="left"
    />
  ),
};
export const SaveButton: Story = {
  render: () => (
    <HalfButton
      text="保存"
      color="sky"
      textColor="white"
      roundedSide="right"
      onClick={() => {}}
    />
  ),
};
