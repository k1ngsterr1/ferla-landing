import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  margin?: string;
  icon?: any;
  animation?: string;
  text: string;
  buttonType: "filled" | "outline" | "underline" | "transparent";
}

const Button: React.FC<ButtonProps> = ({
  margin,
  text,
  animation,
  icon,
  buttonType,
  ...rest
}) => {
  const buttonClass = `${styles.button} hoverable ${
    styles["button--" + buttonType]
  } ${margin || ""} ${animation}`;

  return (
    <button className={buttonClass} {...rest}>
      {text}
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
          data-testid="icon"
        />
      )}
    </button>
  );
};

export default Button;
