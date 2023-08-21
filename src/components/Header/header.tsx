import { FC } from "react";

import styles from "./header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Where in the world?</h1>
    </header>
  );
};

export default Header;
