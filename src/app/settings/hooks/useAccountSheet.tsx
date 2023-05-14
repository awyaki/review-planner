import { useState } from "react";
import { AccountSheet } from "../components";
import { AnimatePresence } from "framer-motion";
import { Theme } from "@/lib/colors";

export const useAccountSheet = ({
  theme,
}: {
  theme: Theme;
}): [() => JSX.Element, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const render = () => (
    <AnimatePresence>
      {isOpen && <AccountSheet theme={theme} onClose={handleClose} />}
    </AnimatePresence>
  );

  return [render, handleOpen];
};
