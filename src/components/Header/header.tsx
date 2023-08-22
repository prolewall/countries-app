import { FC } from "react";

import ThemeToggle from "../ThemeToggle/themeToggle";
import styles from "./header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Where in the world?</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
