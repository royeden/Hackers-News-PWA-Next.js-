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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Story = require('../components/Story');

var _Story2 = _interopRequireDefault(_Story);

var _styles = require('../static/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/pages/reference.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = {
      title: "Story Title",
      url: "#",
      user: false,
      points: 0,
      comments_count: 0,
      domain: "google.com",
      time_ago: "7 days ago",
      id: "",
      mode: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var mode = this.props.url.query.mode === "night";
      this.setState({
        points: Math.floor(Math.random() * 550),
        comments_count: Math.floor(Math.random() * 1000),
        mode: mode
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(n) {
      this.setState({ points: Math.floor(Math.random() * (n[0] - n[1] + 1)) + n[1] });
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      var newMode = !this.state.mode;
      this.setState({ mode: newMode });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mode = this.state.mode;
      return _react2.default.createElement(_Layout2.default, {
        title: 'References',
        name: 'reference',
        mode: this.state.mode,
        changeMode: function changeMode() {
          return _this2.changeMode();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'references',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('h1', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'mode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Reference chart:'), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'model',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'mode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Story Model:'), _react2.default.createElement(_Story2.default, {
        info: this.state,
        filter: [1, 0, 0, 0],
        mode: this.state.mode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'model',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'mode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Points (Try it out, modifies the story\'s points):'), _react2.default.createElement('ul', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'list',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('li', {
        onClick: function onClick() {
          return _this2.handleClick([0, 100]);
        }, className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'color cold',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Cold (< 100 points)'), _react2.default.createElement('li', {
        onClick: function onClick() {
          return _this2.handleClick([100, 500]);
        }, className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'color med',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Medium (\u2265 100 & < 500 points)'), _react2.default.createElement('li', {
        onClick: function onClick() {
          return _this2.handleClick([500, Math.floor((Math.random() + 1) * 500)]);
        }, className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'color hot',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Hot (\u2265 500 points) ')))), _react2.default.createElement(_style2.default, {
        styleId: '1045582859',
        css: '.references.__jsx-style-dynamic-selector{margin:12px;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';border:2px solid ' + (mode ? "#fff" : "#000") + ';}.model.__jsx-style-dynamic-selector{margin:5px;border:2px solid #bbb;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';}.list.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style-type:none;}.mode.__jsx-style-dynamic-selector{-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';color:' + (mode ? "#fff" : "#000") + ';}.color.__jsx-style-dynamic-selector{width:auto;padding:2px;font-weight:600;text-align:center;margin-right:5px;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';}.color.__jsx-style-dynamic-selector:hover{cursor:pointer;color:#fff;-webkit-transition:' + _styles2.default.transitions.fastest + ';transition:' + _styles2.default.transitions.fastest + ';}.cold.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold) + ';}.med.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.med_night : _styles2.default.colors.med) + ';}.hot.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot) + ';}.cold.__jsx-style-dynamic-selector:hover{background-color:' + (mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold) + ';}.med.__jsx-style-dynamic-selector:hover{background-color:' + (mode ? _styles2.default.colors.med_night : _styles2.default.colors.med) + ';}.hot.__jsx-style-dynamic-selector:hover{background-color:' + (mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot) + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZmVyZW5jZS5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RW9CLEFBR3lCLEFBTUQsQUFNRSxBQUsyQixBQUs3QixBQVNJLEFBTW9CLEFBSUEsQUFJQSxBQUlZLEFBSUEsQUFJQSxXQWxEekIsQUFnQlYsQ0F0QjRCLEdBK0I3QixRQVJLLEdBU3dCLE9BekJBLEVBOEIxQyxBQUlBLEFBSUEsSUFyQm9CLFFBeUJwQixBQUlBLEFBSUEsVUFoQ21CLGlCQWJJLEFBY21CLGNBVEwsT0FKckMsS0FaZ0QsY0FnQ2hELE9BekJBLEVBVUEsdUJBaEJBLGdCQXlCQSIsImZpbGUiOiJwYWdlcy9yZWZlcmVuY2UuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcm95LWVkZW4vUHJvZ3JhbW1pbmcvUHJvamVjdHMvTWluZS9uZXh0LXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgU3RvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9TdG9yeSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3RhdGljL3N0eWxlcydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IFwiU3RvcnkgVGl0bGVcIixcbiAgICAgIHVybDogXCIjXCIsXG4gICAgICB1c2VyOiBmYWxzZSxcbiAgICAgIHBvaW50czogMCxcbiAgICAgIGNvbW1lbnRzX2NvdW50OiAwLFxuICAgICAgZG9tYWluOiBcImdvb2dsZS5jb21cIixcbiAgICAgIHRpbWVfYWdvOiBcIjcgZGF5cyBhZ29cIixcbiAgICAgIGlkOiBcIlwiLFxuICAgICAgbW9kZTogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLnByb3BzLnVybC5xdWVyeS5tb2RlID09PSBcIm5pZ2h0XCJcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBvaW50czogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTUwKSxcbiAgICAgIGNvbW1lbnRzX2NvdW50OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcbiAgICAgIG1vZGU6IG1vZGVcbiAgICAgfSlcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKG4pIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcG9pbnRzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoblswXSAtIG5bMV0gKyAxKSkgKyBuWzFdIH0pXG4gIH1cblxuICBjaGFuZ2VNb2RlKCkge1xuICAgIGNvbnN0IG5ld01vZGUgPSAhdGhpcy5zdGF0ZS5tb2RlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGU6IG5ld01vZGUgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5zdGF0ZS5tb2RlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXRcbiAgICAgICAgdGl0bGU9XCJSZWZlcmVuY2VzXCJcbiAgICAgICAgbmFtZT1cInJlZmVyZW5jZVwiXG4gICAgICAgIG1vZGU9eyB0aGlzLnN0YXRlLm1vZGUgfVxuICAgICAgICBjaGFuZ2VNb2RlPXsgKCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCkgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZmVyZW5jZXNcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibW9kZVwiPlJlZmVyZW5jZSBjaGFydDo8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RlXCI+U3RvcnkgTW9kZWw6PC9oMj5cbiAgICAgICAgICAgIDxTdG9yeVxuICAgICAgICAgICAgICBpbmZvPXsgdGhpcy5zdGF0ZSB9XG4gICAgICAgICAgICAgIGZpbHRlcj17IFsxLCAwLCAwLCAwXSB9XG4gICAgICAgICAgICAgIG1vZGU9eyB0aGlzLnN0YXRlLm1vZGUgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kZVwiPlBvaW50cyAoVHJ5IGl0IG91dCwgbW9kaWZpZXMgdGhlIHN0b3J5J3MgcG9pbnRzKTo8L2gyPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sb3IgY29sZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soWzAsIDEwMF0pIH0+Q29sZCAoJmx0OyAxMDAgcG9pbnRzKTwvbGk+XG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yIG1lZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soWzEwMCwgNTAwXSkgfT5NZWRpdW0gKCZnZTsgMTAwICYgJmx0OyA1MDAgcG9pbnRzKTwvbGk+XG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yIGhvdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soWzUwMCwgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSArIDEpICogNTAwKV0pIH0+SG90ICgmZ2U7IDUwMCBwb2ludHMpIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5yZWZlcmVuY2VzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICR7IHN0eWxlcy50cmFuc2l0aW9ucy5zdGFuZGFyZCB9O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHsgbW9kZSA/IFwiI2ZmZlwiIDogXCIjMDAwXCIgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kZWwge1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYmJiO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAkeyBzdHlsZXMudHJhbnNpdGlvbnMuc3RhbmRhcmQgfTtcbiAgICAgICAgICAgIGNvbG9yOiAkeyBtb2RlID8gXCIjZmZmXCIgOiBcIiMwMDBcIn07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbG9yIHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbG9yOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLmZhc3Rlc3QgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29sZCB7XG4gICAgICAgICAgICBjb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuY29sZF9uaWdodCA6IHN0eWxlcy5jb2xvcnMuY29sZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWQge1xuICAgICAgICAgICAgY29sb3I6ICR7IG1vZGUgPyBzdHlsZXMuY29sb3JzLm1lZF9uaWdodCA6IHN0eWxlcy5jb2xvcnMubWVkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhvdCB7XG4gICAgICAgICAgICBjb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuaG90X25pZ2h0IDogc3R5bGVzLmNvbG9ycy5ob3QgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29sZDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBtb2RlID8gc3R5bGVzLmNvbG9ycy5jb2xkX25pZ2h0IDogc3R5bGVzLmNvbG9ycy5jb2xkIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lZDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBtb2RlID8gc3R5bGVzLmNvbG9ycy5tZWRfbmlnaHQgOiBzdHlsZXMuY29sb3JzLm1lZCB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ob3Q6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgbW9kZSA/IHN0eWxlcy5jb2xvcnMuaG90X25pZ2h0IDogc3R5bGVzLmNvbG9ycy5ob3QgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+KVxuICAgICAgfVxufVxuIl19 */\n/*@ sourceURL=pages/reference.js?entry */',
        dynamic: [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJTdG9yeSIsInN0eWxlcyIsInN0YXRlIiwidGl0bGUiLCJ1cmwiLCJ1c2VyIiwicG9pbnRzIiwiY29tbWVudHNfY291bnQiLCJkb21haW4iLCJ0aW1lX2FnbyIsImlkIiwibW9kZSIsInByb3BzIiwicXVlcnkiLCJzZXRTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm4iLCJuZXdNb2RlIiwiY2hhbmdlTW9kZSIsInRyYW5zaXRpb25zIiwic3RhbmRhcmQiLCJmYXN0ZXN0IiwiY29sb3JzIiwiY29sZF9uaWdodCIsImNvbGQiLCJtZWRfbmlnaHQiLCJtZWQiLCJob3RfbmlnaHQiLCJob3QiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7a0NBSWpCOztvQkFBYzt3Q0FBQTs7Z0lBRVo7O1VBQUEsQUFBSzthQUFRLEFBQ0osQUFDUDtXQUZXLEFBRU4sQUFDTDtZQUhXLEFBR0wsQUFDTjtjQUpXLEFBSUgsQUFDUjtzQkFMVyxBQUtLLEFBQ2hCO2NBTlcsQUFNSCxBQUNSO2dCQVBXLEFBT0QsQUFDVjtVQVJXLEFBUVAsQUFDSjtZQVhVLEFBRVosQUFBYSxBQVNMO0FBVEssQUFDWDtXQVVIOzs7Ozt5Q0FFb0IsQUFDbkI7VUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQWYsQUFBcUIsU0FBbEMsQUFBMkMsQUFDM0M7V0FBQSxBQUFLO2dCQUNLLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQURaLEFBQ0osQUFBMkIsQUFDbkM7d0JBQWdCLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUZwQixBQUVJLEFBQTJCLEFBQzNDO2NBSEYsQUFBYyxB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RUFJL0MsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BMUZuRSxBQTBGMEUsT0ExRjFFO2tCQWtDcUIsaUJBQUEsQUFBTyxZQWxDNUIsQUFrQ3dDLFVBQ2IsT0FBQSxBQUFPLFNBbkNsQyxBQW1DMkMsUUFNdEIsaUJBQUEsQUFBTyxZQXpDNUIsQUF5Q3dDLFVBU25CLGlCQUFBLEFBQU8sWUFsRDVCLEFBa0R3QyxVQUN4QixPQUFBLEFBQU8sU0FuRHZCLEFBbURnQyxRQVNYLGlCQUFBLEFBQU8sWUE1RDVCLEFBNER3QyxVQU1uQixpQkFBQSxBQUFPLFlBbEU1QixBQWtFd0MsU0FJeEIsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsYUFBYSxpQkFBQSxBQUFPLE9BdEV6RCxBQXNFZ0UsTUFJaEQsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BMUV4RCxBQTBFK0QsS0FJL0MsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BOUV4RCxBQThFK0QsS0FJcEMsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsYUFBYSxpQkFBQSxBQUFPLE9BbEZwRSxBQWtGMkUsTUFJaEQsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BdEZuRSxBQXNGMEUsS0FJL0MsT0FBTyxpQkFBQSxBQUFPLE9BQWQsQUFBcUIsWUFBWSxpQkFBQSxBQUFPLE9BM0ZyRSxBQUNFLEFBMEYwRSxBQUl6RTtBQTlGRDs7Ozs7RUFyQ3VCLGdCQUFNLEEiLCJmaWxlIjoicmVmZXJlbmNlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==