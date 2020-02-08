import React, { FC } from "react";
import styles from "./Heading.module.css";
import Button from "../../UI/Button";

const Heading: FC = () => (
  <>
    <div className={styles.container}>
      <h1 className={styles.primaryHeading}>
        <span className={styles.heading}>Outdoors</span>
        <span className={styles.subHeading}>Is where life happens</span>
      </h1>
      <Button label="Discover our tours" variant="white" />
    </div>
  </>
);

export default Heading;
