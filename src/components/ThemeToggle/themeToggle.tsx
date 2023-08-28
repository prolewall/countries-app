"use client";

import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

import MoonIcon from "./moon.svg";
import SunIcon from "./sun.svg";
import styles from "./themeToggle.module.css";

const ThemeToggle: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button className={styles.toggle} onClick={handleThemeChange}>
      {theme === "dark" ? (
        <MoonIcon className={styles.icon} />
      ) : (
        <SunIcon className={styles.icon} />
      )}

      <p className={styles.label}>{theme === "dark" ? "Dark" : "Light"} mode</p>
    </button>
  );
};

export default ThemeToggle;
