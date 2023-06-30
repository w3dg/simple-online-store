import { Container, Row, Col } from "react-bootstrap";

import { ItemCard } from "../components/ItemCard";

import { useTheme } from "../context/ThemeContext";

import products from "../products.json";

export const AllProducts = () => {
  const { themeState } = useTheme();

  return (
    <Container data-bs-theme={themeState} className={"bg-" + themeState}>
      <h1 className={themeState === "dark" ? "text-light" : "text-dark"}>All Products</h1>
      <Row xs={1} sm={1} md={3} lg={3} xl={4} className="pt-3 pb-3">
        {products.map((item) => (
          <Col className="mt-2" key={item.id}>
            <ItemCard {...item}></ItemCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
