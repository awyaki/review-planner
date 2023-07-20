import type { Meta, StoryObj } from "@storybook/react";
import { MenuItemSkeleton } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof MenuItemSkeleton> = {
  title: "MenuItemSkeleton",
  component: MenuItemSkeleton,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MenuItemSkeleton>;

export const Primary: Story = {
  render: () => <MenuItemSkeleton color="light-gray" rounded="top" />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
