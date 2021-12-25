import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import DStheme from "./DSTheme";
import React from "react";

const DSThemeContext = createContext();

const DSThemeProvider = ({ children }) => {
  const [theme, setCurrentTheme] = useState(DStheme.ligth);

  const toggleTheme = () => {
    setCurrentTheme((prev) =>
      prev === DStheme.ligth ? DStheme.dark : DStheme.ligth
    );
  };

  const values = {
    toggleTheme,
    theme,
  };

  return (
    <DSThemeContext.Provider value={values}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DSThemeContext.Provider>
  );
};

export default DSThemeProvider;
export { DSThemeContext };
