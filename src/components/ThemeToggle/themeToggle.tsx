"use client";

import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

import Button from "../Button/button";
import MoonIcon from "./moon.svg";
import SunIcon from "./sun.svg";

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
    <Button
      onClickCallback={handleThemeChange}
      variant="inline"
      text={theme === "dark" ? "Dark mode" : "Light mode"}
      icon={
        theme === "dark" ? (
          <MoonIcon style={{ width: "20px", height: "20px" }} />
        ) : (
          <SunIcon style={{ width: "20px", height: "20px" }} />
        )
      }
    />
  );
};

export default ThemeToggle;
