import type { Meta, StoryObj } from "@storybook/react";
import PublishId from "./page";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof PublishId> = {
  title: "PublishId",
  component: PublishId,
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

type Story = StoryObj<typeof PublishId>;

export const Primary: Story = {
  render: () => <PublishId />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
