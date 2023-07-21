import type { Meta, StoryObj } from "@storybook/react";
import { IdInfoSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof IdInfoSkeleton> = {
  title: "IdInfoSkeleton",
  component: IdInfoSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof IdInfoSkeleton>;

export const Primary: Story = {
  render: () => <IdInfoSkeleton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
