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
  /** Additional class(es) applied to the tooltip content element */
  readonly contentClassName?: string;
  /** Optional accessibility label fallback when content is not plain text */
  readonly ariaLabel?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = "top",
  className = "",
  contentClassName = "",
  ariaLabel,
}) => {
  const composed = clsx(
    // include both module-scoped and global class names so global styles from
    // _components.css can apply while keeping CSS-module tokens local
    styles.tooltip,
    `tooltip`,
    styles[`tooltip-${placement}`],
    `tooltip-${placement}`,
    className
  );

  const aria = typeof content === "string" ? content : ariaLabel;

  return (
    <span className={composed} aria-label={aria} tabIndex={0}>
      {children}
      <span
        className={clsx(
          styles["tooltip-content"],
          "tooltip-content",
          contentClassName
        )}
      >
        {content}
      </span>
    </span>
  );
};

export default Tooltip;
