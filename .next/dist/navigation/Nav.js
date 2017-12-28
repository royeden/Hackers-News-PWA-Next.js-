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

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Switch = require('./Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _NavButtons = require('./NavButtons');

var _NavButtons2 = _interopRequireDefault(_NavButtons);

var _styles = require('../static/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Nav.js';


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

      var active = this.props.active;
      var mode = this.props.mode;
      return _react2.default.createElement('nav', {
        className: _style2.default.dynamic([['732083918', [mode ? "#ccc" : "#ddd", _styles2.default.transitions.slow]]]) + ' ' + 'navbar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_Logo2.default, {
        handleClick: active === "home" ? function () {
          return _this2.handleClick();
        } : "",
        mode: mode,
        active: active,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(_Switch2.default, {
        changeMode: function changeMode() {
          return _this2.changeMode();
        },
        mode: mode,
        menu: this.props.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_NavButtons2.default, {
        mode: mode,
        active: active,
        handleClick: active === "home" ? function () {
          return _this2.handleClick();
        } : "",
        toggleMenu: function toggleMenu() {
          return _this2.toggleMenu();
        },
        menu: this.props.menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '732083918',
        css: '.navbar.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:48px;border-bottom:3px solid ' + (mode ? "#ccc" : "#ddd") + ';-webkit-transition:' + _styles2.default.transitions.slow + ';transition:' + _styles2.default.transitions.slow + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFHMEIsMEVBQ00sNkZBQ1AsWUFDeUMscURBQ2Isd0ZBQzFDIiwiZmlsZSI6Im5hdmlnYXRpb24vTmF2LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4vU3dpdGNoJ1xuaW1wb3J0IEJ1dHRvbnMgZnJvbSAnLi9OYXZCdXR0b25zJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdGF0aWMvc3R5bGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlQ2xpY2soKVxuICB9XG5cbiAgY2hhbmdlTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vZGUoKVxuICB9XG5cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZU1lbnUoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMucHJvcHMuYWN0aXZlXG4gICAgY29uc3QgbW9kZSA9IHRoaXMucHJvcHMubW9kZVxuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8TG9nb1xuICAgICAgICAgIGhhbmRsZUNsaWNrPXsgYWN0aXZlID09PSBcImhvbWVcIiA/ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSA6IFwiXCIgfVxuICAgICAgICAgIG1vZGU9eyBtb2RlIH1cbiAgICAgICAgICBhY3RpdmU9eyBhY3RpdmUgfVxuICAgICAgICAvPlxuICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgY2hhbmdlTW9kZT17ICgpID0+IHRoaXMuY2hhbmdlTW9kZSgpIH1cbiAgICAgICAgICBtb2RlPXsgbW9kZSB9XG4gICAgICAgICAgbWVudT17IHRoaXMucHJvcHMubWVudSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25zXG4gICAgICAgICAgbW9kZT17IG1vZGUgfVxuICAgICAgICAgIGFjdGl2ZT17IGFjdGl2ZSB9XG4gICAgICAgICAgaGFuZGxlQ2xpY2s9eyBhY3RpdmUgPT09IFwiaG9tZVwiID8gKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpIDogXCJcIiB9XG4gICAgICAgICAgdG9nZ2xlTWVudT17ICgpID0+IHRoaXMudG9nZ2xlTWVudSgpIH1cbiAgICAgICAgICBtZW51PXsgdGhpcy5wcm9wcy5tZW51IH1cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHsgbW9kZSA/IFwiI2NjY1wiIDogXCIjZGRkXCIgfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zbG93IH07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=navigation/Nav.js */',
        dynamic: [mode ? "#ccc" : "#ddd", _styles2.default.transitions.slow]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTmF2LmpzIl0sIm5hbWVzIjpbIkxvZ28iLCJTd2l0Y2giLCJCdXR0b25zIiwic3R5bGVzIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImNoYW5nZU1vZGUiLCJ0b2dnbGVNZW51IiwiYWN0aXZlIiwibW9kZSIsInRyYW5zaXRpb25zIiwic2xvdyIsIm1lbnUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR0gsQUFDWjtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7aUNBRVksQUFDWDtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7aUNBRVksQUFDWDtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7NkJBRVE7bUJBQ1A7O1VBQU0sU0FBUyxLQUFBLEFBQUssTUFBcEIsQUFBMEIsQUFDMUI7VUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFsQixBQUF3QixBQUN4Qjs2QkFDRSxjQUFBOzJEQXVCa0MsT0FBQSxBQUFPLFNBdkJ6QyxBQXVCa0QsUUFDN0IsaUJBQUEsQUFBTyxZQXhCNUIsQUF3QndDLGlCQXhCeEMsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDO2dDQUNlLEFBQVcsU0FBUyxZQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBQS9CLFNBQUEsR0FEaEIsQUFDK0QsQUFDN0Q7Y0FGRixBQUVTLEFBQ1A7Z0JBSEYsQUFHVzs7b0JBSFg7c0JBREYsQUFDRSxBQUtBO0FBTEE7QUFDRSwwQkFJRixBQUFDO29CQUNjLHNCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBRDFCLEFBRUU7Y0FGRixBQUVTLEFBQ1A7Y0FBTyxLQUFBLEFBQUssTUFIZCxBQUdvQjs7b0JBSHBCO3NCQU5GLEFBTUUsQUFLQTtBQUxBO0FBQ0UsMEJBSUYsQUFBQztjQUFELEFBQ1MsQUFDUDtnQkFGRixBQUVXLEFBQ1Q7Z0NBQWMsQUFBVyxTQUFTLFlBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFBL0IsU0FBQSxHQUhoQixBQUcrRCxBQUM3RDtvQkFBYSxzQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUoxQixBQUtFO2NBQU8sS0FBQSxBQUFLLE1BTGQsQUFLb0I7O29CQUxwQjtzQkFYRixBQVdFO0FBQUE7QUFDRTtpQkFaSjttUUF1QmtDLE9BQUEsQUFBTyxTQXZCekMsQUF1QmtELG1DQUM3QixpQkFBQSxBQUFPLFlBeEI1QixBQXdCd0Msd0JBQW5CLGlCQUFBLEFBQU8sWUF4QjVCLEFBd0J3QyxPQXhCeEM7a0JBdUJrQyxPQUFBLEFBQU8sU0F2QnpDLEFBdUJrRCxRQUM3QixpQkFBQSxBQUFPLFlBekI5QixBQUNFLEFBd0J3QyxBQUszQztBQTdCRzs7Ozs7RUFqQnVCLGdCQUFNLEEiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==