"use client";
import { useState, useCallback } from "react";
import { SelectPlaceSheet } from "../../SelectPlaceSheet";
import { AnimatePresence } from "framer-motion";

export const useSelectPlaceSheet = (
  onSelectPlace: (place: string) => void
): [() => React.ReactNode, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  const render = () => {
    return (
      <AnimatePresence>
        {isOpen && (
          <SelectPlaceSheet
            onClose={() => setIsOpen(false)}
            onSelectPlace={onSelectPlace}
          />
        )}
      </AnimatePresence>
    );
  };
  return [render, handleOpen];
};
