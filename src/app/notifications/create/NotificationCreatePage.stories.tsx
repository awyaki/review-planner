import type { Meta, StoryObj } from "@storybook/react";
import NotificationsCreate from "./page";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof NotificationsCreate> = {
  title: "NotificationsCreate",
  component: NotificationsCreate,
  decorators: [
    (Story) => {
      return (
        <ThemeColorContextProvider>
          <Story />
        </ThemeColorContextProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof NotificationsCreate>;

export const Primary: Story = {
  render: () => <NotificationsCreate />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
