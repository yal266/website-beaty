import React from "react";
import { Link } from "react-router-dom";
import {
  RiFlowerLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "@remixicon/react";

const NavbarMobile = ({
  isOpen,
  toggleMenu,
  expandedItems,
  toggleSubmenu,
  navItems,
}) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 w-64 h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
    >
      <div className="p-4 border-b flex justify-between items-center text-black">
        <RiFlowerLine size={17} />
        <span>YALI-SKIN</span>
        <button onClick={toggleMenu} className="text-2xl">
          &times;
        </button>
      </div>
      <ul className="flex flex-col">
        {navItems.map((item) => (
          <li key={item.id} className="border-b">
            <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <Link
                to={item.link}
                onClick={
                  item.submenu ? () => toggleSubmenu(item.id) : toggleMenu
                }
              >
                {item.label}
              </Link>
              {item.submenu && (
                <button onClick={() => toggleSubmenu(item.id)}>
                  {expandedItems[item.id] ? (
                    <RiArrowUpSLine size={15} />
                  ) : (
                    <RiArrowDownSLine size={15} />
                  )}
                </button>
              )}
            </div>
            {item.submenu && expandedItems[item.id] && (
              <ul className="bg-gray-50 py-2">
                {item.submenu.map((subItem, index) => (
                  <li key={index}>
                    <Link
                      to={subItem.link}
                      className="flex items-center gap-1 px-8 py-2 text-xs text-gray-700 hover:bg-gray-100"
                      onClick={toggleMenu}
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

export default NavbarMobile;
