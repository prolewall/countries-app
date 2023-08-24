import { FC } from "react";

import styles from "./button.module.css";

interface ButtonProps {
  onClickCallback: () => void;
  icon?: React.ReactNode;
  text?: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClickCallback, icon, text }) => {
  return (
    <button className={styles.button} onClick={onClickCallback}>
      <div className={styles.content}>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        {text ? <span className={styles.text}>{text}</span> : null}
      </div>
    </button>
  );
};

export default Button;
