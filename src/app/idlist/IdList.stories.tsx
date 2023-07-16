import type { Meta, StoryObj } from "@storybook/react";
import IdList from "./page";
import {
  ThemeColorContextProvider,
  BaseContextProvider,
} from "@/app/providers";

const meta: Meta<typeof IdList> = {
  title: "IdList",
  component: IdList,
  decorators: [
    (Story) => {
      return (
        <ThemeColorContextProvider>
          <BaseContextProvider>
            <Story />
          </BaseContextProvider>
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
