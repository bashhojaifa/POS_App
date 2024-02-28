import React, { useState } from "react";
import { Button, Form, Modal, Stack } from "react-bootstrap";
import IconButton from "../utils/IconButton";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import formData from "./AddCustomerFormData";

const AddCustomer = ({ show, handleModalClose }) => {
  // FORM DATA STATE
  const [data, setData] = useState({});

  // HANDLE FORM DATA
  const handleFormData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // SAVE CUSTOMER TO LOCAL STORAGE
    localStorage.setItem("customer", JSON.stringify(data));

    // CLOSE MODAL
    handleModalClose();
  };

  return (
    <Modal centered show={show} onHide={handleModalClose}>
      <Stack
        direction="horizontal"
        gap={2}
        className="justify-content-between px-3 py-2"
      >
        <Button
          variant="transparent"
          className="p-0"
          onClick={handleModalClose}
        >
          <FaAngleLeft style={{ fontSize: "1.5rem", fontWeight: "100" }} />
        </Button>
        <Modal.Title>Add New Customer</Modal.Title>
        <div></div>
      </Stack>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="w-100 px-2 py-5">
          {formData.reduce((acc, field, index) => {
            // -> RENDER FORM FIELDS BASED ON TYPE
            if (field.type === "select") {
              acc.push(
                <Form.Group key={index} className="mb-3 ">
                  <Form.Select
                    required={field.required}
                    className="border-0 border-bottom rounded-0"
                    name={field.accessor}
                    onChange={handleFormData}
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              );
            }

            // -> RENDER FORM FIELDS BASED ON COMMON TYPE
            if (field.type !== "select") {
              acc.push(
                <Form.Group key={index} className="mb-3">
                  <Form.Control
                    className="border-0 border-bottom rounded-0"
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    name={field.accessor}
                    onChange={handleFormData}
                  />
                </Form.Group>
              );
            }
            return acc;
          }, [])}

          <IconButton variant="transparent align-items-center text-secondary mb-1">
            <FaPlus />
            Add More Details
          </IconButton>
          {/* SUBMIT BUTTON */}
          <Button
            variant="primary"
            className="bg-primary-fill w-100 py-2 "
            type="submit"
          >
            <span className="text-white">Update</span>
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddCustomer;
