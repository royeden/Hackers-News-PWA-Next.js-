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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Menu = require('../navigation/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _styles = require('../static/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = {
      needMenu: false,
      menu: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("resize", function () {
        return _this2.needMenu();
      });
      this.setState({ needMenu: window.outerWidth <= 800 });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var status = !this.state.menu;
      this.setState({ menu: status });
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick();
    }
  }, {
    key: 'needMenu',
    value: function needMenu() {
      var need = window.outerWidth <= 800;
      this.state.menu && !need ? this.toggleMenu() : "";
      this.setState({ needMenu: need });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var menu = this.state.needMenu;
      var mode = this.props.mode;
      var name = this.props.name;
      var title = this.props.title;
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['2304402342', [_styles2.default.transitions.standard, this.props.mode ? _styles2.default.colors.darker_night : "#fff"]]])
      }, _react2.default.createElement(_Header2.default, {
        title: title,
        name: name,
        mode: mode,
        handleClick: function handleClick() {
          return _this3.handleClick();
        },
        changeMode: function changeMode() {
          return _this3.changeMode();
        },
        toggleMenu: function toggleMenu() {
          return _this3.toggleMenu();
        },
        menu: menu
      }), _react2.default.createElement(_Menu2.default, {
        active: name,
        on: this.state.menu,
        menu: !menu,
        mode: mode,
        handleClick: function handleClick() {
          return _this3.handleClick();
        },
        changeMode: function changeMode() {
          return _this3.changeMode();
        }
      }), _react2.default.createElement(_Title2.default, {
        mode: mode,
        title: title
      }), this.props.children, _react2.default.createElement(_Footer2.default, { mode: this.props.mode }), _react2.default.createElement(_style2.default, {
        styleId: '2304402342',
        css: ['*{padding:0;margin:0;box-sizing:border-box;font-family:\'Montserrat\',sans-serif;}', 'body{-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (this.props.mode ? _styles2.default.colors.darker_night : "#fff") + ';}'],
        dynamic: [_styles2.default.transitions.standard, this.props.mode ? _styles2.default.colors.darker_night : "#fff"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;