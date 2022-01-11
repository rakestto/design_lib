import React from "react";
import "styled-components";
import { DefaultTheme } from "styled-components";
import { DesignSystem } from "./design-system/DSTypes";
declare module "styled-components" {
    interface DefaultTheme extends DesignSystem {
    }
}
interface ThemeContextAPI {
    toggleTheme: () => void;
    currentDS: DefaultTheme;
}
declare const ThemeContext: React.Context<ThemeContextAPI | null>;
declare const ThemeProvider: React.FC<{
    children?: React.ReactNode;
}>;
export default ThemeProvider;
export { ThemeContext };
