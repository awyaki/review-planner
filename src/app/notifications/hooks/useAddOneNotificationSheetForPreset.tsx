"use client";
import { useState } from "react";
import { AddOneNotificationSheetForPreset } from "../components";
import { AnimatePresence } from "framer-motion";

export const useAddOneNotificationSheetForPreset = (
  onAddNotification?: (day: number) => void
): [() => React.ReactNode, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const render = (): React.ReactNode => {
    return (
      <AnimatePresence>
        {isOpen && (
          <AddOneNotificationSheetForPreset
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
