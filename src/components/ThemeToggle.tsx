"use client";

import { useEffect, useState } from "react";

const THEME_KEY = "linknamu-theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {
      // ignore (e.g. private browsing)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-lg shadow-sm backdrop-blur transition hover:scale-105 dark:border-white/10 dark:bg-white/10"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
