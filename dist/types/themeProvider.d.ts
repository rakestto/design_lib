import "styled-components";
import { DefaultTheme } from "styled-components";
import React from "react";
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
