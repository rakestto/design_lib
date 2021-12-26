'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');
var styledComponents = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var theme = {
  ligth: {
    primary: "white"
  },
  dark: {
    primary: "black"
  }
};

var ThemeContext = /*#__PURE__*/React.createContext();

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;

  var _useState = React.useState(theme.ligth),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      currentTheme = _useState2[0],
      setCurrentTheme = _useState2[1];

  var toggleTheme = function toggleTheme() {
    setCurrentTheme(function (prev) {
      return prev === theme.ligth ? theme.dark : theme.ligth;
    });
  };

  var values = {
    toggleTheme: toggleTheme,
    currentTheme: currentTheme
  };
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.Provider, {
    value: values
  }, /*#__PURE__*/React__default["default"].createElement(styledComponents.ThemeProvider, {
    theme: currentTheme
  }, children));
};

var GlobalStyle = styledComponents.createGlobalStyle(["*{box-sizing:border-box;}body{padding:0px;background-color:pink;}"]);

exports.GlobalStyle = GlobalStyle;
exports.ThemeContext = ThemeContext;
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=bundle.js.map
