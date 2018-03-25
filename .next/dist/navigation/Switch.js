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
    key: "changeMode",
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mode = this.props.mode;
      return _react2.default.createElement("div", {
        className: _style2.default.dynamic([["2007399571", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "switch"
      }, _react2.default.createElement("p", {
        className: _style2.default.dynamic([["2007399571", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]])
      }, "Mode: ", _react2.default.createElement("span", {
        className: _style2.default.dynamic([["2007399571", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "mode"
      }, mode ? "night" : "day", "-time.")), _react2.default.createElement("button", {
        onClick: function onClick() {
          return _this2.changeMode();
        }, className: _style2.default.dynamic([["2007399571", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "changer"
      }), _react2.default.createElement(_style2.default, {
        styleId: "2007399571",
        css: [".switch.__jsx-style-dynamic-selector{position:absolute;left:180px;padding-left:6px;margin-left:40px;font-weight:600;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:5px;display:" + (this.props.menu ? "none" : "flex") + ";-webkit-transition:border " + _styles2.default.transitions.slowest + ";transition:border " + _styles2.default.transitions.slowest + ";border:2px solid " + (mode ? "#fff" : "#000") + ";}", ".mode.__jsx-style-dynamic-selector{padding-left:2px;padding-right:2px;color:#fff;height:100%;-webkit-transition:" + _styles2.default.transitions.standard + ";transition:" + _styles2.default.transitions.standard + ";background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}", ".changer.__jsx-style-dynamic-selector{font-weight:600;height:12px;width:12px;border-radius:100%;border:none;margin-right:4px;-webkit-transition:background " + _styles2.default.transitions.fast + ";transition:background " + _styles2.default.transitions.fast + ";margin-left:" + (mode ? "5px" : "19px") + ";background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}", ".changer.__jsx-style-dynamic-selector:hover{cursor:pointer;background-color:" + (mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night) + ";}", ".changer.__jsx-style-dynamic-selector:focus{outline:none;}", "@media screen and (max-Width:780px){.switch.__jsx-style-dynamic-selector{font-size:0.8rem;left:-36px;}}"],
        dynamic: [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;