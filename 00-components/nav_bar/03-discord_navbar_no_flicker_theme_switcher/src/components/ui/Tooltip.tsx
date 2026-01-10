import React from "react";
import clsx from "clsx";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  /** The element that the tooltip is attached to */
  readonly children: React.ReactNode;
  /** The tooltip content (text or element) */
  readonly content: React.ReactNode;
  /** Tooltip placement around the target */
  readonly placement?: "top" | "right" | "bottom" | "left";
  /** Additional CSS classes */
  readonly className?: string;
  /** Optional accessibility label fallback when content is not plain text */
  readonly ariaLabel?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = "top",
  className = "",
  ariaLabel,
}) => {
  const composed = clsx(
    styles.tooltip,
    styles[`tooltip-${placement}`],
    className
  );

  const aria = typeof content === "string" ? content : ariaLabel;

  return (
    <span className={composed} aria-label={aria} tabIndex={0}>
      {children}
      <span className={styles["tooltip-content"]}>{content}</span>
    </span>
  );
};

export default Tooltip;
