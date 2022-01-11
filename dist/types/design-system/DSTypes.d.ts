import { Theme } from "./colorThemeTypes";
import { TypeSystem } from "./fontTypes";
import { SpacingValues } from "./spacing";
export interface DesignSystem {
    colors: Theme;
    spacing: SpacingValues;
    typography: TypeSystem;
}
