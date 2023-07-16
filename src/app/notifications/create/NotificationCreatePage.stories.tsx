import type { Meta, StoryObj } from "@storybook/react";
import NotificationsCreate from "./page";
import {
  ThemeColorContextProvider,
  BaseContextProvider,
} from "@/app/providers";

const meta: Meta<typeof NotificationsCreate> = {
  title: "NotificationsCreate",
  component: NotificationsCreate,
  decorators: [
    (Story) => {
      return (
        <ThemeColorContextProvider>
          <BaseContextProvider>
            <Story />
          </BaseContextProvider>
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
