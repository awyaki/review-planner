import type { Meta, StoryObj } from "@storybook/react";
import { MenuSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof MenuSkeleton> = {
  title: "MenuSkeleton",
  component: MenuSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MenuSkeleton>;

export const Primary: Story = {
  render: () => <MenuSkeleton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
