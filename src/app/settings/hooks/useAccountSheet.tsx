import { useState } from "react";
import { AccountSheet } from "../components";
import { AnimatePresence } from "framer-motion";
import { SessionUser } from "@/types";

export const useAccountSheet = (
  user: SessionUser | null
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
      {isOpen && <AccountSheet onClose={handleClose} user={user} />}
    </AnimatePresence>
  );

  return [render, handleOpen];
};
