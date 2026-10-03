"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react/ssr";

export default function ThemeToggle() {
  const transitionTimeout = useRef<number | undefined>(undefined);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const shouldUseDark = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", shouldUseDark);

    return () => {
      if (transitionTimeout.current !== undefined) {
        window.clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");

    root.classList.add("theme-transition");
    root.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);

    if (transitionTimeout.current !== undefined) {
      window.clearTimeout(transitionTimeout.current);
    }
    transitionTimeout.current = window.setTimeout(() => {
      root.classList.remove("theme-transition");
      transitionTimeout.current = undefined;
    }, 380);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative h-4.5 w-4.5 text-ink-muted hover:text-gold dark:text-chalk-muted dark:hover:text-gold"
    >
      <Sun
        aria-hidden="true"
        size={18}
        weight="regular"
        className="theme-toggle-icon theme-toggle-sun"
      />
      <Moon
        aria-hidden="true"
        size={18}
        weight="regular"
        className="theme-toggle-icon theme-toggle-moon"
      />
    </button>
  );
}
