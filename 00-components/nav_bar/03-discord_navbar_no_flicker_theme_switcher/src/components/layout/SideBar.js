import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      {/* <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white">
      top[-20px] - tailwind will automaticly create utility classes when the value is in brackets */}
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="28" />} />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
      <SideBarIcon icon={<BsGearFill size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

export default SideBar;
