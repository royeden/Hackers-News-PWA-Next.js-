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

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Footer.js';


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
        className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]) + ' ' + 'footer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('span', {
        className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]) + ' ' + 'slogan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, 'Would you like to follow me?'), _react2.default.createElement(_link2.default, { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('img', { src: '/static/contact.svg', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }))), _react2.default.createElement(_link2.default, { href: 'https://github.com/RoyEde', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('img', { src: '/static/github.svg', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }))), _react2.default.createElement(_link2.default, { href: 'https://twitter.com/RoyEde', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('img', { src: '/static/twitter.svg', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }))), _react2.default.createElement(_link2.default, { href: 'https://www.facebook.com/RoyEdenProgram/', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('a', { target: '_blank', rel: 'noopener noreferrer', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('img', { src: '/static/facebook.svg', className: _style2.default.dynamic([['1246979785', [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: '1246979785',
        css: '.footer.__jsx-style-dynamic-selector{padding-top:16px;padding-bottom:16px;padding-right:2.5%;padding-left:2.5%;width:100%;border-top:2px solid #ddd;height:54px;position:fixed;bottom:0;-webkit-transition:color ' + _styles2.default.transitions.standard + ',background-color ' + _styles2.default.transitions.standard + ';transition:color ' + _styles2.default.transitions.standard + ',background-color ' + _styles2.default.transitions.standard + ';background-color:' + (mode ? _styles2.default.colors.standard_night : "#fff") + ';}.footer.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{float:right;margin-left:10px;height:20px;width:20px;}.footer.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector:hover{margin-top:1px;}.footer.__jsx-style-dynamic-selector>.slogan.__jsx-style-dynamic-selector{font-weight:600;color:' + (mode ? "#fff" : _styles2.default.colors.standard) + ';}@media screen and (max-Width:355px){.footer.__jsx-style-dynamic-selector{font-size:0.85rem;}.footer.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{margin-left:5px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHOEIsQUFjTCxBQU9HLEFBSUMsQUFNSSxBQUlGLFlBcEJELEdBT25CLENBSXFDLEFBVW5DLENBbkNvQixDQStCcEIsV0FoQlksUUFkTyxJQWVSLFVBVWIsQ0FUQSxJQWZvQixrQkFDUCxXQUNlLDBCQUNkLFlBQ0csZUFDTixTQUNvRixnTUFDL0MsOENBQ2hEIiwiZmlsZSI6ImNvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLm1vZGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xvZ2FuXCI+V291bGQgeW91IGxpa2UgdG8gZm9sbG93IG1lPzwvc3Bhbj5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGltZyBzcmM9XCIvc3RhdGljL2NvbnRhY3Quc3ZnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Sb3lFZGVcIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGltZyBzcmM9XCIvc3RhdGljL2dpdGh1Yi5zdmdcIiAvPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Sb3lFZGVcIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGltZyBzcmM9XCIvc3RhdGljL3R3aXR0ZXIuc3ZnXCIgLz48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9Sb3lFZGVuUHJvZ3JhbS9cIj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PGltZyBzcmM9XCIvc3RhdGljL2ZhY2Vib29rLnN2Z1wiIC8+PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjUlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjUlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9LCBiYWNrZ3JvdW5kLWNvbG9yICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmRfbmlnaHQgOiBcIiNmZmZcIiB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb290ZXIgPiBhID4gaW1nIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvb3RlciA+IGEgPiBpbWc6aG92ZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb290ZXIgPiAuc2xvZ2FuIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogJHsgbW9kZSA/IFwiI2ZmZlwiIDogc3R5bGVzLmNvbG9ycy5zdGFuZGFyZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtV2lkdGg6IDM1NXB4KSB7XG4gICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9vdGVyID4gYSA+IGltZyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Footer.js */',
        dynamic: [_styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : "#fff", mode ? "#fff" : _styles2.default.colors.standard]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJtb2RlIiwicHJvcHMiLCJ0cmFuc2l0aW9ucyIsInN0YW5kYXJkIiwiY29sb3JzIiwic3RhbmRhcmRfbmlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdSLEFBQ1A7VUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFsQixBQUF3QixBQUN4Qjs2QkFDRSxjQUFBOzREQXlCMkIsaUJBQUEsQUFBTyxZQXpCbEMsQUF5QjhDLFVBQWdDLGlCQUFBLEFBQU8sWUF6QnJGLEFBeUJpRyxVQUN0RSxPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkExQmhELEFBMEJpRSxRQWdCakQsT0FBQSxBQUFPLFNBQVMsaUJBQUEsQUFBTyxPQTFDdkMsQUEwQzhDLHFCQTFDOUMsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzREQXdCeUIsaUJBQUEsQUFBTyxZQXhCaEMsQUF3QjRDLFVBQWdDLGlCQUFBLEFBQU8sWUF4Qm5GLEFBd0IrRixVQUN0RSxPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkF6QjlDLEFBeUIrRCxRQWdCakQsT0FBQSxBQUFPLFNBQVMsaUJBQUEsQUFBTyxPQXpDckMsQUF5QzRDLHFCQXpDNUMsQUFBZ0I7O29CQUFoQjtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsaURBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsT0FBRyxRQUFILEFBQVUsVUFBUyxLQUFuQixBQUF1QiwyRUFzQkEsaUJBQUEsQUFBTyxZQXRCOUIsQUFzQjBDLFVBQWdDLGlCQUFBLEFBQU8sWUF0QmpGLEFBc0I2RixVQUN0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MkIsaUJBQUEsQUFBTyxZQXpCbEMsQUF5QjhDLGtDQUFnQyxpQkFBQSxBQUFPLFlBekJyRixBQXlCaUcsa0NBQXRFLGlCQUFBLEFBQU8sWUF6QmxDLEFBeUI4QyxrQ0FBZ0MsaUJBQUEsQUFBTyxZQXpCckYsQUF5QmlHLG1DQUN0RSxPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkExQmhELEFBMEJpRSx1WUFnQmpELE9BQUEsQUFBTyxTQUFTLGlCQUFBLEFBQU8sT0ExQ3ZDLEFBMEM4QyxZQTFDOUM7a0JBeUIyQixpQkFBQSxBQUFPLFlBekJsQyxBQXlCOEMsVUFBZ0MsaUJBQUEsQUFBTyxZQXpCckYsQUF5QmlHLFVBQ3RFLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQTFCaEQsQUEwQmlFLFFBZ0JqRCxPQUFBLEFBQU8sU0FBUyxpQkFBQSxBQUFPLE9BM0N6QyxBQUNFLEFBMEM4QyxBQWdCakQ7QUExREc7Ozs7O0VBSnVCLGdCQUFNLEEiLCJmaWxlIjoiRm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==