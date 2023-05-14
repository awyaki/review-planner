import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { Meta, StoryObj } from "@storybook/react";
import { Sheet } from "./index";

const meta: Meta<typeof Sheet> = {
  title: "Sheet",
  component: Sheet,
};

export default meta;

type Story = StoryObj<typeof Sheet>;

const OpenCloseTest: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Click to Open the Sheet</button>
      <AnimatePresence>
        {isOpen && (
          <Sheet onClose={() => setIsOpen(false)}>
            <h2>サンプルシート</h2>
          </Sheet>
        )}
      </AnimatePresence>
    </>
  );
};

export const AbstructedSheet: Story = {
  render: () => <OpenCloseTest />,
};
