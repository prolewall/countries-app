"use client";

import { FC, useEffect, useState } from "react";

import MoonIcon from "./moon.svg";
import SunIcon from "./sun.svg";
import styles from "./themeToggle.module.css";

function getInitialTheme() {
  const savedSetup = localStorage.getItem("theme");
  if (savedSetup !== null) {
    return savedSetup;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}

const ThemeToggle: FC = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initialTheme = getInitialTheme();

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const handleThemeChange = (isDarkMode: boolean) => {
    const newTheme = isDarkMode ? "dark" : "light";
    setTheme(newTheme);

    window.localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <label htmlFor="theme" className={styles.container}>
      <input
        className={styles.input}
        type="checkbox"
        name="theme"
        id="theme"
        checked={theme === "dark"}
        onChange={(event) => {
          handleThemeChange(event.target.checked);
        }}
      ></input>
      {theme === "dark" ? (
        <MoonIcon className={styles.icon} />
      ) : (
        <SunIcon className={styles.icon} />
      )}

      <p className={styles.label}>{theme === "dark" ? "Dark" : "Light"} mode</p>
    </label>
  );
};

export default ThemeToggle;
