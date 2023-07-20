import type { Meta, StoryObj } from "@storybook/react";
import { SettingSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof SettingSkeleton> = {
  title: "SettingSkeleton",
  component: SettingSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SettingSkeleton>;

export const Primary: Story = {
  render: () => <SettingSkeleton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
