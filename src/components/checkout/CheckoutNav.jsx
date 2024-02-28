import { Container, Navbar } from "react-bootstrap";

const CheckoutNav = ({ totalPrice }) => {
  return (
    <Navbar className="bg-body-tertiary border rounded ">
      <Container>
        <Navbar.Brand className="text-dark">Order Amount</Navbar.Brand>
        <h3>${totalPrice}</h3>
      </Container>
    </Navbar>
  );
};

export default CheckoutNav;
