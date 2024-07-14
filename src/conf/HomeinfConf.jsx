import {
  RiCaravanLine,
  RiCustomerService2Line,
  RiSecurePaymentLine,
} from "@remixicon/react";

export const HomeinfConf = [
  {
    id: 1,
    label: "Free Shipping",
    icon: () => <RiCaravanLine />,
    description: "Free shipping on all orders",
  },
  {
    id: 1,
    label: "Secure Payment",
    icon: () => <RiSecurePaymentLine />,
    description: "100% Secure Payment",
  },
  {
    id: 1,
    label: "24/7 Support",
    icon: () => <RiCustomerService2Line />,
    description: "Call us anytime",
  },
];
