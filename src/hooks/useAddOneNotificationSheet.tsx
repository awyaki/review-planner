"use client";
import { useState } from "react";
import { AddOneNotificationSheet } from "../components";
import { AnimatePresence } from "framer-motion";
import { NDaysAfterForClient } from "@/db";

export const useAddOneNotificationSheet = (
  onAddNotification?: (
    nDaysAfter: Omit<NDaysAfterForClient, "id">
  ) => void | Promise<void>
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
