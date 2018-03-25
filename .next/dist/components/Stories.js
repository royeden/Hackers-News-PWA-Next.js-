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

var _Story = require('./Story');

var _Story2 = _interopRequireDefault(_Story);

var _Filter = require('./Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _styles = require('../static/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = {
      active: []
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ active: [1, 0, 0, 0] });
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(filter) {
      var actual = this.state.active;
      if (filter) {
        actual[filter] = actual[filter] ? 0 : 1;
        actual[0] = filter && actual.reduce(function (acc, val) {
          return acc + val;
        }, 0) >= 1 ? 0 : 1;
        actual = actual.reduce(function (acc, val) {
          return acc + val;
        }, 0) === 3 ? [1, 0, 0, 0] : actual;
      } else {
        actual = [1, 0, 0, 0];
      }

      this.setState({ active: actual });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('main', {
        className: _style2.default.dynamic([['3963338017', [_styles2.default.transitions.standard, this.props.mode ? "#fff" : "#000"]]]) + ' ' + 'stories'
      }, _react2.default.createElement(_Filter2.default, {
        filter: this.state,
        handleFilter: function handleFilter(filter) {
          return _this2.handleFilter(filter);
        },
        mode: this.props.mode
      }), this.props.stories.map(function (story) {
        return _react2.default.createElement(_Story2.default, {
          info: story,
          filter: _this2.state.active,
          mode: _this2.props.mode,
          key: story.id
        });
      }), _react2.default.createElement(_style2.default, {
        styleId: '3963338017',
        css: ['.stories.__jsx-style-dynamic-selector{-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';border:2px solid ' + (this.props.mode ? "#fff" : "#000") + ';}'],
        dynamic: [_styles2.default.transitions.standard, this.props.mode ? "#fff" : "#000"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;