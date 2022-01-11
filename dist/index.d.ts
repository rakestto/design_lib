import React from 'react';
import * as styled_components from 'styled-components';
import { DefaultTheme } from 'styled-components';

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
    error: T;
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

interface TypoWeights {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
    black: number;
}
interface TypoSizes {
    8: number;
    12: number;
    16: number;
    18: number;
    20: number;
    24: number;
    30: number;
    36: number;
    48: number;
    60: number;
    72: number;
}
interface TypographyProperties {
    font?: string;
    lineHeight: number;
    size: number;
    tracking: number;
    weight: number;
}
interface TypographyRole {
    large: TypographyProperties;
    medium: TypographyProperties;
    small: TypographyProperties;
}
interface TypographyRoles {
    display: TypographyRole;
    heading: TypographyRole;
    title: TypographyRole;
    label: TypographyRole;
    body: TypographyRole;
}
interface TypeSystem {
    typographyRoles: TypographyRoles;
    typographySizes: TypoSizes;
    typographyWeigths: TypoWeights;
}

interface SpacingValues {
    4: string;
    8: string;
    12: string;
    16: string;
    24: string;
    32: string;
    48: string;
    64: string;
    96: string;
    128: string;
    192: string;
    256: string;
    384: string;
    512: string;
    640: string;
    768: string;
}

interface DesignSystem {
    colors: Theme;
    spacing: SpacingValues;
    typography: TypeSystem;
}

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

declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

export { GlobalStyle, ThemeContext, ThemeProvider };
