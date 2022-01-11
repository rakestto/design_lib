import { TypeSystem, TypographyRole, TypoWeights } from "./fontTypes";

const TypographyWeights: TypoWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

const TypoSizes = {
  8: 8,
  12: 12,
  16: 16,
  18: 18,
  20: 20,
  24: 24,
  30: 30,
  36: 36,
  48: 48,
  60: 60,
  72: 72,
};

const display: TypographyRole = {
  large: {
    lineHeight: 64,
    size: 57,
    tracking: 0,
    weight: TypographyWeights.regular,
  },
  medium: {
    lineHeight: 52,
    size: 45,
    tracking: 0,
    weight: TypographyWeights.regular,
  },
  small: {
    lineHeight: 44,
    size: 36,
    tracking: 0,
    weight: TypographyWeights.regular,
  },
};

const heading: TypographyRole = {
  large: {
    lineHeight: 40,
    size: 32,
    tracking: 0,
    weight: TypographyWeights.regular,
  },
  medium: {
    lineHeight: 36,
    size: 28,
    tracking: 0,
    weight: TypographyWeights.regular,
  },
  small: {
    lineHeight: 32,
    size: 24,
    tracking: 0,
    weight: TypographyWeights.regular,
  },
};

const title: TypographyRole = {
  large: {
    lineHeight: 28,
    size: 22,
    tracking: 0,
    weight: TypographyWeights.regular,
  },
  medium: {
    lineHeight: 24,
    size: 16,
    tracking: 0.15,
    weight: TypographyWeights.regular,
  },
  small: {
    lineHeight: 32,
    size: 24,
    tracking: 0,
    weight: TypographyWeights.regular,
  },
};

const label: TypographyRole = {
  large: {
    lineHeight: 20,
    size: 14,
    tracking: 0.1,
    weight: TypographyWeights.regular,
  },
  medium: {
    lineHeight: 16,
    size: 12,
    tracking: 0.5,
    weight: TypographyWeights.regular,
  },
  small: {
    lineHeight: 6,
    size: 11,
    tracking: 0.5,
    weight: TypographyWeights.regular,
  },
};
const body: TypographyRole = {
  large: {
    lineHeight: 24,
    size: 16,
    tracking: 0.15,
    weight: TypographyWeights.regular,
  },
  medium: {
    lineHeight: 20,
    size: 14,
    tracking: 0.25,
    weight: TypographyWeights.regular,
  },
  small: {
    lineHeight: 16,
    size: 12,
    tracking: 0.4,
    weight: TypographyWeights.regular,
  },
};

const TypoSystem: TypeSystem = {
  typographyRoles: {
    display,
    heading,
    title,
    label,
    body,
  },
  typographySizes: TypoSizes,
  typographyWeigths: TypographyWeights,
};

export default TypoSystem;
