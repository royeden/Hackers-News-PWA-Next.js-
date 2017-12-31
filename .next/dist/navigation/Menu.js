'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavButtons = require('./NavButtons');

var _NavButtons2 = _interopRequireDefault(_NavButtons);

var _Switch = require('./Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _styles = require('../static/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.handleClick();
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var menu = this.props.menu;
      var mode = this.props.mode;
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['427530306', [_styles2.default.transitions.fast, this.props.on ? "1" : "0", menu ? "none" : "flex", mode ? "#ccc" : "#ddd", this.props.on ? "flex" : "none"]]]) + ' ' + 'menu'
      }, _react2.default.createElement(_Switch2.default, {
        menu: menu,
        mode: mode,
        changeMode: function changeMode() {
          return _this2.changeMode();
        }
      }), _react2.default.createElement(_NavButtons2.default, {
        menu: menu,
        mode: mode,
        handleClick: function handleClick() {
          return _this2.handleClick();
        },
        active: this.props.active
      }), _react2.default.createElement(_style2.default, {
        styleId: '427530306',
        css: ['.menu.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition:' + _styles2.default.transitions.fast + ';transition:' + _styles2.default.transitions.fast + ';opacity:' + (this.props.on ? "1" : "0") + ';display:' + (menu ? "none" : "flex") + ';border-bottom:2px solid ' + (mode ? "#ccc" : "#ddd") + ';}', '@media screen and (max-Width:400px){.menu.__jsx-style-dynamic-selector{opacity:1;display:' + (this.props.on ? "flex" : "none") + ';}}'],
        dynamic: [_styles2.default.transitions.fast, this.props.on ? "1" : "0", menu ? "none" : "flex", mode ? "#ccc" : "#ddd", this.props.on ? "flex" : "none"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;