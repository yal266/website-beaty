import { Link } from "react-router-dom";
import {
  RiFlowerLine,
  RiMenu2Line,
  RiMoonLine,
  RiShoppingBag4Line,
  RiUserLine,
} from "@remixicon/react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = ({
  isOpen,
  expandedItems,
  toggleMenu,
  toggleSubmenu,
  navItems,
}) => {
  return (
    <nav className="shadow shadow-gray-500 bg-white p-4 relative z-10">
      <div className="container mx-auto md:px-5 flex justify-between items-center">
        <button
          className="lg:hidden text-gray-500 hover:text-gray-700"
          onClick={toggleMenu}
        >
          <RiMenu2Line size={17} />
        </button>

        <a
          href=""
          className="inline-flex place-items-center gap-2 text-md font-medium text-gray-900"
        >
          <RiFlowerLine size={17} />
          <span>YALI-SKIN</span>
        </a>
        {/* Mobile menu */}
        <NavbarMobile
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          expandedItems={expandedItems}
          toggleSubmenu={toggleSubmenu}
          navItems={navItems}
        />

        {/* Desktop menu */}
        <NavbarDesktop navItems={navItems} />

        <div className="flex items-center space-x-4">
          <Link to="/carrito">
            <RiShoppingBag4Line size={15} />
          </Link>
          <Link to="/login">
            <RiUserLine size={15} />
          </Link>
          <button>
            <RiMoonLine size={15} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
