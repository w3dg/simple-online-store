import { Stack } from "react-bootstrap";

import { useTheme } from "../context/ThemeContext";

import { formatCurrency } from "../utils/formatCurrency";

import products from "../products.json";

export const CartCard = ({ id, quantity }) => {
  const { themeState } = useTheme();

  const { price, image, description } = products.find((item) => item.id === id);

  const computeClassStyles = () => {
    return "bg-" + themeState + (themeState === "dark" ? " mb-4 border p-4 border-light-subtle rounded text-white" : " mb-4 border p-4 border-dark-subtle rounded text-dark");
  };

  return (
    <div className={computeClassStyles()}>
      <div className="d-flex mb-4">
        <img src={image} width={"125px"} />
        <p className="p-4">{description}</p>
      </div>
      <div className="d-flex justify-content-end">
        <Stack>
          <div>Price: {formatCurrency(price)}</div>
          <div>Quantity: {quantity}</div>
        </Stack>
        <div className="">
          Total: {formatCurrency(price)} x {quantity} = <span className="fs-3">{formatCurrency(price * quantity)}</span>
        </div>
      </div>
    </div>
  );
};
