import "styled-components";
export type Color = string;

export interface ColorSet {
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

export interface ColorPalette<T> {
  primary: T;
  secondary: T;
  tertiary: T;
  cuaternary: T;
  neutrals: T;
  error: T;
}

export interface SurfaceTones {
  surfaceOne: string;
  surfaceTwo: string;
  surfaceThree: string;
  surfaceFour: string;
  surfaceFive: string;
}

export interface SurfacePalette {
  ligthSurfaces: SurfaceTones;
  darkSurfaces: SurfaceTones;
}

export interface Theme {
  primary?: Color;
  primaryContainer?: Color;
  secondary?: Color;
  secondaryContainer?: Color;
  tertiary?: Color;
  tertiaryContainer?: Color;
  cuaternary?: Color;
  cuaternaryContainer?: Color;
  // -------------
  surface?: Color;
  surfaceVariant?: Color;
  background?: Color;
  error?: Color;
  errorContainer?: Color;
  // -------------
  onPrimary?: Color;
  onPrimaryContainer?: Color;
  onSecondary?: Color;
  onSecondaryContainer?: Color;
  onTertiary?: Color;
  onTertiaryContainer?: Color;
  onCuaternary?: Color;
  onCuaternaryContainer?: Color;
  // --------------
  onSurface?: Color;
  onSurfaceVariant?: Color;
  onError?: Color;
  onErrorContainer?: Color;
  onBackground?: Color;
  outline?: Color;
  // --------------
  inverseSurface?: Color;
  inverseOnSurface?: Color;
  inversePrimary?: Color;
  colorPalette: ColorPalette<ColorSet>;
  surfaceTones: SurfaceTones;
}

export interface Themes {
  dark: Theme;
  light: Theme;
}

export type CurrentTheme = "dark" | "light";
