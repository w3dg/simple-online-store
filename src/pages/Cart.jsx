import { useMemo } from "react";
import { Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CartCard } from "../components/CartCard";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useTheme } from "../context/ThemeContext";

import { formatCurrency } from "../utils/formatCurrency";
import products from "../products.json";

export const Cart = () => {
  const { cartItems, getTotalCartItems } = useShoppingCart();

  const totalItems = getTotalCartItems();

  const totalPrice = cartItems.reduce((totalPrice, currentItem) => {
    return totalPrice + products.find((item) => item.id === currentItem.id).price;
  }, 0);

  const { themeState, themeToggle } = useTheme();

  const themeStyle = useMemo(() => {
    return "bg-" + themeState + " " + (themeState === "dark" ? "text-white" : "text-dark");
  }, [themeState]);

  return (
    <Container data-bs-theme={themeState}>
      <h1 className={themeStyle}>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <h3 className={themeStyle}>
            There are {cartItems.length} products and {totalItems} in total.
          </h3>
          <h4 className={themeStyle}>Total Price: {formatCurrency(totalPrice)}</h4>
          <h5 className={themeStyle}>Subtotal</h5>
          <Stack data-bs-theme={themeState} className={"bg-" + themeState}>
            {cartItems.map((item) => (
              <CartCard {...item} key={item.id}></CartCard>
            ))}
          </Stack>
        </div>
      ) : (
        <>
          <h3 className="text-muted text-center"> No items in your cart yet.</h3>
          <p className="text-muted text-center">
            Go to the <Link to={"/"}>Products</Link> page to select items
          </p>
        </>
      )}
    </Container>
  );
};
