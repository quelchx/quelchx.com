import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-12 h-12 rounded focus:outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (theme === "dark" ? <BiSun /> : <BiMoon />)}
    </button>
  );
};

export default ThemeSwitch;
