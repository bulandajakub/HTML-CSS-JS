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
  /**
   * The visual style of the button.
   *
   * @default "primary"
   */
  readonly variant?: "primary" | "neutral" | "success" | "error" | "info";
  /**
   * A variable that defines the button's visual style.
   *
   * @default "filled"
   */
  readonly mode?: "filled" | "outline" | "ghost";
}

/**
 * A generic, fully customizable sidebar button component.
 */
const SidebarButton: React.FC<SidebarButtonProps> = ({
  children,
  tooltip,
  variant = "primary",
  mode = "filled",
  className = "",
  disabled = false,
  onClick,
  ...rest
}) => {
  // Compose class names dynamically using clsx
  // 'button-sidebar' for base styles and layout
  // styles[`button-sidebar-${variant}-${mode}`] for dynamic visual tokens
  const composedClasses = clsx(
    "button-sidebar",
    styles[`button-sidebar-${variant}-${mode}`],
    className
  );

  return (
    <Tooltip 
      content={tooltip} 
      placement="right" 
      className="flex w-full justify-center my-2 mx-auto" 
    >
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
