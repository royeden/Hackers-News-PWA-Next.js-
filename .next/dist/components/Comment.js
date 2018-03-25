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

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      var info = this.props.info;
      var mode = this.props.mode;
      return _react2.default.createElement("div", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]) + " " + "comment"
      }, _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: info.content }, className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]])
      }), _react2.default.createElement("div", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]) + " " + "data"
      }, _react2.default.createElement("span", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]])
      }, "Uploaded by: ", _react2.default.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://news.ycombinator.com/user?id=" + info.user,
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]) + " " + "link"
      }, info.user)), _react2.default.createElement("span", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]])
      }, "Level: " + info.level), _react2.default.createElement("span", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]])
      }, "Posted " + info.time_ago + ".")), _react2.default.createElement(_style2.default, {
        styleId: "2192246758",
        css: [".comment.__jsx-style-dynamic-selector{margin-top:1px;margin-bottom:1px;font-weight:600;padding-left:10px;padding-top:6px;padding-bottom:6px;-webkit-transition:color " + _styles2.default.transitions.standard + ";transition:color " + _styles2.default.transitions.standard + ";background-color:" + _styles2.default.transitions.slowest + ";border:1px solid " + (mode ? "#eee" : "#ddd") + ";background-color:" + (mode ? "#000" : "#fff") + ";color:" + (mode ? "#fff" : "#000") + ";}", ".link.__jsx-style-dynamic-selector{-webkit-transition:color " + _styles2.default.transitions.standard + ";transition:color " + _styles2.default.transitions.standard + ";color:" + (mode ? "#fff" : "#000") + ";}", ".data.__jsx-style-dynamic-selector{margin-bottom:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".data.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{margin-right:1%;}", "@media screen and (max-Width:900px){.comment.__jsx-style-dynamic-selector{font-size:0.95rem;}.data.__jsx-style-dynamic-selector{display:block;}.data.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{display:block;}}", "@media screen and (max-Width:500px){.comment.__jsx-style-dynamic-selector{font-size:0.8rem;}}"],
        dynamic: [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;