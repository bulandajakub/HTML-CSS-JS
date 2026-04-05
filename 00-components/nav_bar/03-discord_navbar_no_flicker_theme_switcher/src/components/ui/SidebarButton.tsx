import React from "react";
import clsx from "clsx";
import Tooltip from "./Tooltip";
import styles from "./SidebarButton.module.css";

/**
 * Props for the SidebarButton component.
 *
 * @public
 */
export interface SidebarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the sidebar button (usually an icon).
   */
  readonly children: React.ReactNode;
  /**
   * The tooltip text.
   */
  readonly tooltip: string;
}

/**
 * A generic, fully customizable sidebar button component.
 */
const SidebarButton: React.FC<SidebarButtonProps> = ({
  children,
  tooltip,
  className = "",
  disabled = false,
  onClick,
  ...rest
}) => {
  // Compose class names dynamically using clsx
  // 'button-sidebar' for base styles and layout
  // styles["button-sidebar"] for visual tokens defined in module
  const composedClasses = clsx(
    "button-sidebar",
    styles["button-sidebar"],
    className
  );

  return (
    <Tooltip content={tooltip} placement="right" contentClassName={clsx("sidebar-tooltip", styles["sidebar-tooltip"])}>
      <button
        className={composedClasses}
        onClick={onClick}
        disabled={disabled}
        type="button"
        {...rest}
      >
        {children}
      </button>
    </Tooltip>
  );
};

export default SidebarButton;
