import React, { FC } from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import Heading from "./Heading";

const Header: FC = () => (
  <>
    <header className={styles.header}>
      <Logo />
      <Heading />
    </header>
  </>
);

export default Header;
