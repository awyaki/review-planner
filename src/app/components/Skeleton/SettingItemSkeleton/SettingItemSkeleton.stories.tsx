import type { Meta, StoryObj } from "@storybook/react";
import { SettingItemSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof SettingItemSkeleton> = {
  title: "SettingItemSkeleton",
  component: SettingItemSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SettingItemSkeleton>;

export const Primary: Story = {
  render: () => <SettingItemSkeleton color="light-gray" rounded="top" />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
