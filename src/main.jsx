import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext.jsx";

import "./bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ShoppingCartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShoppingCartContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
