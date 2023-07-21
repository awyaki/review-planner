import type { Meta, StoryObj } from "@storybook/react";
import { IdListSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof IdListSkeleton> = {
  title: "IdListSkeleton",
  component: IdListSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof IdListSkeleton>;

export const Primary: Story = {
  render: () => <IdListSkeleton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
