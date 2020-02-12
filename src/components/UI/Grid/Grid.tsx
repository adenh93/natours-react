import React, { SFC, ReactElement } from "react";
import styles from "./Grid.module.scss";
import { GridRowProps } from "../GridRow/GridRow";

interface GridProps {
  children?: ReactElement<GridRowProps> | ReactElement<GridRowProps>[];
}

const Grid: SFC<GridProps> = ({ children }) => (
  <>
    <section className={styles.grid}>{children}</section>
  </>
);

export default Grid;
