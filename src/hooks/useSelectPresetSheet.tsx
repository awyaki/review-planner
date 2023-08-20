import { useState } from "react";
import { SelectPresetSheet } from "../components";
import { AnimatePresence } from "framer-motion";
import { DaysAfterForPreset } from "@/db";

export const useSelectPresetSheet = (
  onAddPreset?: (
    baseDate: Date,
    daysAfter: DaysAfterForPreset[]
  ) => Promise<void>
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
        <SelectPresetSheet onClose={handleClose} onAddPreset={onAddPreset} />
      )}
    </AnimatePresence>
  );

  return [render, handleOpen];
};
