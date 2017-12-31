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
      var filter = this.props.filter;
      var type = info.points > 100 ? info.points >= 500 ? "hot" : "med" : "cold";
      var mode = this.props.mode;
      var active = filter[0] ? "story" : filter[1] && type === "cold" ? "story" : filter[2] && type === "med" ? "story" : filter[3] && type === "hot" ? "story" : "inactive";
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + (active + ' ' + type)
      }, _react2.default.createElement('h4', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]])
      }, _react2.default.createElement('a', {
        href: info.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + ('link ' + type)
      }, info.title)), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + 'data'
      }, _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]])
      }, "Uploaded by: ", _react2.default.createElement('a', {
        target: info.user ? "_blank" : "",
        rel: 'noopener noreferrer',
        href: info.user ? 'https://news.ycombinator.com/user?id=' + info.user : "#",
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + ('link ' + type)
      }, info.user ? info.user : "User")), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]])
      }, 'Points: ' + info.points), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]])
      }, "Comments: ", _react2.default.createElement(_link2.default, { as: '/post/' + (mode ? "night" : "day") + '/' + info.id,
        href: info.user ? {
          pathname: '/post',
          query: {
            mode: mode ? "night" : "day",
            id: info.id
          }
        } : {
          pathname: '/reference',
          query: {
            mode: mode ? "night" : "day"
          }
        }
      }, _react2.default.createElement('a', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + ('link ' + type)
      }, info.comments_count))), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]])
      }, "From: ", _react2.default.createElement(_link2.default, {
        href: 'http://' + info.domain
      }, _react2.default.createElement('a', {
        target: '_blank',
        rel: 'noopener noreferrer',
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]]) + ' ' + ('link ' + type)
      }, info.domain)), '.'), _react2.default.createElement('span', {
        className: _style2.default.dynamic([['4257732515', [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]]])
      }, 'Posted ' + info.time_ago + '.')), _react2.default.createElement(_style2.default, {
        styleId: '4257732515',
        css: ['.story.__jsx-style-dynamic-selector{margin-top:1px;margin-bottom:1px;font-weight:600;padding-left:10px;padding-top:3px;padding-bottom:3px;-webkit-transition:color ' + _styles2.default.transitions.standard + ';transition:color ' + _styles2.default.transitions.standard + ';background-color:' + _styles2.default.transitions.slowest + ';border:2px solid ' + (mode ? "#eee" : "#ddd") + ';background-color:' + (mode ? "#000" : "#fff") + ';}', '.link.__jsx-style-dynamic-selector{-webkit-transition:color ' + _styles2.default.transitions.standard + ';transition:color ' + _styles2.default.transitions.standard + ';}', '.inactive.__jsx-style-dynamic-selector{display:none;}', 'h4.__jsx-style-dynamic-selector{margin-top:6px;}', '.data.__jsx-style-dynamic-selector{margin-bottom:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}', '.data.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{margin-right:1%;}', '.hot.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot) + ';}', '.med.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.med_night : _styles2.default.colors.med) + ';}', '.cold.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold) + ';}', '@media screen and (max-Width:900px){.story.__jsx-style-dynamic-selector{font-size:0.95rem;}.data.__jsx-style-dynamic-selector{display:block;}.data.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{display:block;}}', '@media screen and (max-Width:500px){.story.__jsx-style-dynamic-selector{font-size:0.8rem;}}'],
        dynamic: [_styles2.default.transitions.standard, _styles2.default.transitions.slowest, mode ? "#eee" : "#ddd", mode ? "#000" : "#fff", _styles2.default.transitions.standard, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;