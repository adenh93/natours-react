import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  variant: "white";
  className?: string;
}

const Button: FC<ButtonProps> = ({ variant = "white", className }) => (
  <>
    <a href="#" className={`${styles.root} ${styles[variant]} ${className}`}>
      Discover our tours
    </a>
  </>
);

export default Button;
