import {
  RiLeafLine,
  RiMagicLine,
  RiMarkupLine,
  RiSunLine,
  RiTestTubeLine,
} from "@remixicon/react";

export const FooterConf = [
  {
    id: 1,
    label: "Productos",
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
    id: 2,
    label: "Acerca de Nosotros",
    submenu: [
      { label: "Quiénes Somos", link: "/about" },
      { label: "Misión y Visión", link: "/about" },
      { label: "Nuestro Equipo", link: "/about" },
      { label: "Ubicación", link: "/about" },
    ],
  },
  {
    id: 3,
    label: "Asistencia",
    submenu: [
      {
        label: "Preguntas Frecuentes",
        link: "/asistencia/preguntas-frecuentes",
      },
      {
        label: "Envíos y Devoluciones",
        link: "/asistencia/envios-devoluciones",
      },
      { label: "Contacto", link: "/asistencia/contacto" },
    ],
  },
  {
    id: 4,
    label: "Legal",
    submenu: [
      { label: "Privacidad", link: "/legal/privacidad" },
      { label: "Términos y Condiciones", link: "/legal/terminos-condiciones" },
    ],
  },
];
