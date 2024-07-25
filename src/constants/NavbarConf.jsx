import {
  RiContrastDropLine,
  RiContrastLine,
  RiHeartPulseLine,
  RiLeafLine,
  RiMagicLine,
  RiMarkupLine,
  RiOilLine,
  RiSunLine,
  RiTestTubeLine,
} from "@remixicon/react";

export const navItems = [
  { id: 1, label: "Home", link: "/" },
  {
    id: 2,
    label: "Productos",
    link: "/productos",
    submenu: [
      {
        label: "Limpiadores",
        link: "/productos/limpiadores",
        icon: () => <RiMarkupLine />,
      },
      {
        label: "Tónicos",
        link: "/productos/tonicos",
        icon: () => <RiMagicLine />,
      },
      {
        label: "Serums",
        link: "/productos/serums",
        icon: () => <RiTestTubeLine />,
      },
      {
        label: "Cremas Hidratantes",
        link: "/productos/hidratantes",
        icon: () => <RiLeafLine />,
      },
      {
        label: "Protectores Solares",
        link: "/productos/protectores-solares",
        icon: () => <RiSunLine />,
      },
    ],
  },
  {
    id: 3,
    label: "Rutinas",
    link: "/rutinas",
    submenu: [
      {
        label: "Piel Seca",
        link: "/rutinas/piel-seca",
        icon: () => <RiContrastDropLine />,
      },
      {
        label: "Piel Grasa",
        link: "/rutinas/piel-grasa",
        icon: () => <RiOilLine />,
      },
      {
        label: "Piel Mixta",
        link: "/rutinas/piel-mixta",
        icon: () => <RiContrastLine />,
      },
      {
        label: "Piel Sensible",
        link: "/rutinas/piel-sensible",
        icon: () => <RiHeartPulseLine />,
      },
    ],
  },
  { id: 4, label: "About", link: "/about" },
  { id: 5, label: "Contact", link: "/contact" },
];
