import React, { FC } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo-white.png";

const Header: FC = () => (
  <>
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
    </header>
  </>
);

export default Header;
