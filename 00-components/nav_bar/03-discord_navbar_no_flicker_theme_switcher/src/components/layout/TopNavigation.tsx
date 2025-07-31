import {
  FaBell,
  FaHashtag,
  FaSearch,
  FaThumbtack,
  FaUserFriends,
} from "react-icons/fa";
import ThemeSwitch from "@/components/theme/ThemeSwitch";
import Button from "@/components/ui/Button";

const TopNavigation: React.FC = () => {
  return (
    <header className="top-navigation">
      <Title />
      <NavigationActions />
    </header>
  );
};

const Title: React.FC = () => (
  <div className="title">
    <Button className="title-icon" applyDefaultStyles={false}>
      <FaHashtag />
    </Button>
    <h3 className="top-navigation-title channel-name-text">general</h3>
  </div>
);

const SearchInput: React.FC = () => (
  <div className="search">
    <input type="text" placeholder="Search" className="top-navigation-search" />
    <FaSearch />
  </div>
);

const NavigationActions: React.FC = () => (
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
