"use client";
import { useEffect, useState, startTransition } from "react";

const ThemeToggle = () => {
  // Same default on server + first client render avoids hydration mismatch; real preference runs in useEffect.
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const resolved =
      savedTheme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    startTransition(() => {
      setTheme(resolved);
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full bg-(--card-bg) border-2 border-(--border) hover:border-[#e5383b] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle theme"
    >
      <span
        className={`text-2xl transition-transform duration-500 ${theme === "dark" ? "rotate-180" : "rotate-0"}`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </span>
      <div className="absolute inset-0 rounded-full bg-[#e5383b]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

export default ThemeToggle;

