"use client";

import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

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

  const tooltipText =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <>
      <Button
        id="theme-toggle-button"
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
      <Tooltip anchorSelect="#theme-toggle-button" place="bottom">
        {tooltipText}
      </Tooltip>
    </>
  );
};

export default ThemeToggle;
