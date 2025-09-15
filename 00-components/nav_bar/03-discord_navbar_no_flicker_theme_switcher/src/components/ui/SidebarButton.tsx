import React from "react";

// Define the shape of sidebar button's properties (props)
interface SidebarButtonProps {
  // The icon to display, which can be any React node
  icon: React.ReactNode;
  // The tooltip text, which is an optional string with a default value
  text: string;
  // Any additional classes passed for customization
  className?: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  text = "tooltip 💡", // This provides a default value for the tooltip text
  className = "",
}) => {
  return (
    // Directly use the existing classes and the `group` utility class to manage the hover state
    <div className={`button-sidebar group ${className}`}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SidebarButton;
