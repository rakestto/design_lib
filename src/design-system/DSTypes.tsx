import { Theme } from "./colorThemeTypes";
import { TypeSystem } from "./fontTypes";
import { SpacingValues } from "./spacing";
import { ShadowSystem } from "./shadows";

export interface DesignSystem {
  colors: Theme;
  spacing: SpacingValues;
  typography: TypeSystem;
  shadows: ShadowSystem;
}
