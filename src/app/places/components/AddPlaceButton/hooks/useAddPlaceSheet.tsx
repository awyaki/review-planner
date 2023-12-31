"use client";
import { useState, useCallback } from "react";
import { AddPlaceSheet } from "../components";
import { AnimatePresence } from "framer-motion";

export const useAddPlaceSheet = (): [() => React.ReactNode, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  const render = (): React.ReactNode => {
    return (
      <AnimatePresence>
        {isOpen && <AddPlaceSheet onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    );
  };

  return [render, handleOpen];
};
