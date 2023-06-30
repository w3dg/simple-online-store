import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("");

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState("light");

  function toggleTheme() {
    setThemeState((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  return <ThemeContext.Provider value={{ themeState, toggleTheme }}>{children}</ThemeContext.Provider>;
};
