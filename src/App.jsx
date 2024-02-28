import { Col, Container, Row } from "react-bootstrap";

// CSS IMPORT
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Outlet } from "react-router-dom";
import Cart from "./pages/cart";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={5}>
          <Cart />
        </Col>
        <Col xs={12} md={7}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
