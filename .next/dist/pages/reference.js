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
        }
      }, _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'references'
      }, _react2.default.createElement('h1', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'mode'
      }, 'Reference chart:'), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'model'
      }, _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'mode'
      }, 'Story Model:'), _react2.default.createElement(_Story2.default, {
        info: this.state,
        filter: [1, 0, 0, 0],
        mode: this.state.mode
      })), _react2.default.createElement('div', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'model'
      }, _react2.default.createElement('h2', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'mode'
      }, 'Points (Try it out, modifies the story\'s points):'), _react2.default.createElement('ul', {
        className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'list'
      }, _react2.default.createElement('li', {
        onClick: function onClick() {
          return _this2.handleClick([0, 100]);
        }, className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'color cold'
      }, 'Cold (< 100 points)'), _react2.default.createElement('li', {
        onClick: function onClick() {
          return _this2.handleClick([100, 500]);
        }, className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'color med'
      }, 'Medium (\u2265 100 & < 500 points)'), _react2.default.createElement('li', {
        onClick: function onClick() {
          return _this2.handleClick([500, Math.floor((Math.random() + 1) * 500)]);
        }, className: _style2.default.dynamic([['1045582859', [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]]]) + ' ' + 'color hot'
      }, 'Hot (\u2265 500 points) ')))), _react2.default.createElement(_style2.default, {
        styleId: '1045582859',
        css: ['.references.__jsx-style-dynamic-selector{margin:12px;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';border:2px solid ' + (mode ? "#fff" : "#000") + ';}', '.model.__jsx-style-dynamic-selector{margin:5px;border:2px solid #bbb;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';}', '.list.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style-type:none;}', '.mode.__jsx-style-dynamic-selector{-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';color:' + (mode ? "#fff" : "#000") + ';}', '.color.__jsx-style-dynamic-selector{width:auto;padding:2px;font-weight:600;text-align:center;margin-right:5px;-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';}', '.color.__jsx-style-dynamic-selector:hover{cursor:pointer;color:#fff;-webkit-transition:' + _styles2.default.transitions.fastest + ';transition:' + _styles2.default.transitions.fastest + ';}', '.cold.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold) + ';}', '.med.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.med_night : _styles2.default.colors.med) + ';}', '.hot.__jsx-style-dynamic-selector{color:' + (mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot) + ';}', '.cold.__jsx-style-dynamic-selector:hover{background-color:' + (mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold) + ';}', '.med.__jsx-style-dynamic-selector:hover{background-color:' + (mode ? _styles2.default.colors.med_night : _styles2.default.colors.med) + ';}', '.hot.__jsx-style-dynamic-selector:hover{background-color:' + (mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot) + ';}'],
        dynamic: [_styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.standard, mode ? "#fff" : "#000", _styles2.default.transitions.standard, _styles2.default.transitions.fastest, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot, mode ? _styles2.default.colors.cold_night : _styles2.default.colors.cold, mode ? _styles2.default.colors.med_night : _styles2.default.colors.med, mode ? _styles2.default.colors.hot_night : _styles2.default.colors.hot]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;