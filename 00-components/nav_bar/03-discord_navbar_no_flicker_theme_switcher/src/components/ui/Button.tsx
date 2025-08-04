import React from "react";

/**
 * Props for the Button component.
 *
 * @public
 */
export interface ButtonProps {
  /**
   * The content of the button. This can be text, an icon, or a combination of both.
   */
  readonly children: React.ReactNode;
  /**
   * The visual style of the button.
   *
   * @default "neutral"
   */
  readonly variant?: "primary" | "neutral" | "success" | "error" | "info";
  /**
   * A variable that defines the button's visual style.
   *
   * @default "filled"
   */
  readonly mode?: "filled" | "outline" | "text";
  /**
   * A prop to handle the `disabled` state.
   *
   * @default false
   */
  readonly disabled?: boolean;
  /**
   * The onClick event handler.
   */
  readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * A title for accessibility and a tooltip.
   */
  readonly title?: string;
  /**
   * Additional Tailwind/CSS classes to be applied to the button.
   */
  readonly className?: string;
}

/**
 * A generic, fully customizable button component.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "neutral",
  mode = "filled",
  disabled = false,
  title,
  className = "",
  onClick,
  ...rest
}) => {
  // Logic to build the button's classes based on props.
  const composedClasses = `button button--${variant} button--${mode} ${className}`;

  return (
    <button
      className={composedClasses}
      onClick={onClick}
      disabled={disabled}
      title={title}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
