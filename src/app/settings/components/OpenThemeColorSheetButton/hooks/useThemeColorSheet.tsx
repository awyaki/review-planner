import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeColorSheet } from "../components";

export const useThemeColorSheet = (): [() => JSX.Element, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const render = () => {
    return (
      <AnimatePresence>
        {isOpen && <ThemeColorSheet onClose={handleClose} />}
      </AnimatePresence>
    );
  };

  return [render, handleOpen];
};
