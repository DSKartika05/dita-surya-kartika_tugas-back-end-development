"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  function toggleTheme() {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);

    if (nextDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-white/30 hover:bg-black/10 hover:text-white dark:hover:border-white/10 dark:hover:bg-white/20 dark:hover:text-white"
      aria-label={
        darkMode ? "Switch to light mode" : "Switch to dark mode"
      }
    >
    {darkMode ? (
      <Sun className="size-4" />
    ) : (
      <Moon className="size-4" />
    )}
    </button>
  );
}