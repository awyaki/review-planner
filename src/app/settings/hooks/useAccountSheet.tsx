import { useState } from "react";
import { AccountSheet } from "../components";
import { AnimatePresence } from "framer-motion";

export const useAccountSheet = (): [() => JSX.Element, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const render = () => (
    <AnimatePresence>
      {isOpen && <AccountSheet onClose={handleClose} />}
    </AnimatePresence>
  );

  return [render, handleOpen];
};
