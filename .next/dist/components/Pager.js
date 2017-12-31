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

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: "handleClick",
    value: function handleClick(n) {
      this.props.onClick(n);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var page = this.props.page;
      var mode = this.props.mode;
      return _react2.default.createElement("div", {
        className: _style2.default.dynamic([["4015369446", [_styles2.default.transitions.standard, this.props.low ? "56px" : "2px", mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.standard, _styles2.default.transitions.fast, mode ? "#fff" : "#000", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard]]])
      }, _react2.default.createElement("div", {
        className: _style2.default.dynamic([["4015369446", [_styles2.default.transitions.standard, this.props.low ? "56px" : "2px", mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.standard, _styles2.default.transitions.fast, mode ? "#fff" : "#000", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard]]]) + " " + "navigation"
      }, page > 1 ? _react2.default.createElement("button", { onClick: function onClick() {
          return _this2.handleClick(page - 1);
        }, className: _style2.default.dynamic([["4015369446", [_styles2.default.transitions.standard, this.props.low ? "56px" : "2px", mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.standard, _styles2.default.transitions.fast, mode ? "#fff" : "#000", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard]]]) + " " + "page prev"
      }, "Previous") : _react2.default.createElement("button", {
        className: _style2.default.dynamic([["4015369446", [_styles2.default.transitions.standard, this.props.low ? "56px" : "2px", mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.standard, _styles2.default.transitions.fast, mode ? "#fff" : "#000", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard]]]) + " " + "page inactive"
      }, "Previous"), _react2.default.createElement("p", {
        className: _style2.default.dynamic([["4015369446", [_styles2.default.transitions.standard, this.props.low ? "56px" : "2px", mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.standard, _styles2.default.transitions.fast, mode ? "#fff" : "#000", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard]]]) + " " + "current"
      }, _react2.default.createElement("b", {
        className: _style2.default.dynamic([["4015369446", [_styles2.default.transitions.standard, this.props.low ? "56px" : "2px", mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.standard, _styles2.default.transitions.fast, mode ? "#fff" : "#000", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard]]])
      }, this.props.page)), _react2.default.createElement("button", { onClick: function onClick() {
          return _this2.handleClick(page + 1);
        }, className: _style2.default.dynamic([["4015369446", [_styles2.default.transitions.standard, this.props.low ? "56px" : "2px", mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.standard, _styles2.default.transitions.fast, mode ? "#fff" : "#000", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard]]]) + " " + "page next"
      }, "Next")), _react2.default.createElement(_style2.default, {
        styleId: "4015369446",
        css: [".navigation.__jsx-style-dynamic-selector{margin-top:2px;text-align:center;width:100%;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:background-color " + _styles2.default.transitions.standard + ";transition:background-color " + _styles2.default.transitions.standard + ";margin-bottom:" + (this.props.low ? "56px" : "2px") + ";background-color:" + (mode ? _styles2.default.colors.standard_night : "#fff") + ";}", ".current.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.1rem;height:30px;width:50px;border-top:1px solid " + (mode ? "#fff" : "#000") + ";border-bottom:1px solid " + (mode ? "#fff" : "#000") + ";background-color:#fff;-webkit-transition:border " + _styles2.default.transitions.standard + ";transition:border " + _styles2.default.transitions.standard + ";color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}", ".page.__jsx-style-dynamic-selector{width:70px;border:none;padding:auto;font-weight:600;height:30px;font-size:0.7rem;color:#eee;-webkit-transition:background " + _styles2.default.transitions.standard + ", color " + _styles2.default.transitions.fast + ";transition:background " + _styles2.default.transitions.standard + ", color " + _styles2.default.transitions.fast + ";border:1px solid " + (mode ? "#fff" : "#000") + ";}", ".page.__jsx-style-dynamic-selector:focus{outline:none;}", ".next.__jsx-style-dynamic-selector,.prev.__jsx-style-dynamic-selector{background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}", ".next.__jsx-style-dynamic-selector:hover,.prev.__jsx-style-dynamic-selector:hover{color:#fff;cursor:pointer;-webkit-transition:" + _styles2.default.transitions.fastest + ";transition:" + _styles2.default.transitions.fastest + ";background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}", ".page.inactive.__jsx-style-dynamic-selector{background-color:#eee;color:#000;}"],
        dynamic: [_styles2.default.transitions.standard, this.props.low ? "56px" : "2px", mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.standard, _styles2.default.transitions.fast, mode ? "#fff" : "#000", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;