import { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((previousCart) => {
      const existingItem = previousCart.find((item) => item.id === product.id);

      if (existingItem) {
        return previousCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousCart,
        {
          product,
          quantity: 1,
        },
      ];
    });
  }

  const value = {
    cart,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
