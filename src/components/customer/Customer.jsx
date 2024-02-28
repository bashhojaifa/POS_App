import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { FaPlusCircle, FaUserCircle } from "react-icons/fa";
import AddCustomer from "./AddCustomer";

const Customer = () => {
  // GET CUSTOMER FROM LOCAL STORAGE
  const customer = JSON.parse(localStorage.getItem("customer"));

  // MODAL STATE
  const [show, setShow] = useState(false);

  // HANDLE MODAL CLOSE
  const handleModalClose = () => setShow(false);

  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="p-2 justify-content-between bg-primary rounded text-secondary fw-semibold"
    >
      <Stack direction="horizontal" gap={3}>
        <FaUserCircle style={{ fontSize: "1.2rem" }} />
        <span>{customer?.name ?? "Steve Jobs"} </span>
      </Stack>

      <Button
        variant="transparent"
        onClick={() => setShow(true)}
        className="text-secondary"
      >
        <FaPlusCircle
          onClick={() => setShow(true)}
          style={{ fontSize: "1.3rem" }}
        />
      </Button>

      {/* ADD NEW CUSTOMER MODAL */}
      <AddCustomer show={show} handleModalClose={handleModalClose} />
    </Stack>
  );
};

export default Customer;
