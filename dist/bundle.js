'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var StyledHelloWorld = styled__default["default"].div.withConfig({
  displayName: "Appstyles__StyledHelloWorld",
  componentId: "sc-1apyuja-0"
})(["display:flex;background-color:pink;padding:16px;"]);

var App = function App() {
  return /*#__PURE__*/React__default["default"].createElement(StyledHelloWorld, null, "Hola mundo!");
};

var GlobalStyle = styled.createGlobalStyle(["*{box-sizing:border-box;}body{padding:0px;background-color:pink;}"]);

exports.App = App;
exports.GlobalStyle = GlobalStyle;
//# sourceMappingURL=bundle.js.map
