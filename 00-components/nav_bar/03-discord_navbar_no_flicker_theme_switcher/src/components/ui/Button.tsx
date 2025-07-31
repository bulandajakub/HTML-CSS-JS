import React from "react";

// Define the shape of button's properties (props)
interface ButtonProps {
  // children will contain anything valid in React (text, icons, other components, etc.)
  children: React.ReactNode;
  // onClick is an optional function, takes no arguments and returns nothing (void)
  onClick?: () => void;
  // className allows to pass additional Tailwind/CSS classes
  className?: string;
}

// Functional component, React.FC is a generic type that automatically provides types for children and context
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    // Any additional classes passed via `className` prop will be appended
    <button className={`top-navigation-icon ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
