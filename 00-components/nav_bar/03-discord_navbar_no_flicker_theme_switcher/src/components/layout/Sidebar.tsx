import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import SidebarButton from "@/components/ui/SidebarButton";
import clsx from "clsx";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={clsx("sidebar", styles.sidebar)}>
      {/* <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white">
      top[-20px] - tailwind will automaticly create utility classes when the value is in brackets */}
      <SidebarButton icon={<FaFire size="28" />} text="hello 🐧" />
      <Divider />
      <SidebarButton icon={<BsPlus size="28" />} text="more tooltips 🗿" />
      <SidebarButton
        icon={<BsFillLightningFill size="28" />}
        text="quick tooltip ⚡"
      />
      <SidebarButton icon={<FaPoo size="28" />} text="no tooltip 💩" />
      <Divider />
      <SidebarButton
        icon={<BsGearFill size="28" />}
        text="tooltips settings ⚙"
      />
    </div>
  );
};

const Divider: React.FC = () => (
  <hr className={clsx("sidebar-hr", styles["sidebar-hr"])} />
);

export default Sidebar;
