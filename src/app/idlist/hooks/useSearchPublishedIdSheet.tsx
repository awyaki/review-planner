import { useState } from "react";
import { SearchPublishedIdSheet } from "../components";
import { AnimatePresence } from "framer-motion";

export const useAddOneNotificationSheet = (
  ids: number[]
): [() => React.ReactNode, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const render = (): React.ReactNode => {
    return (
      <AnimatePresence>
        {isOpen && (
          <SearchPublishedIdSheet ids={ids} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    );
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return [render, handleOpen];
};
