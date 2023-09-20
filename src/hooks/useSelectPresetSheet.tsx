import { useState } from "react";
import { SelectPresetSheet } from "../components";
import { AnimatePresence } from "framer-motion";

export const useSelectPresetSheet = (
  onAddNDaysAftersBasedOnPreset: (id: number) => Promise<void> | void
): [() => JSX.Element, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const render = () => (
    <AnimatePresence>
      {isOpen && (
        <SelectPresetSheet
          onClose={handleClose}
          onAddNDaysAftersBasedOnPreset={onAddNDaysAftersBasedOnPreset}
        />
      )}
    </AnimatePresence>
  );

  return [render, handleOpen];
};
