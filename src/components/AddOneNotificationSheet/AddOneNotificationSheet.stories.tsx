import type { Meta, StoryObj } from "@storybook/react";
import { AddOneNotificationSheet } from "./index";
import { ThemeColorContextProvider } from "@/app/providers";

const meta: Meta<typeof AddOneNotificationSheet> = {
  title: "AddOneNotificationSheet",
  component: AddOneNotificationSheet,
  decorators: [
    (Story) => (
      <ThemeColorContextProvider>
        <Story />
      </ThemeColorContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AddOneNotificationSheet>;

export const Primary: Story = {
  render: () => <AddOneNotificationSheet onClose={() => {}} />,
};
