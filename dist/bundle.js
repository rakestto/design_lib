'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var _templateObject;
var StyledHelloWorld = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n  display: flex;\n  background-color: pink;\n  padding: 16px;\n"])));

var App = function App() {
  React.useEffect(function () {
    console.log("Hola");
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(StyledHelloWorld, null, "Hola mundo!");
};

exports.App = App;
//# sourceMappingURL=bundle.js.map
