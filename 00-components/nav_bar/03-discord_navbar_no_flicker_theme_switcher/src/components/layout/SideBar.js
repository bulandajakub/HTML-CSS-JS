import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      {/* <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white">
      top[-20px] - tailwind will automaticly create utility classes when the value is in brackets */}
      <SideBarIcon icon={<FaFire size="28" />} text="hello 🐧" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="28" />} text="more tooltips 🗿" />
      <SideBarIcon
        icon={<BsFillLightningFill size="28" />}
        text="quick tooltip ⚡"
      />
      <SideBarIcon icon={<FaPoo size="28" />} text="no tooltip 💩" />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="28" />} text="tooltips settings ⚙" />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
