import type { Meta, StoryObj } from "@storybook/react";
import MenuPage from "./page";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof MenuPage> = {
  title: "MenuPage",
  component: MenuPage,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MenuPage>;

export const Primary: Story = {
  render: () => <MenuPage />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
