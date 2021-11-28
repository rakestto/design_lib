import React, { useEffect } from 'react';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import styled from 'styled-components';

var _templateObject;
var StyledHelloWorld = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: pink;\n  padding: 16px;\n"])));

var App = function App() {
  useEffect(function () {
    console.log("Hola");
  }, []);
  return /*#__PURE__*/React.createElement(StyledHelloWorld, null, "Hola mundo!");
};

export { App };
//# sourceMappingURL=bundle.es.js.map
