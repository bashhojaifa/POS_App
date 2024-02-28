import PropTypes from "prop-types";
import { CloseButton, Offcanvas, Stack } from "react-bootstrap";

const Sidebar = ({
  show,
  handleClose,
  children,
  placement = "start",
  title,
  rowBody,
  ...rest
}) => {
  return (
    <Stack className="position-relative">
      {/* offcanvas */}
      <Offcanvas
        {...{ ...rest }}
        placement={placement}
        show={show}
        onHide={handleClose}
      >
        {/* close button */}
        <CloseButton
          variant="white"
          className="position-absolute text-light"
          style={placement === "end" ? { left: "-2rem" } : { right: "-2rem" }}
          onClick={handleClose}
        />

        {/* row body */}
        {rowBody}

        {/* offcanvas header */}
        <Offcanvas.Header className="justify-content-center">
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>

        {/* offcanvas body */}
        <Offcanvas.Body>{children}</Offcanvas.Body>
      </Offcanvas>
    </Stack>
  );
};

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  placement: PropTypes.string,
  title: PropTypes.string,
  rowBody: PropTypes.node,
};

export default Sidebar;
