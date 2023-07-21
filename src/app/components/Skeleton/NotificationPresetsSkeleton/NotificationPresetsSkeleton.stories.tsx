import type { Meta, StoryObj } from "@storybook/react";
import { NotificationPresetsSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof NotificationPresetsSkeleton> = {
  title: "NotificationPresetsSkeleton",
  component: NotificationPresetsSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NotificationPresetsSkeleton>;

export const Primary: Story = {
  render: () => <NotificationPresetsSkeleton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
