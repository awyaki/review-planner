import type { Meta, StoryObj } from "@storybook/react";
import { NotificationCreateSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof NotificationCreateSkeleton> = {
  title: "NotificationCreateSkeleton",
  component: NotificationCreateSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NotificationCreateSkeleton>;

export const Primary: Story = {
  render: () => <NotificationCreateSkeleton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
