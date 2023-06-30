import { useContext } from "react";
import { Navbar as NavbarBS, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
const boxShadowStyles = { boxShadow: "0px 0px 20px #333" };
const cartPillStyles = { position: "absolute", bottom: 5, right: -5, transform: "translate(50%, 50%)" };

export const Navbar = () => {
  const { themeState, toggleTheme } = useTheme();
  const { cartItems, getTotalCartItems } = useShoppingCart();

  const totalCartItems = getTotalCartItems();

  return (
    <NavbarBS className="mb-4 bg-primary" style={boxShadowStyles} data-bs-theme="dark">
      <Container>
        <NavbarBS.Brand>DG's Store</NavbarBS.Brand>
        <Nav>
          <Nav.Link as={NavLink} to={"/"}>
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/cart"}>
            Cart
          </Nav.Link>
          <Button onClick={toggleTheme}>
            {themeState === "dark" ? (
              <svg
                style={{ height: "1.5rem", width: "1.5rem" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" strokeWidth="0" fill="currentColor" />
                <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" strokeWidth="0" fill="currentColor" />
                <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" strokeWidth="0" fill="currentColor" />
                <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" strokeWidth="0" fill="currentColor" />
                <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" strokeWidth="0" fill="currentColor" />
                <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" strokeWidth="0" fill="currentColor" />
                <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" strokeWidth="0" fill="currentColor" />
                <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" strokeWidth="0" fill="currentColor" />
                <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "1.5rem", width: "1.5rem" }}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
            )}
          </Button>
          <div className="position-relative ms-2">
            <Button variant="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "1rem", height: "1rem" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </Button>
            {cartItems.length > 0 ? (
              <div className="badge rounded-pill text-bg-success fs-6" style={cartPillStyles}>
                {totalCartItems}
              </div>
            ) : (
              <></>
            )}
          </div>
        </Nav>
      </Container>
    </NavbarBS>
  );
};
