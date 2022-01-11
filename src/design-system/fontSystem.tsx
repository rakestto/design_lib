import {
  TypeSystem,
  TypographyRole,
  TypoSizes,
  TypoWeights,
} from "./fontTypes";

import { css } from "styled-components";

const TypographyWeights: TypoWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

const TypoSize: TypoSizes = {
  8: "8px",
  12: "12px",
  16: "16px",
  18: "18px",
  20: "20px",
  24: "24px",
  30: "30px",
  36: "36px",
  48: "48px",
  60: "60px",
  72: "72px",
};

const display: TypographyRole = {
  large: css`
    line-height: 64px;
    font-size: 57px;
    letter-spacing: 0px;
    font-weight: ${TypographyWeights.regular};
  `,
  medium: css`
    line-height: 52px;
    font-size: 45px;
    letter-spacing: 0px;
    font-weight: ${TypographyWeights.regular};
  `,
  small: css`
    line-height: 44px;
    font-size: 36px;
    letter-spacing: 0px;
    font-weight: ${TypographyWeights.regular};
  `,
};
const heading: TypographyRole = {
  large: css`
    line-height: 40px;
    font-size: 32px;
    letter-spacing: 0px;
    font-weight: ${TypographyWeights.regular};
  `,
  medium: css`
    line-height: 36px;
    font-size: 28px;
    letter-spacing: 0px;
    font-weight: ${TypographyWeights.regular};
  `,
  small: css`
    line-height: 32px;
    font-size: 24px;
    letter-spacing: 0px;
    font-weight: ${TypographyWeights.regular};
  `,
};
const title: TypographyRole = {
  large: css`
    line-height: 28px;
    font-size: 22px;
    letter-spacing: 0px;
    font-weight: ${TypographyWeights.regular};
  `,
  medium: css`
    line-height: 24px;
    font-size: 26px;
    letter-spacing: 0.15px;
    font-weight: ${TypographyWeights.medium}; //500
  `,
  small: css`
    line-height: 20px;
    font-size: 14px;
    letter-spacing: 0.1px;
    font-weight: ${TypographyWeights.medium};
  `,
};
const label: TypographyRole = {
  large: css`
    line-height: 20px;
    font-size: 14px;
    letter-spacing: 0.1px;
    font-weight: ${TypographyWeights.medium};
  `,
  medium: css`
    line-height: 16px;
    font-size: 12px;
    letter-spacing: 0.5px;
    font-weight: ${TypographyWeights.medium};
  `,
  small: css`
    line-height: 6px;
    font-size: 11px;
    letter-spacing: 0.5px;
    font-weight: ${TypographyWeights.regular};
  `,
};
const body: TypographyRole = {
  large: css`
    line-height: 24px;
    font-size: 16px;
    letter-spacing: 0.15px;
    font-weight: ${TypographyWeights.medium};
  `,
  medium: css`
    line-height: 20px;
    font-size: 14px;
    letter-spacing: 0.25px;
    font-weight: ${TypographyWeights.medium};
  `,
  small: css`
    line-height: 16px;
    font-size: 12px;
    letter-spacing: 0.4px;
    font-weight: ${TypographyWeights.regular};
  `,
};

const TypoSystem: TypeSystem = {
  typographyRoles: {
    display,
    heading,
    title,
    label,
    body,
  },
  typographySizes: TypoSize,
  typographyWeigths: TypographyWeights,
};

export default TypoSystem;
