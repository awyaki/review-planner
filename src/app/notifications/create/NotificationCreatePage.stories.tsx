import type { Meta, StoryObj } from "@storybook/react";
import NotificationsEdit from "./page";
import { ThemeColorContextProvider, BaseContextProvider } from "@/providers";

const meta: Meta<typeof NotificationsEdit> = {
  title: "NotificationsEdit",
  component: NotificationsEdit,
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

type Story = StoryObj<typeof NotificationsEdit>;

export const Primary: Story = {
  render: () => <NotificationsEdit />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
