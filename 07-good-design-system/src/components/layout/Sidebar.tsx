import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import SidebarButton from "@/components/ui/SidebarButton";

import Divider from "@/components/ui/Divider";
import clsx from "clsx";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={clsx("sidebar", styles.sidebar)}>
      {/* <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white">
      top[-20px] - tailwind will automaticly create utility classes when the value is in brackets */}
      <SidebarButton tooltip="hello 🐧">
        <FaFire size="28" />
      </SidebarButton>
      <Divider />
      <SidebarButton tooltip="more tooltips 🗿">
        <BsPlus size="28" />
      </SidebarButton>
      <SidebarButton tooltip="quick tooltip ⚡">
        <BsFillLightningFill size="28" />
      </SidebarButton>
      <SidebarButton tooltip="no tooltip 💩">
        <FaPoo size="28" />
      </SidebarButton>
      <Divider />
      <SidebarButton tooltip="tooltips settings ⚙">
        <BsGearFill size="28" />
      </SidebarButton>
    </div>
  );
};

// using shared Divider component from ui/Divider

export default Sidebar;
