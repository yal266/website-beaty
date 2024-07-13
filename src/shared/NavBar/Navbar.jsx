import { Link } from "react-router-dom";
import { navItems } from "../../conf/NavbarConf";
import {
  RiBook3Line,
  RiMenuLine,
  RiMoonLine,
  RiSearchLine,
  RiUserLine,
} from "@remixicon/react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md bg-white p-4">
      <div className="container mx-auto md:px-5 flex justify-between">
        <a
          href=""
          className="inline-flex place-items-center gap-2 text-md font-medium text-gray-900"
        >
          <RiBook3Line size={17} />
          <span>UNS</span>
        </a>

        <div className="hidden lg:flex">
          <ul className="flex mx-auto">
            {navItems.map((item) => (
              <li key={item.id} className="mr-10 relative group">
                <Link
                  to={item.link}
                  className="text-xs text-gray-700 uppercase hover:text-black"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md py-2">
                    {item.submenu.map((subItem, index) => (
                      <li key={index}>
                        <Link
                          to={subItem.link}
                          className="flex items-center gap-1 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.icon && (
                            <div className="w-4 h-4 mr-2 flex items-center justify-center">
                              <subItem.icon className="w-full h-full" />
                            </div>
                          )}
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/search">
            <RiSearchLine size={15} />
          </Link>
          <Link to="/login">
            <RiUserLine size={15} />
          </Link>
          <button>
            <RiMoonLine size={15} />
          </button>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="lg:hidden"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <RiMenuLine size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
