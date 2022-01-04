import "styled-components";
import { DefaultTheme } from "styled-components";
import { Theme } from "./design-system/colorThemeTypes";
import React from "react";
declare module "styled-components" {
    interface DefaultTheme extends Theme {
    }
}
interface ThemeContextAPI {
    toggleTheme: () => void;
    currentTheme: DefaultTheme;
}
declare const ThemeContext: React.Context<ThemeContextAPI | null>;
declare const ThemeProvider: React.FC<{
    children?: React.ReactNode;
}>;
export default ThemeProvider;
export { ThemeContext };
