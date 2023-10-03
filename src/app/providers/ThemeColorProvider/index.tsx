"use client";
import { createContext, useState, useMemo } from "react";
import { type Theme, type ThemeName, themes } from "@/lib/colors";

const initialThemeName: ThemeName = "sky-light";
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
  const [themeName, setThemeName] = useState<ThemeName>(initialThemeName);
  const theme = useMemo(() => themes[themeName], [themeName]);

  const changeTheme = (themeName: ThemeName) => {
    const root = document.querySelector(":root");
    if (!(root instanceof HTMLElement)) return;

    const theme = themes[themeName];

    root.style.setProperty("--color-primary", theme["primary"].rgb);
    root.style.setProperty("--color-bg-primary", theme["bg-primary"].rgb);
    root.style.setProperty("--color-bg-secondary", theme["bg-secondary"].rgb);
    root.style.setProperty(
      "--color-text-on-bg-primary",
      theme["text-on-bg-primary"].rgb
    );
    root.style.setProperty(
      "--color-text-on-bg-secondary",
      theme["text-on-bg-secondary"].rgb
    );

    setThemeName(themeName);
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
