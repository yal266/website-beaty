import React from "react";
import { Link } from "react-router-dom";

const NavbarDesktop = ({ navItems }) => {
  return (
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
  );
};

export default NavbarDesktop;
