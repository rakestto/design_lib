import { FlattenSimpleInterpolation, css } from "styled-components";

export type ShadowType = FlattenSimpleInterpolation;

export interface ShadowSystem {
  shadowOne: ShadowType;
  shadowTwo: ShadowType;
  shadowThree: ShadowType;
  shadowFour: ShadowType;
  shadowFive: ShadowType;
}

const Shadows: ShadowSystem = {
  shadowOne: css`
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  `,
  shadowTwo: css`
    box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.12);
  `,
  shadowThree: css`
    box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.12);
  `,
  shadowFour: css`
    box-shadow: 0px 7px 12px 1px rgba(0, 0, 0, 0.12);
  `,
  shadowFive: css`
    box-shadow: 0px 12px 21px 1px rgba(0, 0, 0, 0.12);
  `,
};

export default Shadows;
