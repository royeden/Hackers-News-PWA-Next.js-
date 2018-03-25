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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Nav = require('../navigation/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

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
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.props.toggleMenu();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, this.props.title), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }), _react2.default.createElement('link', {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/static/favicon.png'
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet' })), _react2.default.createElement(_Nav2.default, {
        active: this.props.name,
        handleClick: function handleClick() {
          return _this2.handleClick();
        },
        changeMode: function changeMode() {
          return _this2.changeMode();
        },
        toggleMenu: function toggleMenu() {
          return _this2.toggleMenu();
        },
        mode: this.props.mode,
        menu: this.props.menu
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;