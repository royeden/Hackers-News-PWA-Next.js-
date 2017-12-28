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

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Header.js';


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

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.title), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('link', {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/static/favicon.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react2.default.createElement(_Nav2.default, {
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
        menu: this.props.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXYiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiY2hhbmdlTW9kZSIsInRvZ2dsZU1lbnUiLCJ0aXRsZSIsIm5hbWUiLCJtb2RlIiwibWVudSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHQSxBQUNaO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7OztpQ0FFWSxBQUNYO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7OztpQ0FFWSxBQUNYO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7Ozs2QkFFTzttQkFDTjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFTO0FBQVQ7QUFBQSxjQUFTLEFBQUssTUFEaEIsQUFDRSxBQUFvQixBQUNwQixnREFBTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBRkYsQUFFRSxBQUNBO0FBREE7O2FBQ0EsQUFDTSxBQUNKO2NBRkYsQUFFTyxBQUNMO2NBSEYsQUFHTzs7b0JBSFA7c0JBSEYsQUFHRSxBQUtBO0FBTEE7QUFDRSxrREFJSSxNQUFOLEFBQVcsc0RBQXFELEtBQWhFLEFBQW9FO29CQUFwRTtzQkFUSixBQUNFLEFBUUUsQUFFRjtBQUZFOzJCQUVGLEFBQUM7Z0JBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ3BCO3FCQUFjLHVCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBRjNCLEFBR0U7b0JBQWEsc0JBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFIMUIsQUFJRTtvQkFBYSxzQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUoxQixBQUtFO2NBQU8sS0FBQSxBQUFLLE1BTGQsQUFLb0IsQUFDbEI7Y0FBTyxLQUFBLEFBQUssTUFOZCxBQU1vQjs7b0JBTnBCO3NCQVpKLEFBQ0UsQUFXRSxBQVVMO0FBVks7QUFDRTs7Ozs7RUEzQm1CLGdCQUFNLEEiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==