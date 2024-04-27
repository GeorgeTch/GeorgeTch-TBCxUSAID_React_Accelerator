"use client";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  if (resolvedTheme === "dark") {
    return (
      <FiSun className="text-3xl mx-5" onClick={() => setTheme("light")} />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <FiMoon className="text-3xl mx-5" onClick={() => setTheme("dark")} />
    );
  }
}

export default ThemeSwitcher;
