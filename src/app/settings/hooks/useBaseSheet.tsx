import { useState } from "react";
import { BaseSheet } from "../components";
import { AnimatePresence } from "framer-motion";

export const useBaseSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const render = () => (
    <AnimatePresence>
      {isOpen && <BaseSheet onClose={handleClose} />}
    </AnimatePresence>
  );

  return [render, handleOpen];
};
