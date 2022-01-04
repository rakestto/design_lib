import { createContext, useState } from "react";
import "styled-components";
import {
  DefaultTheme,
  ThemeProvider as SCThemeProvider,
} from "styled-components";
import { themes } from "./design-system/colorTheme";
import { Theme } from "./design-system/colorThemeTypes";
import React from "react";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

interface ThemeContextAPI {
  toggleTheme: () => void;
  currentTheme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextAPI | null>(null);

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(themes.light);

  const toggleTheme = () => {
    setCurrentTheme((prev) =>
      prev === themes.light ? themes.dark : themes.light
    );
  };

  const values: ThemeContextAPI = {
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
