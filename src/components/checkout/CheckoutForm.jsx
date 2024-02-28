import { Col, Form, Row, Stack } from "react-bootstrap";
import IconButton from "../utils/IconButton";
import { FaTimesCircle } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { CartContext } from "../../providers/CartProvider";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import formData from "./accountForm";

const CheckoutForm = ({ totalPrice }) => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  // FORM DATA STATE
  const [data, setData] = useState({});

  // HANDLE FORM DATA
  const handleFormData = (e) => {
    setData({ ...data, [e.target.placeholder]: e.target.value });
  };

  // HANDLE PAYMENT
  const handleSubmit = () => {
    const confirm = window.confirm("Are you sure to complete payment?");
    if (confirm) {
      alert("Payment Completed");
      clearCart();
      navigate("/");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-100 px-2 py-5 position-relative"
      style={{ minHeight: "100vh" }}
    >
      <div>
        {formData.reduce((acc, field, index) => {
          // -> RENDER FORM FIELDS BASED ON COMMON TYPE
          acc.push(
            <Form.Group key={index} className="mb-3">
              <Form.Control
                className="border-0 border-bottom rounded-0"
                type={field.type}
                nae={field.accessor}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleFormData}
              />
            </Form.Group>
          );
          return acc;
        }, [])}
      </div>

      {/* SUBMIT BUTTON */}

      <Row gap={2} className="justify-content-center g-2">
        <Col xs={12} lg={5}>
          <IconButton
            variant="error"
            startIcon={<FaTimesCircle />}
            className="fs-5 py-2 w-100 justify-content-center justify-content-lg-start"
            path="/"
          >
            Cancel
          </IconButton>
        </Col>
        <Col xs={12} lg={7}>
          <IconButton
            variant="primary"
            startIcon={<MdOutlinePayments />}
            disabled={totalPrice <= 0}
            type="submit"
            className="bg-primary-fill fs-5 py-2 w-100"
          >
            Complete Payment
          </IconButton>
        </Col>
      </Row>
    </Form>
  );
};

export default CheckoutForm;
