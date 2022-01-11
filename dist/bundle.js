'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styledComponents = require('styled-components');
require('@babel/runtime/helpers/typeof');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var colorPalette = {
    primary: {
        0: "#000000",
        10: "#0a2220",
        20: "#134340",
        30: "#1d6560",
        40: "#278780",
        50: "#31a8a0",
        60: "#5dd0c9",
        70: "#7edad4",
        80: "#9ee3df",
        90: "#beece9",
        95: "#dff6f4",
        99: "#F2FBFB",
        100: "#ffffff",
    },
    secondary: {
        0: "#000000",
        10: "#0a0d14",
        20: "#151b29",
        30: "#1f283d",
        40: "#293651",
        50: "#344366",
        60: "#50699e",
        70: "#6f85b6",
        80: "#93a4c8",
        90: "#b7c2da",
        95: "#dbe1ed",
        99: "#F1F4F8",
        100: "#ffffff",
    },
    tertiary: {
        0: "#000000",
        10: "#1a1523",
        20: "#342a47",
        30: "#4f3f6a",
        40: "#69548d",
        50: "#8570aa",
        60: "#b2a5ca",
        70: "#c2b7d4",
        80: "#d1c9df",
        90: "#e0dbea",
        95: "#f0edf4",
        99: "#F4F2F7",
        100: "#ffffff",
    },
    cuaternary: {
        0: "#000000",
        10: "#3e2207",
        20: "#7b430e",
        30: "#b96515",
        40: "#e7872c",
        50: "#eeaa69",
        60: "#f7d5b6",
        70: "#f8dec4",
        80: "#fae6d3",
        90: "#fceee2",
        95: "#fdf7f0",
        99: "#FEFAF6",
        100: "#ffffff",
    },
    neutrals: {
        0: "#000000",
        10: "#0e1112",
        20: "#1d2225",
        30: "#2b3238",
        40: "#39434a",
        50: "#48545d",
        60: "#6d808c",
        70: "#8999a4",
        80: "#a7b3bb",
        90: "#c4ccd1",
        95: "#e2e6e8",
        99: "#F0F2F4",
        100: "#ffffff",
    },
    error: {
        0: "#000000",
        10: "#410E0B",
        20: "#601410",
        30: "#8C1D18",
        40: "#B3261E",
        50: "#DC362E",
        60: "#E46962",
        70: "#EC928E",
        80: "#F2B8B5",
        90: "#F9DEDC",
        95: "#FCEEEE",
        99: "#FFFBF9",
        100: "#ffffff",
    },
};
var surfacePalette = {
    ligthSurfaces: {
        surfaceOne: "#E8F7F6",
        surfaceTwo: "#E3F4F4",
        surfaceThree: "#DDF2F1",
        surfaceFour: "#DBF1F0",
        surfaceFive: "#D7EFEE",
    },
    darkSurfaces: {
        surfaceOne: "#313B40",
        surfaceTwo: "#344045",
        surfaceThree: "#38454A",
        surfaceFour: "#39474C",
        surfaceFive: "#3B4B4F",
    },
};
var themes = {
    dark: {
        primary: colorPalette.primary[80],
        primaryContainer: colorPalette.primary[30],
        secondary: colorPalette.secondary[80],
        secondaryContainer: colorPalette.secondary[40],
        tertiary: colorPalette.tertiary[80],
        tertiaryContainer: colorPalette.tertiary[30],
        cuaternary: colorPalette.cuaternary[80],
        cuaternaryContainer: colorPalette.cuaternary[30],
        surface: colorPalette.neutrals[30],
        surfaceVariant: colorPalette.neutrals[90],
        background: colorPalette.neutrals[30],
        error: colorPalette.error[80],
        errorContainer: colorPalette.error[30],
        onPrimary: colorPalette.primary[20],
        onPrimaryContainer: colorPalette.primary[90],
        onSecondary: colorPalette.secondary[20],
        onSecondaryContainer: colorPalette.secondary[90],
        onTertiary: colorPalette.tertiary[20],
        onTertiaryContainer: colorPalette.tertiary[90],
        onCuaternary: colorPalette.cuaternary[90],
        onCuaternaryContainer: colorPalette.cuaternary[30],
        onSurface: colorPalette.neutrals[99],
        onSurfaceVariant: colorPalette.neutrals[90],
        onError: colorPalette.error[20],
        onErrorContainer: colorPalette.error[90],
        onBackground: colorPalette.neutrals[99],
        outline: colorPalette.neutrals[70],
        inverseSurface: colorPalette.neutrals[99],
        inverseOnSurface: colorPalette.neutrals[0],
        inversePrimary: colorPalette.primary[80],
        surfaceTones: surfacePalette.darkSurfaces,
        colorPalette: colorPalette,
    },
    light: {
        primary: colorPalette.primary[50],
        primaryContainer: colorPalette.primary[90],
        secondary: colorPalette.secondary[60],
        secondaryContainer: colorPalette.secondary[90],
        tertiary: colorPalette.tertiary[50],
        tertiaryContainer: colorPalette.tertiary[90],
        cuaternary: colorPalette.cuaternary[40],
        cuaternaryContainer: colorPalette.cuaternary[80],
        surface: colorPalette.neutrals[99],
        surfaceVariant: colorPalette.neutrals[90],
        background: colorPalette.neutrals[99],
        error: colorPalette.error[40],
        errorContainer: colorPalette.error[90],
        onPrimary: colorPalette.primary[99],
        onPrimaryContainer: colorPalette.primary[20],
        onSecondary: colorPalette.secondary[99],
        onSecondaryContainer: colorPalette.secondary[30],
        onTertiary: colorPalette.tertiary[99],
        onTertiaryContainer: colorPalette.tertiary[20],
        onCuaternary: colorPalette.cuaternary[99],
        onCuaternaryContainer: colorPalette.cuaternary[20],
        onSurface: colorPalette.neutrals[20],
        onSurfaceVariant: colorPalette.neutrals[30],
        onError: colorPalette.error[100],
        onErrorContainer: colorPalette.error[10],
        onBackground: colorPalette.neutrals[20],
        outline: colorPalette.neutrals[60],
        inverseSurface: colorPalette.neutrals[30],
        inverseOnSurface: colorPalette.neutrals[99],
        inversePrimary: colorPalette.primary[80],
        surfaceTones: surfacePalette.ligthSurfaces,
        colorPalette: colorPalette,
    },
};

var Spacing = {
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    24: "24px",
    32: "32px",
    48: "48px",
    64: "64px",
    96: "96px",
    128: "128px",
    192: "192px",
    256: "256px",
    384: "384px",
    512: "512px",
    640: "640px",
    768: "768px",
};

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

var TypographyWeights = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
};
var TypoSize = {
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
var display = {
    large: styledComponents.css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    line-height: 64px;\n    font-size: 57px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "], ["\n    line-height: 64px;\n    font-size: 57px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "])), TypographyWeights.regular),
    medium: styledComponents.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    line-height: 52px;\n    font-size: 45px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "], ["\n    line-height: 52px;\n    font-size: 45px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "])), TypographyWeights.regular),
    small: styledComponents.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    line-height: 44px;\n    font-size: 36px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "], ["\n    line-height: 44px;\n    font-size: 36px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "])), TypographyWeights.regular),
};
var heading = {
    large: styledComponents.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    line-height: 40px;\n    font-size: 32px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "], ["\n    line-height: 40px;\n    font-size: 32px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "])), TypographyWeights.regular),
    medium: styledComponents.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    line-height: 36px;\n    font-size: 28px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "], ["\n    line-height: 36px;\n    font-size: 28px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "])), TypographyWeights.regular),
    small: styledComponents.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    line-height: 32px;\n    font-size: 24px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "], ["\n    line-height: 32px;\n    font-size: 24px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "])), TypographyWeights.regular),
};
var title = {
    large: styledComponents.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    line-height: 28px;\n    font-size: 22px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "], ["\n    line-height: 28px;\n    font-size: 22px;\n    letter-spacing: 0px;\n    font-weight: ", ";\n  "])), TypographyWeights.regular),
    medium: styledComponents.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    line-height: 24px;\n    font-size: 26px;\n    letter-spacing: 0.15px;\n    font-weight: ", "; //500\n  "], ["\n    line-height: 24px;\n    font-size: 26px;\n    letter-spacing: 0.15px;\n    font-weight: ", "; //500\n  "])), TypographyWeights.medium),
    small: styledComponents.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    line-height: 20px;\n    font-size: 14px;\n    letter-spacing: 0.1px;\n    font-weight: ", ";\n  "], ["\n    line-height: 20px;\n    font-size: 14px;\n    letter-spacing: 0.1px;\n    font-weight: ", ";\n  "])), TypographyWeights.medium),
};
var label = {
    large: styledComponents.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    line-height: 20px;\n    font-size: 14px;\n    letter-spacing: 0.1px;\n    font-weight: ", ";\n  "], ["\n    line-height: 20px;\n    font-size: 14px;\n    letter-spacing: 0.1px;\n    font-weight: ", ";\n  "])), TypographyWeights.medium),
    medium: styledComponents.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    line-height: 16px;\n    font-size: 12px;\n    letter-spacing: 0.5px;\n    font-weight: ", ";\n  "], ["\n    line-height: 16px;\n    font-size: 12px;\n    letter-spacing: 0.5px;\n    font-weight: ", ";\n  "])), TypographyWeights.medium),
    small: styledComponents.css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    line-height: 6px;\n    font-size: 11px;\n    letter-spacing: 0.5px;\n    font-weight: ", ";\n  "], ["\n    line-height: 6px;\n    font-size: 11px;\n    letter-spacing: 0.5px;\n    font-weight: ", ";\n  "])), TypographyWeights.regular),
};
var body = {
    large: styledComponents.css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    line-height: 24px;\n    font-size: 16px;\n    letter-spacing: 0.15px;\n    font-weight: ", ";\n  "], ["\n    line-height: 24px;\n    font-size: 16px;\n    letter-spacing: 0.15px;\n    font-weight: ", ";\n  "])), TypographyWeights.medium),
    medium: styledComponents.css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    line-height: 20px;\n    font-size: 14px;\n    letter-spacing: 0.25px;\n    font-weight: ", ";\n  "], ["\n    line-height: 20px;\n    font-size: 14px;\n    letter-spacing: 0.25px;\n    font-weight: ", ";\n  "])), TypographyWeights.medium),
    small: styledComponents.css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    line-height: 16px;\n    font-size: 12px;\n    letter-spacing: 0.4px;\n    font-weight: ", ";\n  "], ["\n    line-height: 16px;\n    font-size: 12px;\n    letter-spacing: 0.4px;\n    font-weight: ", ";\n  "])), TypographyWeights.regular),
};
var TypoSystem = {
    typographyRoles: {
        display: display,
        heading: heading,
        title: title,
        label: label,
        body: body,
    },
    typographySizes: TypoSize,
    typographyWeigths: TypographyWeights,
};
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;

var ThemeContext = React.createContext(null);
var DesignSystemLight = {
    colors: themes.light,
    spacing: Spacing,
    typography: TypoSystem,
};
var DesignSystemDark = {
    colors: themes.dark,
    spacing: Spacing,
    typography: TypoSystem,
};
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(DesignSystemLight), currentDS = _b[0], setCurrentDS = _b[1];
    var toggleTheme = function () {
        setCurrentDS(function (prev) {
            return prev === DesignSystemLight ? DesignSystemDark : DesignSystemLight;
        });
    };
    var values = {
        toggleTheme: toggleTheme,
        currentDS: currentDS,
    };
    return (React__default["default"].createElement(ThemeContext.Provider, { value: values },
        React__default["default"].createElement(styledComponents.ThemeProvider, { theme: currentDS }, children)));
};

var GlobalStyle = styledComponents.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    *{\n        box-sizing: border-box;\n    }\n    \n    html{\n        padding: 0px;\n        margin: 0px;\n        font-family: 'Rubik', sans-serif;\n    }\n\n    body{\n        padding: 0px;\n        margin: 0px;\n        background-color: ", "\n    }\n"], ["\n    *{\n        box-sizing: border-box;\n    }\n    \n    html{\n        padding: 0px;\n        margin: 0px;\n        font-family: 'Rubik', sans-serif;\n    }\n\n    body{\n        padding: 0px;\n        margin: 0px;\n        background-color: ", "\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
});
var templateObject_1;

exports.GlobalStyle = GlobalStyle;
exports.ThemeContext = ThemeContext;
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=bundle.js.map
