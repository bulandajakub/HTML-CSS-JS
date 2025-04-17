import "./index.css";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

import React, { useState, useRef, useLayoutEffect } from "react";
import { CSSTransition } from "react-transition-group";

/**
 * Main application component rendering the navbar and dropdown.
 * This component serves as the entry point for the navigation bar
 * and the dropdown menu system, using the `Navbar` and `NavItem` components.
 * It manages the icons displayed in the navbar and incorporates a dropdown
 * that toggles when an icon is clicked.
 */
function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

/**
 * Renders a navigation bar that wraps navigation items.
 * The navbar serves as a container for multiple navigation items (e.g., icons).
 * It accepts children as a prop, allowing for flexibility in the items rendered within.
 */
function Navbar({ children }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
}

/**
 * Represents a single item in the navigation bar.
 * Clicking the icon toggles its dropdown content.
 *
 * @param {Object} props - Component props.
 * @param {JSX.Element} props.icon - The icon displayed for this nav item.
 * @param {JSX.Element} props.children - The content (dropdown) that is conditionally displayed when the nav item is clicked.
 */
function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
}

/**
 * Renders the dropdown menu with animated transitions between submenus.
 * Automatically adjusts its height depending on the content of the active submenu.
 * Uses `useLayoutEffect` to calculate the height of the visible submenu and
 * dynamically adjust the dropdown height.
 */
function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main"); // Tracks the currently visible submenu
  const [menuHeight, setMenuHeight] = useState(null); // Dynamic height for the dropdown container

  // Refs for each submenu used for height calculation
  const dropdownRef = useRef(null);
  const mainRef = useRef(null);
  const settingsRef = useRef(null);
  const animalsRef = useRef(null);

  /**
   * Returns the corresponding submenu reference based on the menu name.
   *
   * @param {string} menu - The name of the active menu (e.g., 'main', 'settings', 'animals').
   * @returns {React.RefObject} - The reference to the submenu for height calculation.
   */
  const getMenuRef = (menu) => {
    switch (menu) {
      case "main":
        return mainRef;
      case "settings":
        return settingsRef;
      case "animals":
        return animalsRef;
      default:
        return null;
    }
  };

  /**
   * Calculates and sets the dropdown's height based on the currently active menu.
   * This hook runs after DOM mutations (like when a menu is shown) but before
   * the browser repaints, ensuring that the dropdown height is set precisely.
   *
   * `useLayoutEffect` is used here to avoid flickering and ensure the layout is updated
   * before the next paint.
   */
  useLayoutEffect(() => {
    const ref = getMenuRef(activeMenu); // Get the ref for the active menu
    if (ref.current) {
      const height = ref.current.offsetHeight; // Measure the height of the active menu
      setMenuHeight(height); // Set the height for the dropdown container
    }
  }, [activeMenu]);

  /**
   * Represents a clickable item in the dropdown menu.
   * Changes the visible submenu when clicked (if `goToMenu` is specified).
   *
   * @param {Object} props - Component props.
   * @param {JSX.Element} props.children - The content of the dropdown item.
   * @param {JSX.Element} [props.leftIcon] - An optional icon to display on the left side.
   * @param {JSX.Element} [props.rightIcon] - An optional icon to display on the right side.
   * @param {string} [props.goToMenu] - The name of the submenu to navigate to when clicked.
   */
  function DropdownItem({ children, leftIcon, rightIcon, goToMenu }) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      {/* Main Menu */}
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        nodeRef={mainRef}
        onEnter={() => setMenuHeight(mainRef.current?.offsetHeight)} // Set height of the menu on transition enter
      >
        <div className="menu" ref={mainRef}>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦗"
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Settings Menu */}
      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={settingsRef}
        onEnter={() => setMenuHeight(settingsRef.current?.offsetHeight)} // Set height for the settings menu
      >
        <div className="menu" ref={settingsRef}>
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      {/* Animals Menu */}
      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={animalsRef}
        onEnter={() => setMenuHeight(animalsRef.current?.offsetHeight)} // Set height for the animals menu
      >
        <div className="menu" ref={animalsRef}>
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Butterfly</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
