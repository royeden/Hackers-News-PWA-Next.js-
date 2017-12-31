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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _styles = require('../static/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = {
      mode: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var mode = this.props.url.query.mode === "night";
      this.setState({ mode: mode });
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      var newMode = !this.state.mode;
      this.setState({ mode: newMode });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mode = this.state.mode;
      return _react2.default.createElement(_Layout2.default, {
        title: 'About',
        name: 'about',
        mode: this.state.mode,
        changeMode: function changeMode() {
          return _this2.changeMode();
        }
      }, _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]]) + ' ' + 'container'
      }, _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]]) + ' ' + 'status'
      }, _react2.default.createElement('span', {
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]]) + ' ' + 'text'
      }, "Welcome!")), _react2.default.createElement('h4', {
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]]) + ' ' + 'status about'
      }, _react2.default.createElement('span', {
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]])
      }, "My name is Roy and I'm a Front-End Programmer."), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]])
      }, "This is my version of ", _react2.default.createElement('a', {
        href: 'https://aerolab.co/blog/react-nextjs-pwa/',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]]) + ' ' + 'status'
      }, "Aerolab's Next PWA project.")), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]])
      }, "It took me around a week to finish this because I wanted to pay attention to many details."), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]])
      }, "The purpose of doing this was getting used to Next.js, <style jsx>, Components and passing state."), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['3994251845', [mode ? "#fff" : "#000", _styles2.default.transitions.standard]]])
      }, "Also I've begun thinking in a different approach lately to designing Web-Apps. "))), _react2.default.createElement(_style2.default, {
        styleId: '3994251845',
        css: ['.container.__jsx-style-dynamic-selector,.about.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.status.__jsx-style-dynamic-selector{color:' + (mode ? "#fff" : "#000") + ';-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';}', '.about.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{margin-bottom:5px;}'],
        dynamic: [mode ? "#fff" : "#000", _styles2.default.transitions.standard]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;