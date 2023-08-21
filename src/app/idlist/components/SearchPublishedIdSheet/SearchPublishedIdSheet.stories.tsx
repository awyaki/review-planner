import type { Meta, StoryObj } from "@storybook/react";
import { SearchPublishedIdSheet } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof SearchPublishedIdSheet> = {
  title: "SearchPublishedIdSheet",
  component: SearchPublishedIdSheet,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchPublishedIdSheet>;

export const Primary: Story = {
  render: () => <SearchPublishedIdSheet ids={[]} onClose={() => {}} />,
};
