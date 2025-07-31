import React from "react";

// Define the shape of button's properties (props)
interface ButtonProps {
  // children will contain anything valid in React (text, icons, other components, etc.)
  children: React.ReactNode;
  // onClick is an optional function, takes no arguments and returns nothing (void)
  onClick?: () => void;
  // className allows to pass additional Tailwind/CSS classes
  className?: string;
  applyDefaultStyles?: boolean;
}

// Functional component, React.FC is a generic type that automatically provides types for children and context
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  applyDefaultStyles = true,
}) => {
  const baseStyles = applyDefaultStyles ? "top-navigation-icon" : "";

  return (
    // Any additional classes passed via `className` prop will be appended
    <button className={`${baseStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
