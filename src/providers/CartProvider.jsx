import React, { useCallback, useState } from "react";

// Create Cart context
export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  // total amount state
  const [amount, setAmount] = useState(0);

  // Initialize cart state using local storage or an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to update cart state and local storage
  const cartItemUpdate = useCallback(
    (newCart) => {
      setCart(newCart);

      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    [cart]
  );

  // Function to add a product to the cart
  const addToCart = useCallback(
    (item) => {
      let updateCart = [];

      // Check if the item is already in the cart
      const index = cart.findIndex((cartItem) => cartItem.id === item.id);

      if (index === -1) {
        // If the item is not in the cart, add it
        updateCart = [
          ...cart,
          { ...item, quantity: 1, totalPrice: item.price },
        ];

        cartItemUpdate(updateCart);
      } else {
        // If the item is already in the cart, update its quantity
        updateCart = [...cart];
        updateCart[index].quantity++;
        updateCart[index].totalPrice = updateCart[index].quantity * item.price;

        cartItemUpdate(updateCart);
      }
    },
    [cart]
  );

  // function to edit a product in the cart
  const editCart = useCallback(
    (updateProductData) => {
      const updatedCart = cart.map((item) => {
        if (item.id === updateProductData.id) {
          return {
            ...item,
            ...updateProductData,
          };
        }
        return item;
      });
      cartItemUpdate(updatedCart);
    },
    [cart]
  );

  // increment quantity
  const increment = useCallback(
    (productId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.price * (item.quantity + 1),
          };
        }
        return item;
      });
      cartItemUpdate(updatedCart);
    },
    [cart]
  );

  // decrement quantity
  const decrement = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity - 1,
          totalPrice: item.price * (item.quantity - 1),
        };
      }
      return item;
    });
    cartItemUpdate(updatedCart);
  };

  // Function to remove a product from the cart
  const removeFromCart = useCallback(
    (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);

      cartItemUpdate(updatedCart);
    },
    [cart]
  );

  // Clear the cart
  const clearCart = () => {
    cartItemUpdate([]);
  };

  // return data
  const data = {
    cart,
    addToCart,
    editCart,
    increment,
    decrement,
    removeFromCart,
    clearCart,
    amount,
    setAmount,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
