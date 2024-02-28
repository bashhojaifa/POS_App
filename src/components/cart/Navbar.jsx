import { Stack } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { PiNotePencil, PiPlusCircleFill, PiVan } from "react-icons/pi";
import IconButton from "../utils/IconButton";
import Sidebar from "../utils/Sidebar";
import { useState } from "react";
import leftSideBarLogo from "../../assets/left-sidebar-logo.png";

const Navbar = () => {
  // LEFT SIDEBAR STATES
  const [showLeft, setShowLeft] = useState(false);
  const handleCloseLeft = () => setShowLeft(false);

  // RIGHT SIDEBAR STATES
  const [showRight, setShowRight] = useState(false);
  const handleCloseRight = () => setShowRight(false);

  // NAVIGATION BUTTONS DATA
  const navButtons = [
    {
      variant: "transparent",
      className: "py-1",
      startIcon: <FiMenu style={{ fontSize: "1.5rem" }} />,
      onClick: () => setShowLeft(true),
    },
    {
      label: "Note",
      variant: "secondary",
      className: "px-2 d-none d-md-block",
      startIcon: <PiNotePencil style={{ fontSize: "1.2rem" }} />,
    },
    {
      label: "Shipping",
      variant: "secondary",
      className: "px-2 d-none d-md-block",
      startIcon: <PiVan style={{ fontSize: "1.2rem" }} />,
    },
    {
      label: "Hold Orders",
      variant: "secondary",
      className: "px-2 d-none d-md-block",
      startIcon: <PiNotePencil style={{ fontSize: "1.3rem" }} />,
    },
    {
      label: "New Item",
      variant: "secondary",
      className: "px-2 d-none d-md-block",
      startIcon: <PiPlusCircleFill style={{ fontSize: "1.5rem" }} />,
    },
    {
      variant: "transparent",
      className: "px-2 d-block d-md-none",
      startIcon: <FiMenu style={{ fontSize: "1.5rem" }} />,
      onClick: () => setShowRight(true),
    },
  ];

  const navButtonsSidebar = [
    {
      label: "Note",
      variant: "secondary",
      className: "px-2 ",
      startIcon: <PiNotePencil style={{ fontSize: "1.2rem" }} />,
    },
    {
      label: "Shipping",
      variant: "secondary",
      className: "px-2 ",
      startIcon: <PiVan style={{ fontSize: "1.2rem" }} />,
    },
    {
      label: "Hold Orders",
      variant: "secondary",
      className: "px-2 ",
      startIcon: <PiNotePencil style={{ fontSize: "1.3rem" }} />,
    },
    {
      label: "New Item",
      variant: "secondary",
      className: "px-2 ",
      startIcon: <PiPlusCircleFill style={{ fontSize: "1.5rem" }} />,
    },
  ];

  // SIDEBAR MENUS
  const sidebarMenus = [
    {
      label: "Dashboard",
      path: "/dashboard",
      className: "w-100 py-2 fw-semibold text-dark",
      variant: "transparent",
      startIcon: <MdOutlineDashboard style={{ fontSize: "1.5rem" }} />,
    },
    {
      label: "Locations",
      path: "/",
      className: "w-100 py-2 fw-semibold text-dark",
      variant: "transparent",
      startIcon: <IoLocationOutline style={{ fontSize: "1.5rem" }} />,
    },
    {
      label: "POS Invoice",
      path: "/invoice",
      className: "w-100 py-2 fw-semibold text-dark",
      variant: "transparent",
      startIcon: <LiaFileInvoiceDollarSolid style={{ fontSize: "1.5rem" }} />,
    },
    {
      label: "Settings",
      path: "/settings",
      className: "w-100 py-2 fw-semibold text-dark",
      variant: "transparent",
      startIcon: <IoSettingsOutline style={{ fontSize: "1.5rem" }} />,
    },
  ];

  return (
    <>
      <Stack
        direction="horizontal"
        gap={1}
        className="py-2 flex-wrap justify-content-between align-items-end"
      >
        {/* NAVIGATION BUTTONS */}
        {navButtons.map(({ label, ...rest }, index) => (
          <IconButton key={index} {...{ ...rest }}>
            {label}
          </IconButton>
        ))}
      </Stack>

      {/* LEFT SIDEBAR */}
      <Sidebar
        className="w-25"
        placement="start"
        show={showLeft}
        handleClose={handleCloseLeft}
        rowBody={
          <Stack direction="vertical">
            <div style={{ background: "#EFEFEF", padding: "1rem" }}>
              <div className="text-center">
                <img
                  src={leftSideBarLogo}
                  alt="left-sidebar-logo"
                  className="img-fluid w-50 mx-auto pb-3"
                />
              </div>
              <div>
                <small className="text-dark">Location:</small>
                <p className="fw-semibold font-semibold text-dark">
                  Los Angeles, California
                </p>
              </div>
            </div>

            {sidebarMenus.map(({ label, ...rest }, index) => (
              <IconButton key={index} {...{ ...rest }}>
                {label}
              </IconButton>
            ))}
          </Stack>
        }
      />

      {/* RIGHT SIDEBAR */}
      <Sidebar
        className="w-25 p-2"
        placement="end"
        show={showRight}
        handleClose={handleCloseRight}
        rowBody={
          <Stack direction="vertical" gap={1} className="pt-5">
            {navButtonsSidebar.map(({ label, ...rest }, index) => (
              <IconButton key={index} {...{ ...rest }}>
                {label}
              </IconButton>
            ))}
          </Stack>
        }
      />
    </>
  );
};

export default Navbar;
