import React, { createContext, useState, useEffect } from "react";
import "styled-components";
import {
  DefaultTheme,
  ThemeProvider as SCThemeProvider,
} from "styled-components";
import { themes } from "./design-system/colorTheme";
import Spacing from "./design-system/spacing";
import TypoSystem from "./design-system/fontSystem";
import { DesignSystem } from "./design-system/DSTypes";
import Shadows from "./design-system/shadows";

declare module "styled-components" {
  export interface DefaultTheme extends DesignSystem {}
}

interface ThemeContextAPI {
  toggleTheme: () => void;
  currentDS: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextAPI | null>(null);

const DesignSystemLight: DesignSystem = {
  colors: themes.light,
  spacing: Spacing,
  typography: TypoSystem,
  shadows: Shadows,
};
const DesignSystemDark: DesignSystem = {
  colors: themes.dark,
  spacing: Spacing,
  typography: TypoSystem,
  shadows: Shadows,
};

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [currentDS, setCurrentDS] = useState<DefaultTheme>(DesignSystemLight);

  const toggleTheme = () => {
    setCurrentDS((prev) =>
      prev === DesignSystemLight ? DesignSystemDark : DesignSystemLight
    );
  };

  const values: ThemeContextAPI = {
    toggleTheme,
    currentDS,
  };

  return (
    <ThemeContext.Provider value={values}>
      <SCThemeProvider theme={currentDS}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { ThemeContext };
