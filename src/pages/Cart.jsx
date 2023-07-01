import { useMemo } from "react";
import { Container, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CartCard } from "../components/CartCard";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useTheme } from "../context/ThemeContext";

import { formatCurrency } from "../utils/formatCurrency";

export const Cart = () => {
  const { cartItems, getTotalCartItems, clearCart, getTotalPrice } = useShoppingCart();

  const totalItems = getTotalCartItems();

  const { themeState } = useTheme();

  const themeStyle = useMemo(() => {
    return "bg-" + themeState + " " + (themeState === "dark" ? "text-white" : "text-dark");
  }, [themeState]);

  return (
    <Container data-bs-theme={themeState}>
      <h1 className={themeStyle}>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <div className="d-flex">
            <h3 className={themeStyle}>
              There are {cartItems.length} products and {totalItems} in total.
            </h3>
            <div className="ms-auto">
              <Button className="bg-success mx-2" onClick={() => console.log("Place order")}>
                Place Order
              </Button>
              <Button className="bg-warning mx-2" onClick={() => clearCart()}>
                Clear Cart
              </Button>
            </div>
          </div>
          <p className={themeStyle + " fs-5"}>
            Go to the <Link to={"/"}>Products</Link> page to browse more items.
          </p>
          <h4 className={themeStyle}>Total Price: {formatCurrency(getTotalPrice())}</h4>
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
            Go to the <Link to={"/"}>Products</Link> page to browse more items
          </p>
        </>
      )}
    </Container>
  );
};
