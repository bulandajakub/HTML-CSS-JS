import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import SidebarButton from "@/components/ui/SidebarButton";
import Tooltip from "@/components/ui/Tooltip";
import tooltipStyles from "@/components/ui/Tooltip.module.css";
import Divider from "@/components/ui/Divider";
import clsx from "clsx";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={clsx("sidebar", styles.sidebar)}>
      {/* <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white">
      top[-20px] - tailwind will automaticly create utility classes when the value is in brackets */}
      <div className="button-sidebar">
        <Tooltip
          content="hello 🐧"
          placement="right"
          contentClassName={`${tooltipStyles["tooltip-sidebar"]} sidebar-tooltip`}
        >
          <FaFire size="28" />
        </Tooltip>
      </div>
      <Divider />
      <div className="button-sidebar">
        <Tooltip
          content="more tooltips 🗿"
          placement="right"
          contentClassName={`${tooltipStyles["tooltip-sidebar"]} sidebar-tooltip`}
        >
          <BsPlus size="28" />
        </Tooltip>
      </div>
      <div className="button-sidebar">
        <Tooltip
          content="quick tooltip ⚡"
          placement="right"
          contentClassName={`${tooltipStyles["tooltip-sidebar"]} sidebar-tooltip`}
        >
          <BsFillLightningFill size="28" />
        </Tooltip>
      </div>
      <div className="button-sidebar">
        <Tooltip
          content="no tooltip 💩"
          placement="right"
          contentClassName={`${tooltipStyles["tooltip-sidebar"]} sidebar-tooltip`}
        >
          <FaPoo size="28" />
        </Tooltip>
      </div>
      <Divider />
      <div className="button-sidebar">
        <Tooltip
          content="tooltips settings ⚙"
          placement="right"
          contentClassName={`${tooltipStyles["tooltip-sidebar"]} sidebar-tooltip`}
        >
          <BsGearFill size="28" />
        </Tooltip>
      </div>
    </div>
  );
};

// using shared Divider component from ui/Divider

export default Sidebar;
