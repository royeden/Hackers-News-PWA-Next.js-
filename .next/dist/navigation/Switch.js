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
        className: _style2.default.dynamic([["672842883", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement("p", {
        className: _style2.default.dynamic([["672842883", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Mode: ", _react2.default.createElement("span", {
        className: _style2.default.dynamic([["672842883", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "mode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, mode ? "night" : "day", "-time.")), _react2.default.createElement("button", {
        onClick: function onClick() {
          return _this2.changeMode();
        }, className: _style2.default.dynamic([["672842883", [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]]]) + " " + "changer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: "672842883",
        css: ".switch.__jsx-style-dynamic-selector{position:absolute;left:180px;padding-left:6px;margin-left:40px;font-weight:600;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:5px;display:" + (this.props.menu ? "none" : "flex") + ";-webkit-transition:border " + _styles2.default.transitions.slowest + ";transition:border " + _styles2.default.transitions.slowest + ";border:2px solid " + (mode ? "#fff" : "#000") + ";}.mode.__jsx-style-dynamic-selector{padding-left:2px;padding-right:2px;padding-bottom:1px;color:#fff;height:100%;-webkit-transition:" + _styles2.default.transitions.standard + ";transition:" + _styles2.default.transitions.standard + ";background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}.changer.__jsx-style-dynamic-selector{font-weight:600;height:12px;width:12px;border-radius:100%;border:none;margin-right:4px;-webkit-transition:background " + _styles2.default.transitions.fast + ";transition:background " + _styles2.default.transitions.fast + ";margin-left:" + (mode ? "5px" : "19px") + ";background-color:" + (mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard) + ";}.changer.__jsx-style-dynamic-selector:hover{cursor:pointer;background-color:" + (mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night) + ";}.changer.__jsx-style-dynamic-selector:focus{outline:none;}@media screen and (max-Width:780px){.switch.__jsx-style-dynamic-selector{font-size:0.8rem;left:-36px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vU3dpdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFHK0IsQUFjRCxBQVVELEFBWUQsQUFLRixBQUtNLGFBSnJCLEVBSkQsQ0FiZSxDQVZNLEFBZ0NMLENBOUNGLFVBeUJBLEFBc0JYLENBOUNpQixNQWNFLElBV0EsT0F4QkYsUUFjTixJQVdDLEdBVWQsRUFsQ2tCLEVBY0osS0FXSyxPQVRqQixFQWZtQixRQXlCZ0MsOEVBVkwsT0FkeEIsc0JBQ0osR0F3QnVCLGNBVjNDLENBYnVDLDBCQXdCUyxXQXZCQyxtQ0F3QmpELG1FQXZCZ0QsOENBQ2hEIiwiZmlsZSI6Im5hdmlnYXRpb24vU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0YXRpYy9zdHlsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY2hhbmdlTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vZGUoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLm1vZGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgPHA+TW9kZTogPHNwYW4gY2xhc3NOYW1lPVwibW9kZVwiPnsgbW9kZSA/IFwibmlnaHRcIiA6IFwiZGF5XCIgfS10aW1lLjwvc3Bhbj48L3A+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmNoYW5nZU1vZGUoKSB9PlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnN3aXRjaCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAxODBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiAkeyB0aGlzLnByb3BzLm1lbnUgPyBcIm5vbmVcIiA6IFwiZmxleFwiIH07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgJHsgc3R5bGVzLnRyYW5zaXRpb25zLnNsb3dlc3QgfTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7IG1vZGUgPyBcIiNmZmZcIiA6IFwiIzAwMFwiIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vZGUge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkeyBzdHlsZXMudHJhbnNpdGlvbnMuc3RhbmRhcmQgfVxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmRfbmlnaHQgOiBzdHlsZXMuY29sb3JzLnN0YW5kYXJkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNoYW5nZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAkeyBzdHlsZXMudHJhbnNpdGlvbnMuZmFzdCB9O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICR7IG1vZGUgPyBcIjVweFwiIDogXCIxOXB4XCIgfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IG1vZGUgPyBzdHlsZXMuY29sb3JzLnN0YW5kYXJkX25pZ2h0IDogc3R5bGVzLmNvbG9ycy5zdGFuZGFyZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jaGFuZ2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7IG1vZGUgP1xuICAgICAgICAgICAgc3R5bGVzLmNvbG9ycy5zdGFuZGFyZCA6IHN0eWxlcy5jb2xvcnMuc3RhbmRhcmRfbmlnaHQgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jaGFuZ2VyOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1XaWR0aDogNzgwcHgpIHtcbiAgICAgICAgICAgIC5zd2l0Y2gge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgbGVmdDogLTM2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=navigation/Switch.js */",
        dynamic: [this.props.menu ? "none" : "flex", _styles2.default.transitions.slowest, mode ? "#fff" : "#000", _styles2.default.transitions.standard, mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, _styles2.default.transitions.fast, mode ? "5px" : "19px", mode ? _styles2.default.colors.standard_night : _styles2.default.colors.standard, mode ? _styles2.default.colors.standard : _styles2.default.colors.standard_night]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24vU3dpdGNoLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInByb3BzIiwiY2hhbmdlTW9kZSIsIm1vZGUiLCJtZW51IiwidHJhbnNpdGlvbnMiLCJzbG93ZXN0Iiwic3RhbmRhcmQiLCJjb2xvcnMiLCJzdGFuZGFyZF9uaWdodCIsImZhc3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBR0osQUFDWDtXQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7Ozs7NkJBRVE7bUJBQ1A7O1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7NkJBQ0UsY0FBQTsyREFrQmtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQWxCcEMsQUFrQjZDLFFBQ2pCLGlCQUFBLEFBQU8sWUFuQm5DLEFBbUIrQyxTQUNwQixPQUFBLEFBQU8sU0FwQmxDLEFBb0IyQyxRQVN0QixpQkFBQSxBQUFPLFlBN0I1QixBQTZCd0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQTlCeEUsQUE4QitFLFVBVS9DLGlCQUFBLEFBQU8sWUF4Q3ZDLEFBd0NtRCxNQUM3QixPQUFBLEFBQU8sUUF6QzdCLEFBeUNxQyxRQUNWLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQUFpQixpQkFBQSxBQUFPLE9BMUN4RSxBQTBDK0UsVUFLcEQsT0FDckIsaUJBQUEsQUFBTyxPQURjLEFBQ1AsV0FBVyxpQkFBQSxBQUFPLE9BaER0QyxBQWdENkMsMkJBaEQ3QyxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7MkRBaUJnQixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsU0FqQmxDLEFBaUIyQyxRQUNqQixpQkFBQSxBQUFPLFlBbEJq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V0FBVyxpQkFBQSxBQUFPLE9BaER0QyxBQWdENkMsa0JBaEQ3QztrQkFrQmtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQWxCcEMsQUFrQjZDLFFBQ2pCLGlCQUFBLEFBQU8sWUFuQm5DLEFBbUIrQyxTQUNwQixPQUFBLEFBQU8sU0FwQmxDLEFBb0IyQyxRQVN0QixpQkFBQSxBQUFPLFlBN0I1QixBQTZCd0MsVUFDYixPQUFPLGlCQUFBLEFBQU8sT0FBZCxBQUFxQixpQkFBaUIsaUJBQUEsQUFBTyxPQTlCeEUsQUE4QitFLFVBVS9DLGlCQUFBLEFBQU8sWUF4Q3ZDLEFBd0NtRCxNQUM3QixPQUFBLEFBQU8sUUF6QzdCLEFBeUNxQyxRQUNWLE9BQU8saUJBQUEsQUFBTyxPQUFkLEFBQXFCLGlCQUFpQixpQkFBQSxBQUFPLE9BMUN4RSxBQTBDK0UsVUFLcEQsT0FDckIsaUJBQUEsQUFBTyxPQURjLEFBQ1AsV0FBVyxpQkFBQSxBQUFPLE9BakR4QyxBQUNFLEFBZ0Q2QyxBQWdCaEQ7QUFoRUc7Ozs7O0VBUnVCLGdCQUFNLEEiLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==