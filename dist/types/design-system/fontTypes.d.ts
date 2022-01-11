export interface TypoWeights {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
    black: number;
}
export interface TypoSizes {
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
export interface TypographyProperties {
    font?: string;
    lineHeight: number;
    size: number;
    tracking: number;
    weight: number;
}
export interface TypographyRole {
    large: TypographyProperties;
    medium: TypographyProperties;
    small: TypographyProperties;
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
