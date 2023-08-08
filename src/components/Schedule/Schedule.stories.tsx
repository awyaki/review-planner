import type { Meta, StoryObj } from "@storybook/react";
import { Schedule } from "./index";

const meta: Meta<typeof Schedule> = {
  title: "Schedule",
  component: Schedule,
};

export default meta;

type Story = StoryObj<typeof Schedule>;

export const Primary: Story = {
  render: () => (
    <Schedule
      schedule={[
        {
          id: 1,
          baseDate: new Date("2023-6-23"),
          daysAfter: [
            { id: 0, value: 1 },
            { id: 1, value: 3 },
            { id: 2, value: 5 },
          ],
        },
        {
          id: 2,
          baseDate: new Date("2023-7-2"),
          daysAfter: [
            { id: 0, value: 1 },
            { id: 1, value: 3 },
            { id: 2, value: 5 },
          ],
        },
      ]}
    />
  ),
};
