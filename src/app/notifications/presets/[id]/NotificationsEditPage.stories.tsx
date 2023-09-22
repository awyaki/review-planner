import type { Meta, StoryObj } from "@storybook/react";
import NotificationsEdit from "./page";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof NotificationsEdit> = {
  title: "NotificationsEdit",
  component: NotificationsEdit,
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

type Story = StoryObj<typeof NotificationsEdit>;

export const Primary: Story = {
  render: () => <NotificationsEdit params={{ id: "英単語用" }} />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
