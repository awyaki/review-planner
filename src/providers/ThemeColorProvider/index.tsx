import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { type Colors } from "@/lib/colors";

type Theme = { primary: Colors; background: Colors };

const initialTheme: Theme = {
  primary: "sky",
  background: "white",
};

export const ThemeColorContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}>({
  theme: { ...initialTheme },
  setTheme: () => {},
});

export const ThemeColorContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState({ ...initialTheme });

  return (
    <ThemeColorContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
};
