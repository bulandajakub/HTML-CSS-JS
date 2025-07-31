import {
  FaBell,
  FaHashtag,
  FaSearch,
  FaThumbtack,
  FaUserFriends,
} from "react-icons/fa";
import ThemeSwitch from "@/components/theme/ThemeSwitch";
import Button from "@/components/ui/Button";

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
    <Button className="title-icon" applyDefaultStyles={false}>
      <FaHashtag />
    </Button>
    <h3 className="top-navigation-title channel-name-text">general</h3>
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
    <Button>
      <FaBell />
    </Button>
    <Button>
      <FaThumbtack />
    </Button>
    <Button>
      <FaUserFriends />
    </Button>
    <SearchInput />
  </div>
);

export default TopNavigation;
