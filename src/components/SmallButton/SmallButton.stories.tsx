import type { Meta, StoryObj } from "@storybook/react";
import { SmallButton } from "./index";

const meta: Meta<typeof SmallButton> = {
  title: "Button",
  component: SmallButton,
};

export default meta;

type Story = StoryObj<typeof SmallButton>;

export const MenuButton: Story = {
  render: () => <SmallButton text="メニュー" onClick={() => {}} />,
};

export const AddNewNotificationButton: Story = {
  render: () => <SmallButton text="通知を追加" onClick={() => {}} />,
};

export const SelectFromPresetsButton: Story = {
  render: () => <SmallButton text="プリセットから選ぶ" onClick={() => {}} />,
};
