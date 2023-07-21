import type { Meta, StoryObj } from "@storybook/react";
import { PublishIdSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof PublishIdSkeleton> = {
  title: "PublishIdSkeleton",
  component: PublishIdSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PublishIdSkeleton>;

export const Primary: Story = {
  render: () => <PublishIdSkeleton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
