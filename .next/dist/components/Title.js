"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("../static/styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Title.js";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      var mode = this.props.mode;
      return _react2.default.createElement("div", {
        className: _style2.default.dynamic([["4013905777", [mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000"]]]) + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement("h1", {
        className: _style2.default.dynamic([["4013905777", [mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000"]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, this.props.title), _react2.default.createElement(_style2.default, {
        styleId: "4013905777",
        css: ".title.__jsx-style-dynamic-selector{border-bottom:2px solid " + (mode ? "#ccc" : "#ddd") + ";-webkit-transition:" + _styles2.default.transitions.standard + ";transition:" + _styles2.default.transitions.standard + ";background-color:" + (mode ? _styles2.default.colors.standard_night : "#fff") + ";color:" + (mode ? "#fff" : "#000") + ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUW9CLEFBR2tFLHFEQUNiLHdGQUNNLDhDQUVqRCxtQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL1RpdGxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLm1vZGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICA8aDE+eyB0aGlzLnByb3BzLnRpdGxlIH08L2gxPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyBtb2RlID8gXCIjY2NjXCIgOiBcIiNkZGRcIiB9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBtb2RlID8gc3R5bGVzLmNvbG9ycy5zdGFuZGFyZF9uaWdodCA6IFwiI2ZmZlwiIH07XG4gICAgICAgICAgICBjb2xvcjogJHsgbW9kZSA/IFwiI2ZmZlwiIDogXCIjMDAwXCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Title.js */",
        dynamic: [mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGl0bGUuanMiXSwibmFtZXMiOlsic3R5bGVzIiwibW9kZSIsInByb3BzIiwidHJhbnNpdGlvbnMiLCJzdGFuZGFyZCIsImNvbG9ycyIsInN0YW5kYXJkX25pZ2h0IiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1IsQUFDUDtVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCOzZCQUNFLGNBQUE7NERBSWtDLE9BQUEsQUFBTyxTQUp6QyxBQUlrRCxRQUM3QixpQkFBQSxBQUFPLFlBTDVCLEFBS3dDLFVBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsaUJBTmhELEFBTWlFLFFBQ2pELE9BQUEsQUFBTyxTQVB2QixBQU9nQyxtQkFQaEMsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzREQUdnQyxPQUFBLEFBQU8sU0FIdkMsQUFHZ0QsUUFDN0IsaUJBQUEsQUFBTyxZQUoxQixBQUlzQyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQUw5QyxBQUsrRCxRQUNqRCxPQUFBLEFBQU8sU0FOckIsQUFNOEI7O29CQU45QjtzQkFBQSxBQUFNO0FBQU47QUFBQSxjQUFNLEFBQUssTUFEYixBQUNFLEFBQWlCO2lCQURuQjsrRUFJa0MsT0FBQSxBQUFPLFNBSnpDLEFBSWtELG1DQUM3QixpQkFBQSxBQUFPLFlBTDVCLEFBS3dDLDRCQUFuQixpQkFBQSxBQUFPLFlBTDVCLEFBS3dDLG1DQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQU5oRCxBQU1pRSx1QkFDakQsT0FBQSxBQUFPLFNBUHZCLEFBT2dDLFVBUGhDO2tCQUlrQyxPQUFBLEFBQU8sU0FKekMsQUFJa0QsUUFDN0IsaUJBQUEsQUFBTyxZQUw1QixBQUt3QyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQU5oRCxBQU1pRSxRQUNqRCxPQUFBLEFBQU8sU0FSekIsQUFDRSxBQU9nQyxBQUtuQztBQVpHOzs7OztFQUp1QixnQkFBTSxBIiwiZmlsZSI6IlRpdGxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==