import type { Meta, StoryObj } from "@storybook/react";
import { SelectPresetSheet } from "./index";
import { ThemeColorContextProvider } from "@/providers";

const meta: Meta<typeof SelectPresetSheet> = {
  title: "SelectPresetSheet",
  component: SelectPresetSheet,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SelectPresetSheet>;

export const Primary: Story = {
  render: () => <SelectPresetSheet onClose={() => {}} />,
};
