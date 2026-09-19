"use client";

import { useEffect, useRef } from "react";
import { Moon, Sun } from "@phosphor-icons/react/ssr";

export default function ThemeToggle() {
  const transitionTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", storedTheme === "dark");

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
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="relative h-[18px] w-[18px] text-[var(--color-ink-muted)] hover:text-[var(--color-gold)] dark:text-[var(--color-chalk-muted)] dark:hover:text-[var(--color-gold)]"
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
