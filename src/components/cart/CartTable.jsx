import { Button, Stack, Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import IconButton from "../utils/IconButton";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import CartFooter from "./CartFooter";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../providers/CartProvider";
import EditItem from "../product/EditItem";

const CartTable = () => {
  const { cart, increment, decrement, removeFromCart } =
    useContext(CartContext);

  // EDIT ITEM MODAL STATES
  const [productId, setProductId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // HANDLE MODAL CLOSE
  const handleModalClose = () => setShowModal(false);

  // HANDLE MODAL
  const handleModal = (productId) => {
    setShowModal(true);
    setProductId(productId);
  };

  return (
    <Stack>
      <Table bordered striped responsive className="border">
        {/* Cart data */}
        {cart.map((item, index) => (
          <tr className="text-dark" key={index}>
            <td>
              <IconButton
                className="text-dark"
                variant="transparent"
                startIcon={<FiEdit />}
                onClick={() => handleModal(item.id)}
              />
            </td>
            <td>
              <h6 className="m-0 text-dark">{item.name}</h6>
            </td>
            <td>
              <h6 className="m-0 text-dark">${item.price}</h6>
            </td>
            {/* quantity increment decrement */}
            <td>
              <div className="d-flex align-items-center justify-content-center">
                <IconButton
                  variant="dark"
                  className="rounded-circle px-1"
                  onClick={() => decrement(item.id)}
                  disabled={item.quantity === 0}
                  startIcon={<FaMinus style={{ fontSize: ".8rem" }} />}
                />
                <h6 className="px-3 py-0 m-0">{item.quantity}</h6>
                <IconButton
                  variant="dark"
                  className="rounded-circle px-1"
                  onClick={() => increment(item.id)}
                  startIcon={<FaPlus style={{ fontSize: ".8rem" }} />}
                />
              </div>
            </td>
            <td>
              <h6 className="m-0 text-dark">${item.totalPrice}</h6>
            </td>
            <td>
              <div>
                <IconButton
                  variant="transparent"
                  className="text-error"
                  onClick={() => removeFromCart(item.id)}
                  startIcon={<FaTrashAlt />}
                />
              </div>
            </td>
          </tr>
        ))}
      </Table>

      {/* EDIT ITEM */}
      <EditItem
        showModal={showModal}
        productId={productId}
        handleModalClose={handleModalClose}
      />

      {/* CART FOOTER */}
      <CartFooter cartData={cart} />
    </Stack>
  );
};

export default CartTable;
