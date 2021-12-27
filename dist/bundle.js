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
        onBackground: colorPalette.neutrals[20],
        outline: colorPalette.neutrals[60],
        inverseSurface: colorPalette.neutrals[30],
        inverseOnSurface: colorPalette.neutrals[99],
        inversePrimary: colorPalette.primary[80],
        surfaceTones: surfacePalette.ligthSurfaces,
        colorPalette: colorPalette,
    },
};

var ThemeContext = React.createContext(null);
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(themes.light), currentTheme = _b[0], setCurrentTheme = _b[1];
    var toggleTheme = function () {
        setCurrentTheme(function (prev) {
            return prev === themes.light ? themes.dark : themes.light;
        });
    };
    var values = {
        toggleTheme: toggleTheme,
        currentTheme: currentTheme,
    };
    return (React__default["default"].createElement(ThemeContext.Provider, { value: values },
        React__default["default"].createElement(styledComponents.ThemeProvider, { theme: currentTheme }, children)));
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

var GlobalStyle = styledComponents.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    *{\n        box-sizing: border-box;\n    }\n\n    html{\n        padding: 0px;\n        margin: 0px;\n    }\n\n    body{\n        padding: 0px;\n        margin: 0px;\n        background-color: whitesmoke ;\n    }\n"], ["\n    *{\n        box-sizing: border-box;\n    }\n\n    html{\n        padding: 0px;\n        margin: 0px;\n    }\n\n    body{\n        padding: 0px;\n        margin: 0px;\n        background-color: whitesmoke ;\n    }\n"])));
var templateObject_1;

exports.GlobalStyle = GlobalStyle;
exports.ThemeContext = ThemeContext;
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=bundle.js.map
