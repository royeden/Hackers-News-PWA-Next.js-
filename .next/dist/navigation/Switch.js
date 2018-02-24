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

var _jsxFileName = "/home/roy-eden/Programming/Projects/Mine/next-pwa/navigation/Switch.js";


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: "changeMode",
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var mode = this.props.mode;
      return _react2.default.createElement("div", {
        className: _style2.default.dynamic([["2007399571", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement("p", {
        className: _style2.default.dynamic([["2007399571", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Mode: ", _react2.default.createElement("span", {
        className: _style2.default.dynamic([["2007399571", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "mode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, mode ? "night" : "day", "-time.")), _react2.default.createElement("button", {
        onClick: function onClick() {
          return _this2.changeMode();
        }, className: _style2.default.dynamic([["2007399571", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "changer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: "2007399571",
        css: ".switch.__jsx-style-dynamic-selector{position:absolute;left:180px;padding-left:6px;margin-left:40px;font-weight:600;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:5px;display:" + (this.props.menu ? "none" : "flex") + ";-webkit-transition:border " + _styles2.default.transitions.slowest + ";transition:border " + _styles2.default.transitions.slowest + ";border:2px solid " + (mode ? "#fff" : "#000") + ";}.mode.__jsx-style-dynamic-selector{padding-left:2px;padding-right:2px;color:#fff;height:100%;-webkit-transition:" + _styles2.default.transitions.standard + ";transition:" + _styles2.default.transitions.standard + ";background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}.changer.__jsx-style-dynamic-selector{font-weight:600;height:12px;width:12px;border-radius:100%;border:none;margin-right:4px;-webkit-transition:background " + _styles2.default.transitions.fast + ";transition:background " + _styles2.default.transitions.fast + ";margin-left:" + (mode ? "5px" : "19px") + ";background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}.changer.__jsx-style-dynamic-selector:hover{cursor:pointer;background-color:" + (mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night) + ";}.changer.__jsx-style-dynamic-selector:focus{outline:none;}@media screen and (max-Width:780px){.switch.__jsx-style-dynamic-selector{font-size:0.8rem;left:-36px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vU3dpdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFHK0IsQUFjRCxBQVNELEFBWUQsQUFLRixBQUtNLGFBSnJCLEVBSkQsQ0FiZSxDQVRNLEFBK0JMLENBN0NGLFVBd0JBLEFBc0JYLENBN0NpQixNQWNOLElBVVEsT0F2QkYsQUFjTCxZQUVaLEFBUVksR0FVZCxFQWpDa0IsT0F3QkMsU0F2QkUsUUF3QmdDLDJEQVZMLDBCQWJ4QixvQkFjeEIsRUFib0IsR0F1QnVCLGVBdEJKLDBCQXVCUyxXQXRCQyxtQ0F1QmpELG1FQXRCZ0QsOENBQ2hEIiwiZmlsZSI6Im5hdmlnYXRpb24vU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY2hhbmdlTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vZGUoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLm1vZGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgPHA+TW9kZTogPHNwYW4gY2xhc3NOYW1lPVwibW9kZVwiPnsgbW9kZSA/IFwibmlnaHRcIiA6IFwiZGF5XCIgfS10aW1lLjwvc3Bhbj48L3A+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmNoYW5nZU1vZGUoKSB9PlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnN3aXRjaCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAxODBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiAkeyB0aGlzLnByb3BzLm1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiIH07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgJHsgc3R5bGVzLnRyYW5zaXRpb25zLnNsb3dlc3QgfTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7IG1vZGUgPyBcIiNmZmZcIiA6IFwiIzAwMFwiIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vZGUge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBtb2RlID8gc3R5bGVzLmNvbG9ycy5zdGFuZGFyZF9uaWdodCA6IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmQgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2hhbmdlciB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kICR7IHN0eWxlcy50cmFuc2l0aW9ucy5mYXN0IH07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogJHsgbW9kZSA/IFwiNXB4XCIgOiBcIjE5cHhcIiB9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmRfbmlnaHQgOiBzdHlsZXMuY29sb3JzLnN0YW5kYXJkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNoYW5nZXI6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/XG4gICAgICAgICAgICBzdHlsZXMuY29sb3JzLnN0YW5kYXJkIDogc3R5bGVzLmNvbG9ycy5zdGFuZGFyZF9uaWdodCB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNoYW5nZXI6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LVdpZHRoOiA3ODBweCkge1xuICAgICAgICAgICAgLnN3aXRjaCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICBsZWZ0OiAtMzZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=navigation/Switch.js */",
        dynamic: [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vU3dpdGNoLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInByb3BzIiwiY2hhbmdlTW9kZSIsIm1vZGUiLCJtZW51IiwidHJhbnNpdGlvbnMiLCJzbG93ZXN0Iiwic3RhbmRhcmQiLCJjb2xvcnMiLCJzdGFuZGFyZF9uaWdodCIsImZhc3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBR0osQUFDWDtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7NkJBRVE7bUJBQ1A7O1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7NkJBQ0UsY0FBQTs0REFrQmtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQWxCcEMsQUFrQjZDLFFBQ2pCLGlCQUFBLEFBQU8sWUFuQm5DLEFBbUIrQyxTQUNwQixPQUFBLEFBQU8sU0FwQmxDLEFBb0IyQyxRQVF0QixpQkFBQSxBQUFPLFlBNUI1QixBQTRCd0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQTdCeEUsQUE2QitFLFVBVS9DLGlCQUFBLEFBQU8sWUF2Q3ZDLEFBdUNtRCxNQUM3QixPQUFBLEFBQU8sUUF4QzdCLEFBd0NxQyxRQUNWLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQUFpQixpQkFBQSxBQUFPLE9BekN4RSxBQXlDK0UsVUFLcEQsT0FDckIsaUJBQUEsQUFBTyxPQURjLEFBQ1AsV0FBVyxpQkFBQSxBQUFPLE9BL0N0QyxBQStDNkMsMkJBL0M3QyxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7NERBaUJnQixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsU0FqQmxDLEFBaUIyQyxRQUNqQixpQkFBQSxBQUFPLFlBbEJq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V0FBVyxpQkFBQSxBQUFPLE9BL0N0QyxBQStDNkMsa0JBL0M3QztrQkFrQmtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQWxCcEMsQUFrQjZDLFFBQ2pCLGlCQUFBLEFBQU8sWUFuQm5DLEFBbUIrQyxTQUNwQixPQUFBLEFBQU8sU0FwQmxDLEFBb0IyQyxRQVF0QixpQkFBQSxBQUFPLFlBNUI1QixBQTRCd0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQTdCeEUsQUE2QitFLFVBVS9DLGlCQUFBLEFBQU8sWUF2Q3ZDLEFBdUNtRCxNQUM3QixPQUFBLEFBQU8sUUF4QzdCLEFBd0NxQyxRQUNWLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQUFpQixpQkFBQSxBQUFPLE9BekN4RSxBQXlDK0UsVUFLcEQsT0FDckIsaUJBQUEsQUFBTyxPQURjLEFBQ1AsV0FBVyxpQkFBQSxBQUFPLE9BaER4QyxBQUNFLEFBK0M2QyxBQWdCaEQ7QUEvREc7Ozs7O0VBUnVCLGdCQUFNLEEiLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==