import type { Meta, StoryObj } from "@storybook/react";
import { BaseSheet } from "./index";
import { BaseContextProvider } from "@/providers";

const meta: Meta<typeof BaseSheet> = {
  title: "Sheet",
  component: BaseSheet,
  decorators: [
    (Story) => {
      return (
        <BaseContextProvider>
          <Story />
        </BaseContextProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof BaseSheet>;

export const Base: Story = {
  render: () => <BaseSheet onClose={() => {}} />,
};
