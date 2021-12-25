import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { createContext, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

var DStheme = {
  ligth: {
    primary: "white"
  },
  dark: {
    primary: "black"
  }
};

var DSThemeContext = /*#__PURE__*/createContext();

var DSThemeProvider = function DSThemeProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(DStheme.ligth),
      _useState2 = _slicedToArray(_useState, 2),
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
  return /*#__PURE__*/React.createElement(DSThemeContext.Provider, {
    value: values
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, children));
};

var GlobalStyle = createGlobalStyle(["*{box-sizing:border-box;}body{padding:0px;background-color:pink;}"]);

export { DSThemeContext, DSThemeProvider, GlobalStyle };
//# sourceMappingURL=bundle.es.js.map
