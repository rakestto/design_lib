import * as styled_components from 'styled-components';
import { DefaultTheme } from 'styled-components';
import React from 'react';

declare type Color = string;
interface ColorSet {
    0: Color;
    10: Color;
    20: Color;
    30: Color;
    40: Color;
    50: Color;
    60: Color;
    70: Color;
    80: Color;
    90: Color;
    95: Color;
    99: Color;
    100: Color;
}
interface ColorPalette<T> {
    primary: T;
    secondary: T;
    tertiary: T;
    cuaternary: T;
    neutrals: T;
}
interface SurfaceTones {
    surfaceOne: string;
    surfaceTwo: string;
    surfaceThree: string;
    surfaceFour: string;
    surfaceFive: string;
}
interface Theme {
    primary?: Color;
    primaryContainer?: Color;
    secondary?: Color;
    secondaryContainer?: Color;
    tertiary?: Color;
    tertiaryContainer?: Color;
    cuaternary?: Color;
    cuaternaryContainer?: Color;
    surface?: Color;
    surfaceVariant?: Color;
    background?: Color;
    error?: Color;
    errorContainer?: Color;
    onPrimary?: Color;
    onPrimaryContainer?: Color;
    onSecondary?: Color;
    onSecondaryContainer?: Color;
    onTertiary?: Color;
    onTertiaryContainer?: Color;
    onCuaternary?: Color;
    onCuaternaryContainer?: Color;
    onSurface?: Color;
    onSurfaceVariant?: Color;
    onError?: Color;
    onErrorContainer?: Color;
    onBackground?: Color;
    outline?: Color;
    inverseSurface?: Color;
    inverseOnSurface?: Color;
    inversePrimary?: Color;
    colorPalette: ColorPalette<ColorSet>;
    surfaceTones: SurfaceTones;
}

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

declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

export { GlobalStyle, ThemeContext, ThemeProvider };
