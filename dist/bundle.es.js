import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { createContext, useState } from 'react';
import { ThemeProvider as ThemeProvider$1, createGlobalStyle } from 'styled-components';

var theme = {
  ligth: {
    primary: "white"
  },
  dark: {
    primary: "black"
  }
};

var ThemeContext = /*#__PURE__*/createContext();

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(theme.ligth),
      _useState2 = _slicedToArray(_useState, 2),
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
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: values
  }, /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: currentTheme
  }, children));
};

var GlobalStyle = createGlobalStyle(["*{box-sizing:border-box;}body{padding:0px;background-color:pink;}"]);

export { GlobalStyle, ThemeContext, ThemeProvider };
//# sourceMappingURL=bundle.es.js.map
