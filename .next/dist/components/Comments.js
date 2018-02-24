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

var _Story = require('./Story');

var _Story2 = _interopRequireDefault(_Story);

var _Comment = require('./Comment');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Comments.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var info = this.props.info;
      var mode = this.props.mode;
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_Story2.default, {
        filter: [1, 0, 0, 0],
        info: info,
        mode: mode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), info.comments_count ? info.comments.map(function (comment) {
        return _react2.default.createElement(_Comment2.default, {
          info: comment,
          mode: mode,
          key: comment.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        });
      }) : "");
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29tbWVudHMuanMiXSwibmFtZXMiOlsiU3RvcnkiLCJDb21tZW50IiwiaW5mbyIsInByb3BzIiwibW9kZSIsImNvbW1lbnRzX2NvdW50IiwiY29tbWVudHMiLCJtYXAiLCJjb21tZW50IiwiaWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1QsQUFDUDtVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDO2dCQUNVLENBQUEsQUFBQyxHQUFELEFBQUcsR0FBSCxBQUFLLEdBRGhCLEFBQ1csQUFBTyxBQUNoQjtjQUZGLEFBRVMsQUFDUDtjQUhGLEFBR1M7O29CQUhUO3NCQURGLEFBQ0UsQUFLRTtBQUxGO0FBQ0UsZUFJQSxBQUFLLHNCQUNMLEFBQUssU0FBTCxBQUFjLElBQUssbUJBQUE7K0JBQ2pCLEFBQUM7Z0JBQUQsQUFDUyxBQUNQO2dCQUZGLEFBRVMsQUFDUDtlQUFNLFFBSFIsQUFHZ0I7O3NCQUhoQjt3QkFEaUIsQUFDakI7QUFBQTtBQUNFLFNBREY7QUFGRixBQUNBLE9BQUEsSUFSTixBQUNFLEFBYVMsQUFJWjs7Ozs7RUF0QjBCLGdCQUFNLEEiLCJmaWxlIjoiQ29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcm95LWVkZW4vUHJvZ3JhbW1pbmcvUHJvamVjdHMvTWluZS9uZXh0LXB3YSJ9