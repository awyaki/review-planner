import { useState } from "react";
import { AddOneNotificationSheet } from "../components";
import { AnimatePresence } from "framer-motion";

export const useAddOneNotificationSheet = (): [
  () => React.ReactNode,
  () => void
] => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const render = (): React.ReactNode => {
    return (
      <AnimatePresence>
        {isOpen && <AddOneNotificationSheet onClose={handleClose} />}
      </AnimatePresence>
    );
  };

  return [render, handleClose];
};
