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
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.props.toggleMenu();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mode = this.props.mode;
      var active = this.props.active;
      var menu = this.props.menu;
      var time = mode ? "night" : "day";
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'nav-buttons'
      }, _react2.default.createElement('button', {
        onClick: function onClick() {
          return _this2.toggleMenu();
        },
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'menu'
      }, _react2.default.createElement('hr', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'menu-line'
      }), _react2.default.createElement('hr', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'menu-line'
      }), _react2.default.createElement('hr', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'menu-line'
      })), active === "home" ? _react2.default.createElement('button', {
        onClick: function onClick() {
          return _this2.handleClick();
        },
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + ('page ' + (active === "home" ? "active" : "link"))
      }, 'Latest News') : _react2.default.createElement(_link2.default, {
        as: '/' + time,
        href: {
          pathname: '/',
          query: {
            mode: time
          }
        } }, _react2.default.createElement('button', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + 'page link'
      }, 'Latest News')), _react2.default.createElement(_link2.default, {
        as: '/about/' + time,
        href: {
          pathname: '/about',
          query: {
            mode: time
          }
        } }, _react2.default.createElement('button', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + ('page ' + (active === "about" ? "active" : "link"))
      }, 'About')), _react2.default.createElement(_link2.default, {
        as: '/reference/' + time,
        href: {
          pathname: '/reference', query: {
            mode: mode ? "night" : "day"
          }
        } }, _react2.default.createElement('button', {
        className: _style2.default.dynamic([['1203046951', [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]]]) + ' ' + ('page ' + (active === "reference" ? "active" : "link"))
      }, 'References')), _react2.default.createElement(_style2.default, {
        styleId: '1203046951',
        css: ['.nav-buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100%;width:100%;background-color:' + (mode ? _styles2.default.colors.darker_night : "#fff") + ';}', '.page.__jsx-style-dynamic-selector{margin-left:15px;font-weight:600;border-radius:10px;padding:10px;width:100px;font-size:0.75rem;cursor:pointer;display:' + (menu ? "none" : "inline") + ';-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';}', '.link.__jsx-style-dynamic-selector{border:none;background-color:#fff;-webkit-transition:' + _styles2.default.transitions.fastest + ';transition:' + _styles2.default.transitions.fastest + ';color:' + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ';}', '.link.__jsx-style-dynamic-selector:hover,.active.__jsx-style-dynamic-selector{color:#fff;border:2px solid #fff;background-color:' + (mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker) + ';}', '.active.__jsx-style-dynamic-selector:focus,.link.__jsx-style-dynamic-selector:focus,.menu.__jsx-style-dynamic-selector:focus{outline:none;}', '.menu.__jsx-style-dynamic-selector{margin-top:-2px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:45px;width:45px;border:none;cursor:pointer;display:' + (menu ? "flex" : "none") + ';-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.darker_night : "#fff") + ';}', '.menu.__jsx-style-dynamic-selector:hover{margin-top:0px;-webkit-transition:' + _styles2.default.transitions.fastest + ';transition:' + _styles2.default.transitions.fastest + ';box-shadow:-3px 0px ' + (mode ? "#ccc" : "#ddd") + ';}', '.menu-line.__jsx-style-dynamic-selector{width:27px;height:3px;margin-top:3px;margin-bottom:3px;border-radius:7px;border:none;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (mode ? "#fff" : _styles2.default.colors.standard) + ';}', '@media screen and (max-Width:800px){.page.__jsx-style-dynamic-selector{padding:8px;width:90px;font-size:0.7rem;}.nav-buttons.__jsx-style-dynamic-selector{margin-top:1px;margin-bottom:1px;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.darker_night : "#fff") + ';}.menu.__jsx-style-dynamic-selector{margin-top:0px;}.menu.__jsx-style-dynamic-selector:hover{box-shadow:none;-webkit-transition:' + _styles2.default.transitions.fastest + ';transition:' + _styles2.default.transitions.fastest + ';}}', '@media screen and (max-Width:472px){.page.__jsx-style-dynamic-selector{padding:6px;width:80px;margin-left:5px;font-size:0.65rem;}}', '@media screen and (max-Width:450px){.nav-buttons.__jsx-style-dynamic-selector{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.page.__jsx-style-dynamic-selector{margin-top:2px;margin-bottom:2px;}}'],
        dynamic: [mode ? _styles2.default.colors.darker_night : "#fff", menu ? "none" : "inline", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.darker_night : _styles2.default.colors.darker, menu ? "flex" : "none", _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest, mode ? "#ccc" : "#ddd", _styles2.default.transitions.standard, mode ? "#fff" : _styles2.default.colors.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.darker_night : "#fff", _styles2.default.transitions.fastest]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;