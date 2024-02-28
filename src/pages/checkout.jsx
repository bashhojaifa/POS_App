import { Card, Row, Col } from "react-bootstrap";
import CheckoutNav from "../components/checkout/CheckoutNav";
import CheckoutSidebar from "../components/checkout/CheckoutSidebar";
import CheckoutForm from "../components/checkout/CheckoutForm";
import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

const Checkout = () => {
  const { amount } = useContext(CartContext);

  return (
    <Card className="bg-light">
      <Card.Body>
        <CheckoutNav totalPrice={amount} />
        <Card className="bg-white mt-3">
          <Row>
            <Col className="border-end" sm={6} md={4}>
              <CheckoutSidebar />
            </Col>
            <Col sm={6} md={8}>
              <CheckoutForm totalPrice={amount} />
            </Col>
          </Row>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default Checkout;
