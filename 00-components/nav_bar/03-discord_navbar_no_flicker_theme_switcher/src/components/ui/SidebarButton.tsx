import React from "react";
import Tooltip from "./Tooltip";
import styles from "./Tooltip.module.css";

interface SidebarButtonProps {
  icon: React.ReactNode;
  text?: string;
  className?: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  text = "tooltip 💡",
  className = "",
}) => {
  return (
    <div className={`button-sidebar ${className}`}>
      <Tooltip
        content={text}
        placement="right"
        className={""}
        contentClassName={`${styles["tooltip-sidebar"]} sidebar-tooltip`}
      >
        {icon}
      </Tooltip>
    </div>
  );
};

export default SidebarButton;
