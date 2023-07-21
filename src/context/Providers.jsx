import { ShoppingCartContextProvider } from "./ShoppingCartContext";
import { ThemeProvider } from "./ThemeContext";

export const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <ShoppingCartContextProvider>{children}</ShoppingCartContextProvider>
      </ThemeProvider>
    </>
  );
};
