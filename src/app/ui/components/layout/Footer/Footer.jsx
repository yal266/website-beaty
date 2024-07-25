import React from "react";
import { FooterConf } from "@constants/FooterConf";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {FooterConf.map(({ id, label, submenu }) => (
          <div key={id}>
            <h4 className="font-bold mb-4">{label}</h4>
            <ul className="space-y-2">
              {submenu.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.icon && <item.icon className="mr-2" />}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
