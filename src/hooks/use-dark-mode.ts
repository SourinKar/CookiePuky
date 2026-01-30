import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage first
    const stored = localStorage.getItem("theme");
    if (stored) {
      return stored === "dark";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleDarkMode };
}
