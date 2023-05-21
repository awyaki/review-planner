"use client";
import { createContext, useState } from "react";

export type Base = "decimal" | "hexadecimal";

export const BaseContext = createContext<{
  base: Base;
  changeBase: (base: Base) => void;
}>({
  base: "decimal",
  changeBase: () => {},
});

export const BaseContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [base, setBase] = useState<Base>("decimal");

  const changeBase = (base: Base) => {
    setBase(base);
  };
  return (
    <BaseContext.Provider value={{ base, changeBase }}>
      {children}
    </BaseContext.Provider>
  );
};
