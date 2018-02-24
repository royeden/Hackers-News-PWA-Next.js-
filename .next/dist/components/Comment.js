"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("../static/styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Comment.js";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "render",
    value: function render() {
      var info = this.props.info;
      var mode = this.props.mode;
      return _react2.default.createElement("div", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]) + " " + "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: info.content }, className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement("div", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]) + " " + "data",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement("span", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "Uploaded by: ", _react2.default.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://news.ycombinator.com/user?id=" + info.user,
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]) + " " + "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, info.user)), _react2.default.createElement("span", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Level: " + info.level), _react2.default.createElement("span", {
        className: _style2.default.dynamic([["2192246758", [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Posted " + info.time_ago + ".")), _react2.default.createElement(_style2.default, {
        styleId: "2192246758",
        css: ".comment.__jsx-style-dynamic-selector{margin-top:1px;margin-bottom:1px;font-weight:600;padding-left:10px;padding-top:6px;padding-bottom:6px;-webkit-transition:color " + _styles2.default.transitions.standard + ";transition:color " + _styles2.default.transitions.standard + ";background-color:" + _styles2.default.transitions.slowest + ";border:1px solid " + (mode ? "#eee" : "#ddd") + ";background-color:" + (mode ? "#000" : "#fff") + ";color:" + (mode ? "#fff" : "#000") + ";}.link.__jsx-style-dynamic-selector{-webkit-transition:color " + _styles2.default.transitions.standard + ";transition:color " + _styles2.default.transitions.standard + ";color:" + (mode ? "#fff" : "#000") + ";}.data.__jsx-style-dynamic-selector{margin-bottom:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.data.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{margin-right:1%;}@media screen and (max-Width:900px){.comment.__jsx-style-dynamic-selector{font-size:0.95rem;}.data.__jsx-style-dynamic-selector{display:block;}.data.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{display:block;}}@media screen and (max-Width:500px){.comment.__jsx-style-dynamic-selector{font-size:0.8rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29tbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qm9CLEFBRzRCLEFBYytCLEFBSzVCLEFBS0YsQUFLSSxBQUlKLEFBSUEsQUFNRyxjQVRuQixBQUlBLENBckNrQixDQXdCcEIsQ0FtQkUsQ0F4QmEsQUFVYixlQTVCZ0IsZ0JBQ0Usa0JBQ0YsZ0JBQ0csU0FnQnJCLFFBTnFDLEVBVFcsaUNBVWhELG1FQVQrQyw4Q0FDQyw4Q0FDQSw4Q0FDWCxtQ0FDckMiLCJmaWxlIjoiY29tcG9uZW50cy9Db21tZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLnByb3BzLmluZm9cbiAgICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5tb2RlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiID5cbiAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogaW5mby5jb250ZW50IH0gfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFcIj5cbiAgICAgICAgICA8c3Bhbj57XCJVcGxvYWRlZCBieTogXCJ9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL25ld3MueWNvbWJpbmF0b3IuY29tL3VzZXI/aWQ9JHtpbmZvLnVzZXJ9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyBpbmZvLnVzZXIgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtgTGV2ZWw6ICR7aW5mby5sZXZlbH1gIH1cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtgUG9zdGVkICR7aW5mby50aW1lX2Fnb30uYH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbW1lbnQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zbG93ZXN0IH07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyBtb2RlID8gXCIjZWVlXCIgOiBcIiNkZGRcIiB9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IFwiIzAwMFwiIDogXCIjZmZmXCIgfTtcbiAgICAgICAgICAgIGNvbG9yOiAkeyBtb2RlID8gXCIjZmZmXCIgOiBcIiMwMDBcIiB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9O1xuICAgICAgICAgICAgY29sb3I6ICR7IG1vZGUgPyBcIiNmZmZcIiA6IFwiIzAwMFwiIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRhdGEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGF0YSA+IHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LVdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgLmNvbW1lbnQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXRhIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXRhID4gc3BhbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtV2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICAuY29tbWVudCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Comment.js */",
        dynamic: [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? "#fff" : "#000"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29tbWVudC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJpbmZvIiwicHJvcHMiLCJtb2RlIiwidHJhbnNpdGlvbnMiLCJzdGFuZGFyZCIsInNsb3dlc3QiLCJfX2h0bWwiLCJjb250ZW50IiwidXNlciIsImxldmVsIiwidGltZV9hZ28iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR1IsQUFDUDtVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7NkJBQ0UsY0FBQTs0REE2QjJCLGlCQUFBLEFBQU8sWUE3QmxDLEFBNkI4QyxVQUNwQixpQkFBQSxBQUFPLFlBOUJqQyxBQThCNkMsU0FDbEIsT0FBQSxBQUFPLFNBL0JsQyxBQStCMkMsUUFDaEIsT0FBQSxBQUFPLFNBaENsQyxBQWdDMkMsUUFDM0IsT0FBQSxBQUFPLFNBakN2QixBQWlDZ0MsUUFJTCxpQkFBQSxBQUFPLFlBckNsQyxBQXFDOEMsVUFDOUIsT0FBQSxBQUFPLFNBdEN2QixBQXNDZ0MsbUJBdENoQyxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLDBDQUNRLHlCQUEwQixFQUFFLFFBQVEsS0FBMUMsQUFBZ0MsQUFBZSwrREE0QnRCLGlCQUFBLEFBQU8sWUE1QmhDLEFBNEI0QyxVQUNwQixpQkFBQSxBQUFPLFlBN0IvQixBQTZCMkMsU0FDbEIsT0FBQSxBQUFPLFNBOUJoQyxBQThCeUMsUUFDaEIsT0FBQSxBQUFPLFNBL0JoQyxBQStCeUMsUUFDM0IsT0FBQSxBQUFPLFNBaENyQixBQWdDOEIsUUFJTCxpQkFBQSxBQUFPLFlBcENoQyxBQW9DNEMsVUFDOUIsT0FBQSxBQUFPLFNBckNyQixBQXFDOEI7O29CQXJDOUI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs0REEyQnlCLGlCQUFBLEFBQU8sWUEzQmhDLEFBMkI0QyxVQUNwQixpQkFBQSxBQUFPLFlBNUIvQixBQTRCMkMsU0FDbEIsT0FBQSxBQUFPLFNBN0JoQyxBQTZCeUMsUUFDaEIsT0FBQSxBQUFPLFNBOUJoQyxBQThCeUMsUUFDM0IsT0FBQSxBQUFPLFNBL0JyQixBQStCOEIsUUFJTCxpQkFBQSxBQUFPLFlBbkNoQyxBQW1DNEMsVUFDOUIsT0FBQSxBQUFPLFNBcENyQixBQW9DOEIsbUJBcEM5QixBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzREQTBCdUIsaUJBQUEsQUFBTyxZQTFCOUIsQUEwQjBDLFVBQ3BCLGlCQUFBLEFBQU8sWUEzQjdCLEFBMkJ5QyxTQUNsQixPQUFBLEFBQU8sU0E1QjlCLEFBNEJ1QyxRQUNoQixPQUFBLEFBQU8sU0E3QjlCLEFBNkJ1QyxRQUMzQixPQUFBLEFBQU8sU0E5Qm5CLEFBOEI0QixRQUlMLGlCQUFBLEFBQU8sWUFsQzlCLEFBa0MwQyxVQUM5QixPQUFBLEFBQU8sU0FuQ25CLEFBbUM0Qjs7b0JBbkM1QjtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUFBLEFBQ0UsaUNBQUEsY0FBQTtnQkFBQSxBQUVTLEFBQ1A7YUFIRixBQUdNLEFBQ0o7d0RBQThDLEtBSmhELEFBSXFEOzREQXFCaEMsaUJBQUEsQUFBTyxZQXpCNUIsQUF5QndDLFVBQ3BCLGlCQUFBLEFBQU8sWUExQjNCLEFBMEJ1QyxTQUNsQixPQUFBLEFBQU8sU0EzQjVCLEFBMkJxQyxRQUNoQixPQUFBLEFBQU8sU0E1QjVCLEFBNEJxQyxRQUMzQixPQUFBLEFBQU8sU0E3QmpCLEFBNkIwQixRQUlMLGlCQUFBLEFBQU8sWUFqQzVCLEFBaUN3QyxVQUM5QixPQUFBLEFBQU8sU0FsQ2pCLEFBa0MwQixtQkFsQzFCLEFBQ1k7O29CQURaO3NCQUFBLEFBTUk7QUFOSjtBQUVFLGNBSk4sQUFDRSxBQUNFLEFBTVMsQUFHWCx3QkFBQSxjQUFBOzREQWdCdUIsaUJBQUEsQUFBTyxZQWhCOUIsQUFnQjBDLFVBQ3BCLGlCQUFBLEFBQU8sWUFqQjdCLEFBaUJ5QyxTQUNsQixPQUFBLEFBQU8sU0FsQjlCLEFBa0J1QyxRQUNoQixPQUFBLEFBQU8sU0FuQjlCLEFBbUJ1QyxRQUMzQixPQUFBLEFBQU8sU0FwQm5CLEFBb0I0QixRQUlMLGlCQUFBLEFBQU8sWUF4QjlCLEFBd0IwQyxVQUM5QixPQUFBLEFBQU8sU0F6Qm5CLEFBeUI0Qjs7b0JBekI1QjtzQkFBQTtBQUFBO0FBQUEscUJBQ2EsS0FaZixBQVdFLEFBQ2tCLEFBR2xCLHdCQUFBLGNBQUE7NERBWXVCLGlCQUFBLEFBQU8sWUFaOUIsQUFZMEMsVUFDcEIsaUJBQUEsQUFBTyxZQWI3QixBQWF5QyxTQUNsQixPQUFBLEFBQU8sU0FkOUIsQUFjdUMsUUFDaEIsT0FBQSxBQUFPLFNBZjlCLEFBZXVDLFFBQzNCLE9BQUEsQUFBTyxTQWhCbkIsQUFnQjRCLFFBSUwsaUJBQUEsQUFBTyxZQXBCOUIsQUFvQjBDLFVBQzlCLE9BQUEsQUFBTyxTQXJCbkIsQUFxQjRCOztvQkFyQjVCO3NCQUFBO0FBQUE7QUFBQSxxQkFDYSxLQURiLEFBQ2tCLFdBbEJ0QixBQUVFLEFBZUU7aUJBakJKO3VMQTZCMkIsaUJBQUEsQUFBTyxZQTdCbEMsQUE2QjhDLGtDQUFuQixpQkFBQSxBQUFPLFlBN0JsQyxBQTZCOEMsa0NBQ3BCLGlCQUFBLEFBQU8sWUE5QmpDLEFBOEI2QyxrQ0FDbEIsT0FBQSxBQUFPLFNBL0JsQyxBQStCMkMsa0NBQ2hCLE9BQUEsQUFBTyxTQWhDbEMsQUFnQzJDLHVCQUMzQixPQUFBLEFBQU8sU0FqQ3ZCLEFBaUNnQyw2RUFJTCxpQkFBQSxBQUFPLFlBckNsQyxBQXFDOEMsa0NBQW5CLGlCQUFBLEFBQU8sWUFyQ2xDLEFBcUM4Qyx3QkFDOUIsT0FBQSxBQUFPLFNBdEN2QixBQXNDZ0MsVUF0Q2hDO2tCQTZCMkIsaUJBQUEsQUFBTyxZQTdCbEMsQUE2QjhDLFVBQ3BCLGlCQUFBLEFBQU8sWUE5QmpDLEFBOEI2QyxTQUNsQixPQUFBLEFBQU8sU0EvQmxDLEFBK0IyQyxRQUNoQixPQUFBLEFBQU8sU0FoQ2xDLEFBZ0MyQyxRQUMzQixPQUFBLEFBQU8sU0FqQ3ZCLEFBaUNnQyxRQUlMLGlCQUFBLEFBQU8sWUFyQ2xDLEFBcUM4QyxVQUM5QixPQUFBLEFBQU8sU0F2Q3pCLEFBQ0UsQUFzQ2dDLEFBa0NuQztBQXhFRzs7Ozs7RUFMdUIsZ0JBQU0sQSIsImZpbGUiOiJDb21tZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==