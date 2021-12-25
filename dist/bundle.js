'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');
var styledComponents = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var DStheme = {
  ligth: {
    primary: "white"
  },
  dark: {
    primary: "black"
  }
};

var DSThemeContext = /*#__PURE__*/React.createContext();

var DSThemeProvider = function DSThemeProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(DStheme.ligth),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      theme = _useState2[0],
      setCurrentTheme = _useState2[1];

  var toggleTheme = function toggleTheme() {
    setCurrentTheme(function (prev) {
      return prev === DStheme.ligth ? DStheme.dark : DStheme.ligth;
    });
  };

  var values = {
    toggleTheme: toggleTheme,
    theme: theme
  };
  return /*#__PURE__*/React__default["default"].createElement(DSThemeContext.Provider, {
    value: values
  }, /*#__PURE__*/React__default["default"].createElement(styledComponents.ThemeProvider, {
    theme: theme
  }, children));
};

var GlobalStyle = styledComponents.createGlobalStyle(["*{box-sizing:border-box;}body{padding:0px;background-color:pink;}"]);

exports.DSThemeContext = DSThemeContext;
exports.DSThemeProvider = DSThemeProvider;
exports.GlobalStyle = GlobalStyle;
//# sourceMappingURL=bundle.js.map
