import { useState } from "react";
import Navbar from "../components/layout/NavBar/Navbar";
import { navItems } from "../../../constants/NavbarConf";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (itemId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <Navbar
      isOpen={isOpen}
      expandedItems={expandedItems}
      toggleMenu={toggleMenu}
      toggleSubmenu={toggleSubmenu}
      navItems={navItems}
    />
  );
};

export default NavbarMain;
