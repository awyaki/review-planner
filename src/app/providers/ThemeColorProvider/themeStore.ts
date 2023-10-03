"use client";
import { ThemeName, parseIntoThemeName, themes } from "@/lib/colors";

const key = "review_planner_theme_color";

export const initialThemeName: ThemeName = "sky-light";
let listeners: (() => void)[] = [];

export const themeStore = {
  changeTheme(themeName: ThemeName) {
    window.localStorage.setItem(key, themeName);
    console.log("changeTheme", themeName);
    changeTheme(themeName);
    emitChange();
  },
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot(): ThemeName {
    const _themeName = window.localStorage.getItem(key) ?? initialThemeName;
    const themeName = parseIntoThemeName(_themeName);
    changeTheme(themeName);
    return themeName;
  },
  getServerShanpshot(): ThemeName {
    return initialThemeName;
  },
};

const emitChange = () => {
  for (let listener of listeners) {
    listener();
  }
};

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
};
