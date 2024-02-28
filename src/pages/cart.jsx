import { Stack } from "react-bootstrap";
import Navbar from "../components/cart/Navbar";
import Customer from "../components/customer/Customer";
import CartTable from "../components/cart/CartTable";

const Cart = () => {
  return (
    <Stack gap={2}>
      <Navbar />
      <Customer />
      <CartTable />
    </Stack>
  );
};

export default Cart;
