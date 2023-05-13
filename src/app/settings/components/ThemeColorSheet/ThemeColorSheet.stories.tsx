import type { Meta, StoryObj } from "@storybook/react";
import { ThemeColorSheet } from "./index";
import { ThemeColorContextProvider } from "@/providers";

const meta: Meta<typeof ThemeColorSheet> = {
  title: "Sheet",
  component: ThemeColorSheet,
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

type Story = StoryObj<typeof ThemeColorSheet>;

export const ThemeColor: Story = {
  render: () => <ThemeColorSheet onClose={() => {}} />,
};
