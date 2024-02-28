import { Col, Row, Stack, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import IconButton from "../utils/IconButton";
import { FaHandPaper, FaTimesCircle } from "react-icons/fa";
import { PiContactlessPayment, PiCurrencyCircleDollar } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";

const CartFooter = ({ cartData }) => {
  const { clearCart, amount, setAmount } = useContext(CartContext);

  // TOTAL PRODUCT CALCULATION
  const totalProductCount = () => {
    return cartData.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  };

  // PRICE CALCULATION
  const priceCalculation = () => {
    return cartData.reduce((acc, curr) => {
      return acc + curr.totalPrice;
    }, 0);
  };

  // TAX & DISCOUNT CALCULATION
  let taxSum = 0;
  let discount = 0;
  cartData.forEach((value) => {
    taxSum += Number(value.tax);
    discount += Number(value?.discount ?? 0);
  });

  // SHIPPING COST
  const shippingCost = totalProductCount() > 0 ? 10 : 0;

  // TOTAL TAX CALCULATION
  const totalTax = (priceCalculation() * taxSum) / 100;

  // TOTAL PRICE CALCULATION
  setAmount(priceCalculation() + totalTax + shippingCost - discount);

  // FOOTER BUTTONS DATA
  const footerButtons = [
    {
      label: "Cancel",
      className: "w-100",
      variant: "error",
      startIcon: <FaTimesCircle style={{ fontSize: "1.5rem" }} />,
      onClick: clearCart,
    },
    {
      label: "Hold",
      className: "w-100",
      variant: "secondary",
      startIcon: <FaHandPaper style={{ fontSize: "1.2rem" }} />,
    },
    {
      label: "Discount",
      className: "w-100",
      variant: "secondary",
      startIcon: <PiCurrencyCircleDollar style={{ fontSize: "1.2rem" }} />,
    },
    {
      label: "Pay Now",
      className: "w-100 fs-6 ",
      variant: "secondary",
      startIcon: <PiContactlessPayment style={{ fontSize: "1.3rem" }} />,
      path: `/checkout`,
    },
  ];

  return (
    <>
      {/* CART TOTAL */}
      <Row className="justify-content-end">
        <Col xs={12} md={8}>
          <Table bordered striped responsive>
            <tr>
              <td>
                <h6 className="m-0 text-dark">Subtotal</h6>
              </td>
              <td>
                <h6 className="m-0 text-dark text-end">
                  ${priceCalculation()}
                </h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="m-0 text-dark">Tax</h6>
              </td>
              <td>
                <h6 className="m-0 text-dark text-end">
                  ${totalTax.toFixed(2)}
                </h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="m-0 text-dark">Shipping</h6>
              </td>
              <td>
                <h6 className="m-0 text-dark text-end">${shippingCost}</h6>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="m-0 text-primary">Discount on cart</h6>
              </td>
              <td>
                <h6 className="m-0 text-dark text-end">${discount}</h6>
              </td>
            </tr>
          </Table>
        </Col>
      </Row>

      {/* PRODUCT COUNT AND TOTAL */}
      <Stack
        direction="horizontal"
        gap={3}
        className="p-3 my-2 justify-content-between bg-primary rounded text-secondary fw-semibold"
      >
        <Stack direction="horizontal" gap={3}>
          <span>Product Count ({totalProductCount()})</span>
        </Stack>
        <span>Total</span>
        <span>${amount.toFixed(2)}</span>
      </Stack>

      {/* FOOTER BUTTONS */}
      <Row className="g-2 mb-2 justify-content-center">
        {/* NAVIGATION BUTTONS */}
        {footerButtons.map(({ label, ...rest }, index) => (
          <Col xs={6} lg={3} key={index}>
            <IconButton {...{ ...rest }}>{label}</IconButton>
          </Col>
        ))}
      </Row>
    </>
  );
};

CartFooter.propTypes = {
  cartData: PropTypes.array.isRequired,
};

export default CartFooter;
