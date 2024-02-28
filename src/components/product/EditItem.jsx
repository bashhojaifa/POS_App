import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Modal, Stack } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { CartContext } from "../../providers/CartProvider";

const EditItem = ({ productId, showModal, handleModalClose }) => {
  const { cart, editCart } = useContext(CartContext);
  // FORM DATA STATE
  const [data, setData] = useState({});

  // FIND PRODUCT BY ID
  let product;
  if (productId) {
    product = cart.find((item) => item.id === productId);
  }

  // SET FORM DATA
  useEffect(() => {
    setData({
      id: product?.id,
      name: product?.name ?? "",
      discount: product?.discount ?? 0,
      tax: product?.tax ?? 0,
    });
  }, [product]);

  // PRODUCT ITEM FORM DATA
  const formData = [
    {
      type: "text",
      accessor: "name",
      placeholder: "Item Name",
      required: true,
      value: data?.name,
    },
    {
      type: "number",
      accessor: "discount",
      placeholder: "Discount",
      required: false,
      value: data?.discount,
    },
    {
      type: "number",
      accessor: "tax",
      placeholder: "Tax",
      required: false,
      value: data.tax,
    },
  ];

  // -> HANDLE FORM DATA
  const handleFormData = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // -> HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    editCart(data);
    handleModalClose();
  };

  return (
    <Modal centered show={showModal} onHide={handleModalClose}>
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
        <Modal.Title>Edit Item</Modal.Title>
        <div></div>
      </Stack>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="w-100 px-2 py-5">
          {formData.reduce((acc, field, index) => {
            // -> RENDER FORM FIELDS BASED ON COMMON TYPE
            acc.push(
              <Form.Group key={index} className="mb-3">
                <Form.Control
                  className="border-0 border-bottom rounded-0"
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  name={field.accessor}
                  value={field.value}
                  onChange={handleFormData}
                />
              </Form.Group>
            );
            return acc;
          }, [])}

          {/* SUBMIT BUTTON */}
          <Button
            variant="primary"
            className="bg-primary-fill w-100 py-2 "
            type="submit"
          >
            <span className="text-white">Submit</span>
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditItem;
