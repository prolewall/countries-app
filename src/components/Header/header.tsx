import Link from "next/link";
import { FC } from "react";

import ThemeToggle from "../ThemeToggle/themeToggle";
import styles from "./header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href={"/"} className={styles.link}>
          Where in the world?
        </Link>
      </h1>

      <ThemeToggle />
    </header>
  );
};

export default Header;
