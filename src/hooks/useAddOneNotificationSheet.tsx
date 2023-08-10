import { useState } from "react";
import { AddOneNotificationSheet } from "../components";
import { AnimatePresence } from "framer-motion";

export const useAddOneNotificationSheet = (
  onAddNotification?: (baseDate: Date, daysAfter: number) => Promise<void>
): [() => React.ReactNode, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const render = (): React.ReactNode => {
    return (
      <AnimatePresence>
        {isOpen && (
          <AddOneNotificationSheet
            onClose={() => setIsOpen(false)}
            onAddNotification={onAddNotification}
          />
        )}
      </AnimatePresence>
    );
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return [render, handleOpen];
};
