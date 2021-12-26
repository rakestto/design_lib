import { createContext, useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import theme from "./theme";
import React from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme.ligth);

  const toggleTheme = () => {
    setCurrentTheme((prev) =>
      prev === theme.ligth ? theme.dark : theme.ligth
    );
  };

  const values = {
    toggleTheme,
    currentTheme,
  };

  return (
    <ThemeContext.Provider value={values}>
      <SCThemeProvider theme={currentTheme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { ThemeContext };
