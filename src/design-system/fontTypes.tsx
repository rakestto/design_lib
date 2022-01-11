export interface TypoWeights {
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
}

import { FlattenSimpleInterpolation } from "styled-components";

export interface TypoSizes {
  8: string;
  12: string;
  16: string;
  18: string;
  20: string;
  24: string;
  30: string;
  36: string;
  48: string;
  60: string;
  72: string;
}

export interface TypographyRole {
  large: FlattenSimpleInterpolation;
  medium: FlattenSimpleInterpolation;
  small: FlattenSimpleInterpolation;
}

export interface TypographyRoles {
  display: TypographyRole;
  heading: TypographyRole;
  title: TypographyRole;
  label: TypographyRole;
  body: TypographyRole;
}

export interface TypeSystem {
  typographyRoles: TypographyRoles;
  typographySizes: TypoSizes;
  typographyWeigths: TypoWeights;
}
