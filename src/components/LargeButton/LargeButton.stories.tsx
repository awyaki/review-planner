import type { Meta, StoryObj } from "@storybook/react";
import { LargeButton } from "./index";

const meta: Meta<typeof LargeButton> = {
  title: "Button",
  component: LargeButton,
};

export default meta;

type Story = StoryObj<typeof LargeButton>;

export const CloseButton: Story = {
  render: () => <LargeButton text="閉じる" onClick={() => {}} />,
};

export const OpenSearchSheetButton: Story = {
  render: () => <LargeButton text="検索画面を開く" onClick={() => {}} />,
};

export const ConfirmNotificationButton: Story = {
  render: () => <LargeButton text="確定する" onClick={() => {}} />,
};
