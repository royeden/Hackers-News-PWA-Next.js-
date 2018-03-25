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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Stories = require('../components/Stories');

var _Stories2 = _interopRequireDefault(_Stories);

var _Pager = require('../components/Pager');

var _Pager2 = _interopRequireDefault(_Pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var getPage = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(page) {
    var url, req, stories;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = 'https://api.hackerwebapp.com/news?page=' + page;
            _context.next = 3;
            return fetch(url);

          case 3:
            req = _context.sent;
            _context.next = 6;
            return req.json();

          case 6:
            stories = _context.sent;
            return _context.abrupt('return', stories);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getPage(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    var _this3 = this;

    (0, _classCallCheck3.default)(this, _class);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this2.handlePage = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(page) {
        var newStories;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getPage(page);

              case 2:
                newStories = _context2.sent;

                _this2.setState({
                  stories: newStories,
                  page: page
                });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this2.state = {
      stories: [],
      page: 1,
      mode: false
    };
    return _this2;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var mode = this.props.url.query.mode === 'night';
      this.setState({ mode: mode });
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var stories;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return getPage(this.state.page);

              case 2:
                stories = _context3.sent;

                this.setState({ stories: stories });

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'changeMode',
    value: function changeMode() {
      var newMode = !this.state.mode;
      this.setState({ mode: newMode });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(_Layout2.default, {
        title: 'Latest Hacker News',
        name: 'home',
        onClick: function onClick() {
          return _this4.handlePage(1);
        },
        mode: this.state.mode,
        changeMode: function changeMode() {
          return _this4.changeMode();
        }
      }, _react2.default.createElement(_Pager2.default, {
        page: this.state.page,
        last: this.state.last,
        onClick: function onClick(page) {
          return _this4.handlePage(page);
        },
        mode: this.state.mode
      }), _react2.default.createElement(_Stories2.default, {
        stories: this.state.stories,
        mode: this.state.mode
      }), _react2.default.createElement(_Pager2.default, {
        page: this.state.page,
        last: this.state.last,
        onClick: function onClick(page) {
          return _this4.handlePage(page);
        },
        mode: this.state.mode,
        low: true
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;