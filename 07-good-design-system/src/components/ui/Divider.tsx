import React from "react";
import clsx from "clsx";
import styles from "./Divider.module.css";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  small?: boolean;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  small = false,
  className = "",
}) => {
  const cls = clsx(
    styles.divider,
    orientation === "vertical" ? styles.vertical : styles.horizontal,
    small ? styles.small : undefined,
    className
  );

  return <div role="separator" className={cls} />;
};

export default Divider;
