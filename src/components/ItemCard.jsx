import { Card, Button } from "react-bootstrap";

import { useShoppingCart } from "../context/ShoppingCartContext";

import { formatCurrency } from "../utils/formatCurrency";
import { truncateText } from "../utils/truncateText";

export const ItemCard = ({ image, price, title, description, id }) => {
  const { cartItems, addCartItem, removeCartItem, getItemQuantity, removeCartItemAll } = useShoppingCart();

  const isInCart = () => !!cartItems.find((item) => item.id === id);

  const quantity = getItemQuantity(id);

  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={image} style={{ objectFit: "cover", height: "13rem" }} />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-baseline">
          <Card.Title>{truncateText(title, 20)}</Card.Title>
          <Card.Subtitle>{formatCurrency(price)}</Card.Subtitle>
        </div>
        <Card.Text>{truncateText(description, 70)}</Card.Text>

        {isInCart() ? (
          <div className="d-flex gap-2">
            <Button onClick={() => addCartItem(id)}>+</Button>
            <span className="fs-3 mx-2 align-items-baseline">{quantity}</span>
            <Button onClick={() => removeCartItem(id)}>-</Button>
            <Button className="bg-danger" onClick={() => removeCartItemAll(id)}>
              Remove
            </Button>
          </div>
        ) : (
          <Button variant="primary" onClick={() => addCartItem(id)}>
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
