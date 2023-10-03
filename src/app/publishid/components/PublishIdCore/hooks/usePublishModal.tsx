import { useState, useCallback } from "react";
import { PublishModal } from "../../PublishModal";
import { AnimatePresence } from "framer-motion";
export const usePublishModal = (
  place: string
): [() => React.ReactNode, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const render = useCallback(
    () => (
      <AnimatePresence>
        {isOpen && <PublishModal place={place} onClose={handleClose} />}
      </AnimatePresence>
    ),
    [place, isOpen, handleClose]
  );

  return [render, handleOpen];
};
