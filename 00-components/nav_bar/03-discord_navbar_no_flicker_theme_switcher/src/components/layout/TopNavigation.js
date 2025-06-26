import {
  FaBell,
  FaHashtag,
  FaSearch,
  FaThumbtack,
  FaUserFriends,
} from "react-icons/fa";

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
    <TopIcon icon={<FaHashtag />} />
    <h3 className="top-navigation-title">general</h3>
  </div>
);
const TopIcon = ({ icon }) => <div className="top-navigation-icon">{icon}</div>;
const SearchInput = () => (
  <div className="search">
    <input type="text" placeholder="Search" className="top-navigation-search" />
    <FaSearch />
  </div>
);
const NavigationActions = () => (
  <div className="top-navigation-actions">
    <TopIcon icon={<FaBell />} />
    <TopIcon icon={<FaThumbtack />} />
    <TopIcon icon={<FaUserFriends />} />
    <SearchInput />
  </div>
);

export default TopNavigation;
