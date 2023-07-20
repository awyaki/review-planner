import type { Meta, StoryObj } from "@storybook/react";
import { HeaderSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof HeaderSkeleton> = {
  title: "HeaderSkeleton",
  component: HeaderSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HeaderSkeleton>;

export const Primary: Story = {
  render: () => <HeaderSkeleton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
