import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  variant: "white";
}

const Button: FC<ButtonProps> = ({ variant = "white" }) => (
  <>
    <a href="#" className={`${styles.root} ${styles[variant]}`}>
      Discover our tours
    </a>
  </>
);

export default Button;
