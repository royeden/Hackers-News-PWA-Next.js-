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
    key: 'render',
    value: function render() {
      var mode = this.props.mode;
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]) + ' ' + 'footer'
      }, _react2.default.createElement('span', {
        className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]) + ' ' + 'slogan'
      }, 'Would you like to follow me?'), _react2.default.createElement(_link2.default, { href: '#' }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]])
      }, _react2.default.createElement('img', { src: '/static/contact.svg', className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]])
      }))), _react2.default.createElement(_link2.default, { href: 'https://github.com/RoyEde' }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]])
      }, _react2.default.createElement('img', { src: '/static/github.svg', className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]])
      }))), _react2.default.createElement(_link2.default, { href: 'https://twitter.com/RoyEde' }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]])
      }, _react2.default.createElement('img', { src: '/static/twitter.svg', className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]])
      }))), _react2.default.createElement(_link2.default, { href: 'https://www.facebook.com/RoyEdenProgram/' }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]])
      }, _react2.default.createElement('img', { src: '/static/facebook.svg', className: _style2.default.dynamic([['3649105861', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]])
      }))), _react2.default.createElement(_style2.default, {
        styleId: '3649105861',
        css: ['.footer.__jsx-style-dynamic-selector{padding-top:16px;padding-bottom:16px;padding-right:2.5%;padding-left:2.5%;width:100%;border-top:2px solid #ddd;height:54px;position:fixed;bottom:0;-webkit-transition:color ' + _styles2.default.transitions.standard + ',background-color ' + _styles2.default.transitions.standard + ';transition:color ' + _styles2.default.transitions.standard + ',background-color ' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.standard_night : "#fff") + ';}', '.footer.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{float:right;margin-left:10px;height:20px;width:20px;}', '.footer.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector:hover{margin-top:1px;}', '.footer.__jsx-style-dynamic-selector>.slogan.__jsx-style-dynamic-selector{font-weight:600;color:' + (mode ? "#fff" : _styles2.default.colors.standard) + ';}', '@media screen and (max-Width:368px){.footer.__jsx-style-dynamic-selector{font-size:0.85rem;}.footer.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{margin-left:3px;}}'],
        dynamic: [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;