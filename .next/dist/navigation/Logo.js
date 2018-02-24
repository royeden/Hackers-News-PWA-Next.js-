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

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Logo.js';


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
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, active === "home" ? _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.handleClick();
        }, className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('img', {
        src: '/static/' + (mode ? "logo_dark.jpeg" : "logo.jpeg"),
        alt: 'logo',
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo-img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Hacker News')) : _react2.default.createElement(_link2.default, {
        as: '/' + time,
        href: {
          pathname: '/',
          query: {
            mode: time
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('div', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('img', {
        src: '/static/' + (mode ? "logo_dark.jpeg" : "logo.jpeg"),
        alt: 'logo',
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'logo-img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['2933924457', [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]]]) + ' ' + 'title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Hacker News'))), _react2.default.createElement(_style2.default, {
        styleId: '2933924457',
        css: '.container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.standard_night : "#fff") + ';}.title.__jsx-style-dynamic-selector{margin-left:5px;}.logo.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;width:210px;color:' + (mode ? "#fff" : "#000") + ';}.logo-img.__jsx-style-dynamic-selector{height:45px;width:45px;}.logo-img.__jsx-style-dynamic-selector:hover{box-shadow:2px 1px ' + (mode ? "#ccc" : "#ddd") + ';}@media screen and (max-Width:780px){.logo-img.__jsx-style-dynamic-selector:hover{box-shadow:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBR3dCLEFBUUssQUFJSCxBQVFELEFBS29DLEFBSzlCLFdBN0JMLENBb0JGLElBWmIsQUFzQkUsT0FURix5QkFJQSwwQkFicUIsV0FYQSxrRkFZSixXQVh5QixJQVk1QixZQUN1QixtQ0FDckMscUNBYmdELDhDQUNoRCIsImZpbGUiOiJuYXZpZ2F0aW9uL0xvZ28uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcm95LWVkZW4vUHJvZ3JhbW1pbmcvUHJvamVjdHMvTWluZS9uZXh0LXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3RhdGljL3N0eWxlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZUNsaWNrKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5tb2RlXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5wcm9wcy5hY3RpdmVcbiAgICBjb25zdCB0aW1lID0gbW9kZSA/IFwibmlnaHRcIiA6IFwiZGF5XCJcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgeyBhY3RpdmUgPT09IFwiaG9tZVwiID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCkgfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nby1pbWdcIlxuICAgICAgICAgICAgICBzcmM9eyBgL3N0YXRpYy8ke21vZGUgPyBcImxvZ29fZGFyay5qcGVnXCIgOiBcImxvZ28uanBlZ1wifWAgfVxuICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5IYWNrZXIgTmV3czwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGFzPXsgYC8ke3RpbWV9YCB9XG4gICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnLycsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIG1vZGU6IHRpbWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvLWltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXsgYC9zdGF0aWMvJHttb2RlID8gXCJsb2dvX2RhcmsuanBlZ1wiIDogXCJsb2dvLmpwZWdcIn1gIH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+SGFja2VyIE5ld3M8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmRfbmlnaHQgOiBcIiNmZmZcIiB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICR7IG1vZGUgPyBcIiNmZmZcIiA6IFwiIzAwMFwiIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28taW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvLWltZzpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMXB4ICR7IG1vZGUgPyBcIiNjY2NcIiA6IFwiI2RkZFwiIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1XaWR0aDogNzgwcHgpIHtcbiAgICAgICAgICAgIC5sb2dvLWltZzpob3ZlciB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=navigation/Logo.js */',
        dynamic: [_styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : "#000", mode ? "#ccc" : "#ddd"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vTG9nby5qcyJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIm1vZGUiLCJhY3RpdmUiLCJ0aW1lIiwidHJhbnNpdGlvbnMiLCJzdGFuZGFyZCIsImNvbG9ycyIsInN0YW5kYXJkX25pZ2h0IiwicGF0aG5hbWUiLCJxdWVyeSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR0gsQUFDWjtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7NkJBRVE7bUJBQ1A7O1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7VUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFwQixBQUEwQixBQUMxQjtVQUFNLE9BQU8sT0FBQSxBQUFPLFVBQXBCLEFBQThCLEFBQzlCOzZCQUNFLGNBQUE7NERBb0NxQixpQkFBQSxBQUFPLFlBcEM1QixBQW9Dd0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFyQ2hELEFBcUNpRSxRQVlqRCxPQUFBLEFBQU8sU0FqRHZCLEFBaURnQyxRQVNILE9BQUEsQUFBTyxTQTFEcEMsQUEwRDZDLG1CQTFEN0MsQUFBZTs7b0JBQWY7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxhQUNJLEFBQVcseUJBQ1gsY0FBQSxTQUFzQixTQUFVLG1CQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBQTNDLCtEQWtDaUIsaUJBQUEsQUFBTyxZQWxDeEIsQUFrQ29DLFVBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsaUJBbkM1QyxBQW1DNkQsUUFZakQsT0FBQSxBQUFPLFNBL0NuQixBQStDNEIsUUFTSCxPQUFBLEFBQU8sU0F4RGhDLEFBd0R5QyxtQkF4RHpDLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBOzJCQUdxQixPQUFBLEFBQU8sbUJBRjFCLEFBRUUsQUFBMkMsQUFDM0M7YUFIRixBQUdNOzREQThCUyxpQkFBQSxBQUFPLFlBakN0QixBQWlDa0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFsQzFDLEFBa0MyRCxRQVlqRCxPQUFBLEFBQU8sU0E5Q2pCLEFBOEMwQixRQVNILE9BQUEsQUFBTyxTQXZEOUIsQUF1RHVDLG1CQXZEdkMsQUFDWTs7b0JBRFo7c0JBREYsQUFDRSxBQUtBO0FBTEE7QUFFRSwwQkFHRixjQUFBOzREQTRCZSxpQkFBQSxBQUFPLFlBNUJ0QixBQTRCa0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkE3QjFDLEFBNkIyRCxRQVlqRCxPQUFBLEFBQU8sU0F6Q2pCLEFBeUMwQixRQVNILE9BQUEsQUFBTyxTQWxEOUIsQUFrRHVDLG1CQWxEdkMsQUFBYzs7b0JBQWQ7c0JBQUE7QUFBQTtBQUFBLFNBUEYsQUFDQSxBQU1FLGtDQUdGLEFBQUM7a0JBQUQsQUFDVyxBQUNUOztvQkFDRSxBQUNZLEFBQ1Y7O2tCQUxOLEFBR0ksQUFFUyxBQUNDO0FBREQsQUFDTDtBQUhKLEFBQ0U7b0JBSk47c0JBQUEsQUFVRTtBQVZGO0FBQ0UsT0FERixrQkFVRSxjQUFBOzREQWVlLGlCQUFBLEFBQU8sWUFmdEIsQUFla0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFoQjFDLEFBZ0IyRCxRQVlqRCxPQUFBLEFBQU8sU0E1QmpCLEFBNEIwQixRQVNILE9BQUEsQUFBTyxTQXJDOUIsQUFxQ3VDLG1CQXJDdkMsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUE7MkJBR3FCLE9BQUEsQUFBTyxtQkFGMUIsQUFFRSxBQUEyQyxBQUMzQzthQUhGLEFBR007NERBV08saUJBQUEsQUFBTyxZQWRwQixBQWNnQyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQWZ4QyxBQWV5RCxRQVlqRCxPQUFBLEFBQU8sU0EzQmYsQUEyQndCLFFBU0gsT0FBQSxBQUFPLFNBcEM1QixBQW9DcUMsbUJBcENyQyxBQUNZOztvQkFEWjtzQkFERixBQUNFLEFBS0E7QUFMQTtBQUVFLDBCQUdGLGNBQUE7NERBU2EsaUJBQUEsQUFBTyxZQVRwQixBQVNnQyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQVZ4QyxBQVV5RCxRQVlqRCxPQUFBLEFBQU8sU0F0QmYsQUFzQndCLFFBU0gsT0FBQSxBQUFPLFNBL0I1QixBQStCcUMsbUJBL0JyQyxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0EzQlIsQUFXSSxBQVVFLEFBTUU7aUJBM0JSOytQQW9DcUIsaUJBQUEsQUFBTyxZQXBDNUIsQUFvQ3dDLDRCQUFuQixpQkFBQSxBQUFPLFlBcEM1QixBQW9Dd0MsbUNBQ2IsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsaUJBckNoRCxBQXFDaUUsa1RBWWpELE9BQUEsQUFBTyxTQWpEdkIsQUFpRGdDLGlKQVNILE9BQUEsQUFBTyxTQTFEcEMsQUEwRDZDLFVBMUQ3QztrQkFvQ3FCLGlCQUFBLEFBQU8sWUFwQzVCLEFBb0N3QyxVQUNiLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQXJDaEQsQUFxQ2lFLFFBWWpELE9BQUEsQUFBTyxTQWpEdkIsQUFpRGdDLFFBU0gsT0FBQSxBQUFPLFNBM0R0QyxBQUNFLEFBMEQ2QyxBQVloRDtBQXRFRzs7Ozs7RUFWdUIsZ0JBQU0sQSIsImZpbGUiOiJMb2dvLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==