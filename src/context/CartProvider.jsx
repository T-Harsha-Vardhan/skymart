import { useState, useContext, useEffect } from "react";
import CartContext from "./CartContext";
import AuthContext from "./AuthContext";

export default function CartProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem(`skymart.cart.${user.email}`);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        setCart([]);
      }
    } else {
      setCart([]);
    }
  }, [user]);

  function updateCartAndStorage(updater) {
    setCart((previousCart) => {
      const newCart = typeof updater === "function" ? updater(previousCart) : updater;
      if (user) {
        localStorage.setItem(`skymart.cart.${user.email}`, JSON.stringify(newCart));
      }
      return newCart;
    });
  }

  function addToCart(product) {
    updateCartAndStorage((previousCart) => {
      const existingItem = previousCart.find(
        (item) => item.product.id === product.id
      );

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

  function increaseQuantity(productId) {
    updateCartAndStorage((previousCart) =>
      previousCart.map((item) =>
        item.product.id === Number(productId)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(productId) {
    updateCartAndStorage((previousCart) =>
      previousCart.flatMap((item) => {
        if (item.product.id !== Number(productId)) {
          return item;
        }

        if (item.quantity === 1) {
          return [];
        }

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      })
    );
  }

  function removeFromCart(productId) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.product.id !== Number(productId))
    );
  }

  function clearCart() {
    updateCartAndStorage([]);
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const value = {
    cart,
    totalItems,
    subtotal,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
