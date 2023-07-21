import type { Meta, StoryObj } from "@storybook/react";
import { HeaderWithMenuSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof HeaderWithMenuSkeleton> = {
  title: "HeaderWithMenuSkeleton",
  component: HeaderWithMenuSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HeaderWithMenuSkeleton>;

export const Primary: Story = {
  render: () => <HeaderWithMenuSkeleton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
