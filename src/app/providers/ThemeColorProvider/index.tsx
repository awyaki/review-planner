"use client";
import { createContext, useMemo, useSyncExternalStore } from "react";
import { type Theme, type ThemeName, themes } from "@/lib/colors";
import { themeStore, initialThemeName } from "./themeStore";

const initialTheme = { ...themes[initialThemeName] };

export const ThemeColorContext = createContext<{
  themeName: ThemeName;
  theme: Theme;
  changeTheme: (theme: ThemeName) => void;
}>({
  themeName: initialThemeName,
  theme: { ...initialTheme },
  changeTheme: () => {},
});

export const ThemeColorContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const themeName = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerShanpshot
  );
  const theme = useMemo(() => themes[themeName], [themeName]);

  const changeTheme = (themeName: ThemeName) => {
    themeStore.changeTheme(themeName);
  };

  return (
    <ThemeColorContext.Provider
      value={{
        theme,
        themeName,
        changeTheme,
      }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
};
