import type { Meta, StoryObj } from "@storybook/react";
import NotificationsPresets from "./page";
import { ThemeColorContextProvider, BaseContextProvider } from "@/providers";

const meta: Meta<typeof NotificationsPresets> = {
  title: "NotificationsPresets",
  component: NotificationsPresets,
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

type Story = StoryObj<typeof NotificationsPresets>;

export const Primary: Story = {
  render: () => <NotificationsPresets />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
