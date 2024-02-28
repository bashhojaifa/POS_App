import { BsCashCoin } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import IconButton from "../utils/IconButton";
import { Stack } from "react-bootstrap";

const CheckoutSidebar = () => {
  // SIDEBAR MENU ITEMS
  const sidebarMenus = [
    {
      label: "Cash",
      className: "w-100 py-2 fw-semibold text-dark",
      variant: "transparent",
      startIcon: <BsCashCoin style={{ fontSize: "1.5rem" }} />,
    },
    {
      label: "Card",
      className: "w-100 py-2 fw-semibold text-dark",
      variant: "transparent",
      startIcon: <AiOutlineCreditCard style={{ fontSize: "1.5rem" }} />,
    },
    {
      label: "On Account",
      className: "w-100 py-2 fw-semibold text-dark",
      variant: "transparent",
      startIcon: <MdOutlinePersonOutline style={{ fontSize: "1.5rem" }} />,
    },
    {
      label: "Cheque",
      className: "w-100 py-2 fw-semibold text-dark",
      variant: "transparent",
      startIcon: <FaRegAddressCard style={{ fontSize: "1.5rem" }} />,
    },
  ];

  return (
    <Stack className="mt-4">
      {sidebarMenus.map(({ label, ...rest }, index) => (
        <IconButton key={index} {...{ ...rest }}>
          {label}
        </IconButton>
      ))}
    </Stack>
  );
};

export default CheckoutSidebar;
