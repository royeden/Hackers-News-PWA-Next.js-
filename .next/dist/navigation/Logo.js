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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mode = this.props.mode;
      var active = this.props.active;
      var time = mode ? "night" : "day";
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'container'
      }, active === "home" ? _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.handleClick();
        }, className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo'
      }, _react2.default.createElement('img', {
        src: '/static/' + (mode ? "logo_dark.jpeg" : "logo.jpeg"),
        alt: 'logo',
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo-img'
      }), _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'title'
      }, 'Hacker News')) : _react2.default.createElement(_link2.default, {
        as: '/' + time,
        href: {
          pathname: '/',
          query: {
            mode: time
          }
        } }, _react2.default.createElement('div', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo'
      }, _react2.default.createElement('img', {
        src: '/static/' + (mode ? "logo_dark.jpeg" : "logo.jpeg"),
        alt: 'logo',
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo-img'
      }), _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'title'
      }, 'Hacker News'))), _react2.default.createElement(_style2.default, {
        styleId: '2933924457',
        css: ['.container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.standard_night : "#fff") + ';}', '.title.__jsx-style-dynamic-selector{margin-left:5px;}', '.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:210px;color:' + (mode ? "#fff" : "#000") + ';}', '.logo-img.__jsx-style-dynamic-selector{height:45px;width:45px;}', '.logo-img.__jsx-style-dynamic-selector:hover{box-shadow:2px 1px ' + (mode ? "#ccc" : "#ddd") + ';}', '@media screen and (max-Width:780px){.logo-img.__jsx-style-dynamic-selector:hover{box-shadow:none;}}'],
        dynamic: [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;