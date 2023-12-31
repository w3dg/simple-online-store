import { createContext, useContext, useState } from "react";

import products from "../products.json";

export const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

function isValidProductID(id) {
  return !!products.find((item) => item.id === id);
}

export function ShoppingCartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addCartItem(id) {
    if (!isValidProductID(id)) return;

    const result = cartItems.find((item) => item.id === id);

    if (!result) {
      setCartItems((cartItems) => {
        return [...cartItems, { id, quantity: 1 }];
      });
    } else
      setCartItems((cartItems) => {
        return cartItems.map((item) => (item.id === id ? { id, quantity: item.quantity + 1 } : item));
      });
  }

  function removeCartItem(id) {
    if (!isValidProductID(id)) return;

    const result = cartItems.find((item) => item.id === id);

    if (!result) return;

    if (result.quantity === 1) {
      setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
      return;
    }

    setCartItems((cartItems) => {
      return cartItems.map((item) => (item.id === id ? { id, quantity: item.quantity - 1 } : item));
    });
  }

  function removeCartItemAll(id) {
    if (!isValidProductID(id)) return;

    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.id !== id);
    });
  }

  function clearCart() {
    setCartItems(() => []);
  }

  function getTotalCartItems() {
    return cartItems.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);
  }

  function getItemQuantity(id) {
    const result = cartItems.find((item) => item.id === id);
    return result?.quantity || 0;
  }

  function getTotalPrice() {
    return cartItems.reduce((totalPrice, currentItem) => {
      console.log(currentItem);
      const product = products.find((item) => item.id === currentItem.id);
      return totalPrice + product.price * currentItem.quantity;
    }, 0);
  }

  const context = {
    cartItems,
    addCartItem,
    removeCartItem,
    getItemQuantity,
    getTotalCartItems,
    getTotalPrice,
    removeCartItemAll,
    clearCart,
  };

  return (
    <>
      <ShoppingCartContext.Provider value={context}>{children}</ShoppingCartContext.Provider>
    </>
  );
}
