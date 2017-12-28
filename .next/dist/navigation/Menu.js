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

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Menu.js';


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
        className: _style2.default.dynamic([['427530306', [_styles2.default.transitions.fast, this.props.on ? "1" : "0", menu ? "none" : "flex", mode ? "#ccc" : "#ddd", this.props.on ? "flex" : "none"]]]) + ' ' + 'menu',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_Switch2.default, {
        menu: menu,
        mode: mode,
        changeMode: function changeMode() {
          return _this2.changeMode();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(_NavButtons2.default, {
        menu: menu,
        mode: mode,
        handleClick: function handleClick() {
          return _this2.handleClick();
        },
        active: this.props.active,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '427530306',
        css: '.menu.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition:' + _styles2.default.transitions.fast + ';transition:' + _styles2.default.transitions.fast + ';opacity:' + (this.props.on ? "1" : "0") + ';display:' + (menu ? "none" : "flex") + ';border-bottom:2px solid ' + (mode ? "#ccc" : "#ddd") + ';}@media screen and (max-Width:400px){.menu.__jsx-style-dynamic-selector{opacity:1;display:' + (this.props.on ? "flex" : "none") + ';}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qm9CLEFBR2dDLEFBV1AsVUFDMkIscUNBQ3ZDLDhDQVp1QixtR0FDViwwRUFDMkIsd0ZBQ0gscUNBQ0EscUNBQ2dCLHFEQUN2RCIsImZpbGUiOiJuYXZpZ2F0aW9uL01lbnUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcm95LWVkZW4vUHJvZ3JhbW1pbmcvUHJvamVjdHMvTWluZS9uZXh0LXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCdXR0b25zIGZyb20gJy4vTmF2QnV0dG9ucydcbmltcG9ydCBTd2l0Y2ggZnJvbSAnLi9Td2l0Y2gnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDbGljaygpXG4gIH1cblxuICBjaGFuZ2VNb2RlKCkge1xuICAgIHRoaXMucHJvcHMuY2hhbmdlTW9kZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbWVudSA9IHRoaXMucHJvcHMubWVudVxuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLm1vZGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICBtZW51PXsgbWVudSB9XG4gICAgICAgICAgbW9kZT17IG1vZGUgfVxuICAgICAgICAgIGNoYW5nZU1vZGU9eyAoKSA9PiB0aGlzLmNoYW5nZU1vZGUoKSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxOYXZCdXR0b25zXG4gICAgICAgICAgbWVudT17IG1lbnUgfVxuICAgICAgICAgIG1vZGU9eyBtb2RlIH1cbiAgICAgICAgICBoYW5kbGVDbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSB9XG4gICAgICAgICAgYWN0aXZlPXsgdGhpcy5wcm9wcy5hY3RpdmUgfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5mYXN0IH07XG4gICAgICAgICAgICBvcGFjaXR5OiAkeyB0aGlzLnByb3BzLm9uID8gXCIxXCIgOiBcIjBcIiB9O1xuICAgICAgICAgICAgZGlzcGxheTogJHsgbWVudSA/IFwibm9uZVwiIDogXCJmbGV4XCIgfTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyBtb2RlID8gXCIjY2NjXCIgOiBcIiNkZGRcIiB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtV2lkdGg6IDQwMHB4KSB7XG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICR7IHRoaXMucHJvcHMub24gPyBcImZsZXhcIiA6IFwibm9uZVwiIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=navigation/Menu.js */',
        dynamic: [_styles2.default.transitions.fast, this.props.on ? "1" : "0", menu ? "none" : "flex", mode ? "#ccc" : "#ddd", this.props.on ? "flex" : "none"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTWVudS5qcyJdLCJuYW1lcyI6WyJOYXZCdXR0b25zIiwiU3dpdGNoIiwic3R5bGVzIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImNoYW5nZU1vZGUiLCJtZW51IiwibW9kZSIsInRyYW5zaXRpb25zIiwiZmFzdCIsIm9uIiwiYWN0aXZlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdILEFBQ1o7V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7O2lDQUVZLEFBQ1g7V0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNaOzs7OzZCQUVRO21CQUNQOztVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7NkJBQ0UsY0FBQTsyREFpQnFCLGlCQUFBLEFBQU8sWUFqQjVCLEFBaUJ3QyxNQUN0QixLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFsQmxDLEFBa0J3QyxLQUN0QixPQUFBLEFBQU8sU0FuQnpCLEFBbUJrQyxRQUNBLE9BQUEsQUFBTyxTQXBCekMsQUFvQmtELFFBTTlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQTFCcEMsQUEwQjZDLG1CQTFCN0MsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDO2NBQUQsQUFDUyxBQUNQO2NBRkYsQUFFUyxBQUNQO29CQUFhLHNCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBSDFCOztvQkFBQTtzQkFERixBQUNFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLEFBQUM7Y0FBRCxBQUNTLEFBQ1A7Y0FGRixBQUVTLEFBQ1A7cUJBQWMsdUJBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFIM0IsQUFJRTtnQkFBUyxLQUFBLEFBQUssTUFKaEIsQUFJc0I7O29CQUp0QjtzQkFORixBQU1FO0FBQUE7QUFDRTtpQkFQSjtrVkFpQnFCLGlCQUFBLEFBQU8sWUFqQjVCLEFBaUJ3Qyx3QkFBbkIsaUJBQUEsQUFBTyxZQWpCNUIsQUFpQndDLHNCQUN0QixLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFsQmxDLEFBa0J3QyxzQkFDdEIsT0FBQSxBQUFPLFNBbkJ6QixBQW1Ca0MseUNBQ0EsT0FBQSxBQUFPLFNBcEJ6QyxBQW9Ca0QsMkdBTTlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQTFCcEMsQUEwQjZDLFVBMUI3QztrQkFpQnFCLGlCQUFBLEFBQU8sWUFqQjVCLEFBaUJ3QyxNQUN0QixLQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFsQmxDLEFBa0J3QyxLQUN0QixPQUFBLEFBQU8sU0FuQnpCLEFBbUJrQyxRQUNBLE9BQUEsQUFBTyxTQXBCekMsQUFvQmtELFFBTTlCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixTQTNCdEMsQUFDRSxBQTBCNkMsQUFNaEQ7QUFoQ0c7Ozs7O0VBYnVCLGdCQUFNLEEiLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yb3ktZWRlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9NaW5lL25leHQtcHdhIn0=