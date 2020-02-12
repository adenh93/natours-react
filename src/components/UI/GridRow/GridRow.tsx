import React, { SFC, ReactElement } from "react";
import styles from "./GridRow.module.scss";
import { GridItemProps } from "../GridItem/GridItem";

export interface GridRowProps {
  children?: ReactElement<GridItemProps> | ReactElement<GridItemProps>[];
}

const GridRow: SFC = ({ children }) => (
  <>
    <div className={styles.row}>{children}</div>
  </>
);

export default GridRow;
