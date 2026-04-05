import React from "react";
import clsx from "clsx";
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
  // 'group' to handle tooltip hover state
  // styles["button-sidebar"] for visual tokens defined in module
  const composedClasses = clsx(
    "button-sidebar",
    "group",
    styles["button-sidebar"],
    className
  );

  return (
    <button
      className={composedClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
      {...rest}
    >
      {children}
      <span className={clsx("sidebar-tooltip", "group-hover:scale-100", styles["sidebar-tooltip"])}>
        {tooltip}
      </span>
    </button>
  );
};

export default SidebarButton;
