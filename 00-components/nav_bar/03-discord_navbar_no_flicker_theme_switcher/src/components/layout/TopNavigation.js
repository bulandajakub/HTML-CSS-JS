import {
  FaBell,
  FaHashtag,
  FaSearch,
  FaThumbtack,
  FaUserFriends,
} from "react-icons/fa";
import ThemeSwitch from "@/components/theme/ThemeSwitch";

const TopNavigation = () => {
  return (
    <header className="top-navigation">
      <Title />
      <NavigationActions />
    </header>
  );
};

const Title = () => (
  <div className="title">
    <TopIcon
      icon={<FaHashtag />}
      className="title-icon"
      applyDefaultStyles={false}
    />
    <h3 className="top-navigation-title channel-name-text">general</h3>
  </div>
);
const TopIcon = ({ icon, className = "", applyDefaultStyles = true }) => (
  <div
    className={`${
      applyDefaultStyles ? "top-navigation-icon" : ""
    } ${className}`}
  >
    {icon}
  </div>
);
const SearchInput = () => (
  <div className="search">
    <input type="text" placeholder="Search" className="top-navigation-search" />
    <FaSearch />
  </div>
);
const NavigationActions = () => (
  <div className="top-navigation-actions">
    <ThemeSwitch />
    <TopIcon icon={<FaBell />} />
    <TopIcon icon={<FaThumbtack />} />
    <TopIcon icon={<FaUserFriends />} />
    <SearchInput />
  </div>
);

export default TopNavigation;
