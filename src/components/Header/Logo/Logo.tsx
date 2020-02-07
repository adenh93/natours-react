import React, { FC } from "react";
import styles from "./Logo.module.css";
import logo from "../../../assets/img/logo-white.png";

const Logo: FC = () => (
  <>
    <div className={styles.logoBox}>
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  </>
);

export default Logo;
