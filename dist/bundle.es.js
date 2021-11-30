import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

var StyledHelloWorld = styled.div.withConfig({
  displayName: "Appstyles__StyledHelloWorld",
  componentId: "sc-1apyuja-0"
})(["display:flex;background-color:pink;padding:16px;"]);

var App = function App() {
  return /*#__PURE__*/React.createElement(StyledHelloWorld, null, "Hola mundo!");
};

var GlobalStyle = createGlobalStyle(["*{box-sizing:border-box;}body{padding:0px;background-color:pink;}"]);

export { App, GlobalStyle };
//# sourceMappingURL=bundle.es.js.map
