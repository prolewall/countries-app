import { FC } from "react";

import styles from "./button.module.css";

type ButtonVariant = "standard" | "inline";

interface ButtonProps {
  onClickCallback?: () => void;
  icon?: React.ReactNode;
  text?: string;
  className?: string;
  variant?: ButtonVariant;
  type?: "submit" | "reset" | "button" | undefined;
  id?: string;
}

function determineButtonClass(variant?: ButtonVariant): string {
  switch (variant) {
    case "standard":
      return styles.buttonStandard;
    case "inline":
      return styles.buttonInline;
    default:
      return styles.buttonStandard;
  }
}

const Button: FC<ButtonProps> = ({
  onClickCallback,
  icon,
  text,
  variant,
  type,
  id,
}) => {
  const buttonClass = determineButtonClass(variant);

  return (
    <button
      id={id}
      className={buttonClass}
      onClick={onClickCallback}
      type={type ?? "submit"}
    >
      <div className={styles.content}>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        {text ? <span className={styles.text}>{text}</span> : null}
      </div>
    </button>
  );
};

export default Button;
