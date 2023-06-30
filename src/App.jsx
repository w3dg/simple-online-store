import { Routes, Route, Navigate } from "react-router-dom";
import { AllProducts } from "./pages/AllProducts";
import { Cart } from "./pages/Cart";

import { Navbar } from "./components/Navbar";

import { useTheme } from "./context/ThemeContext";

export const toggleTheme = () => {
  setThemeState((prevState) => (prevState === "light" ? "dark" : "light"));
};

function App() {
  const { themeState } = useTheme();

  return (
    <div className={"bg-" + themeState + " min-vh-100 overflow-x-hidden"}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<AllProducts />}></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
