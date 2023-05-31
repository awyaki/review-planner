import type { Meta, StoryObj } from "@storybook/react";
import IdInfoPage from "./page";
import { ThemeColorContextProvider } from "@/providers";

const meta: Meta<typeof IdInfoPage> = {
  title: "IdInfoPage",
  component: IdInfoPage,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof IdInfoPage>;

export const Primary: Story = {
  render: () => <IdInfoPage params={{ id: "123" }} />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
