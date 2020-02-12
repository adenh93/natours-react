import React, { SFC } from "react";
import classNames from "classnames";
import { GridClasses } from "./types";
import styles from "./GridItem.module.scss";

export interface GridItemProps {
  className: GridClasses;
}

const GridItem: SFC<GridItemProps> = ({ className, children }) => {
  const classes = classNames(styles.col, styles[className]);
  return (
    <>
      <div className={classes}>{children}</div>
    </>
  );
};

export default GridItem;
