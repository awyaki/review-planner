import type { Meta, StoryObj } from "@storybook/react";
import IdList from "./page";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof IdList> = {
  title: "IdList",
  component: IdList,
  decorators: [
    (Story) => {
      return (
        <ThemeColorContextProvider>
          <Story />
        </ThemeColorContextProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof IdList>;

export const Primary: Story = {
  render: () => <IdList />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
