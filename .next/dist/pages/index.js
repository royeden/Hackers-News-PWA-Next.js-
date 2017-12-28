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

var _this = undefined,
    _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/pages/index.js?entry';

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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_Pager2.default, {
        page: this.state.page,
        last: this.state.last,
        onClick: function onClick(page) {
          return _this4.handlePage(page);
        },
        mode: this.state.mode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_Stories2.default, {
        stories: this.state.stories,
        mode: this.state.mode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(_Pager2.default, {
        page: this.state.page,
        last: this.state.last,
        onClick: function onClick(page) {
          return _this4.handlePage(page);
        },
        mode: this.state.mode,
        low: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIlN0b3JpZXMiLCJQYWdlciIsImdldFBhZ2UiLCJwYWdlIiwidXJsIiwiZmV0Y2giLCJyZXEiLCJqc29uIiwic3RvcmllcyIsImhhbmRsZVBhZ2UiLCJuZXdTdG9yaWVzIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1vZGUiLCJwcm9wcyIsInF1ZXJ5IiwibmV3TW9kZSIsImNoYW5nZU1vZGUiLCJsYXN0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVc7Ozs7Ozs7OztBQUVsQixJQUFNLHNCQUFBO3NGQUFVLGlCQUFBLEFBQU8sTUFBUDtrQkFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUNSO0FBRFEsOERBQUEsQUFDd0M7NEJBRHhDO21CQUVJLE1BRkosQUFFSSxBQUFNOztlQUFsQjtBQUZRLDJCQUFBOzRCQUFBO21CQUdRLElBSFIsQUFHUSxBQUFJOztlQUFwQjtBQUhRLCtCQUFBOzZDQUFBLEFBSVA7O2VBSk87ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUFWOzs4QkFBQTs0QkFBQTtBQUFBO0FBQU47OztrQ0FRRTs7b0JBQWM7aUJBQUE7O3dDQUFBOztpSUFBQTs7V0FBQSxBQW9CZCx5QkFwQmM7MkZBb0JELGtCQUFBLEFBQU0sTUFBTjtZQUFBO3dFQUFBO29CQUFBOytDQUFBO21CQUFBO2lDQUFBO3VCQUNjLFFBRGQsQUFDYyxBQUFROzttQkFBM0I7QUFESyx1Q0FFWDs7dUJBQUEsQUFBSzsyQkFBUyxBQUNELEFBQ1Q7d0JBSk8sQUFFWCxBQUFjLEFBRUo7QUFGSSxBQUNWOzttQkFITzttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBQXBCQzs7NEJBQUE7aUNBQUE7QUFBQTtBQUdaOztXQUFBLEFBQUs7ZUFBUSxBQUNGLEFBQ1Q7WUFGVyxBQUVMLEFBQ047WUFOVSxBQUdaLEFBQWEsQUFHTDtBQUhLLEFBQ1g7V0FJSDs7Ozs7eUNBRW9CLEFBQ25CO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUFmLEFBQXFCLFNBQWxDLEFBQTJDLEFBQzNDO1dBQUEsQUFBSyxTQUFTLEVBQUUsTUFBaEIsQUFBYyxBQUFRLEFBQ3ZCOzs7Ozs7Ozs7Ozs7dUJBR3VCLFFBQVEsS0FBQSxBQUFLLE1BQWIsQUFBbUIsQTs7bUJBQW5DO0Esb0NBQ047O3FCQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQVdkLEFBQ1g7VUFBTSxVQUFVLENBQUMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLEFBQzVCO1dBQUEsQUFBSyxTQUFTLEVBQUUsTUFBaEIsQUFBYyxBQUFRLEFBQ3ZCOzs7OzZCQUVRO21CQUNQOzs2QkFDRSxBQUFDO2VBQUQsQUFDUSxBQUNOO2NBRkYsQUFFTyxBQUNMO2lCQUFVLG1CQUFBO2lCQUFNLE9BQUEsQUFBSyxXQUFYLEFBQU0sQUFBZ0I7QUFIbEMsQUFJRTtjQUFPLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ2xCO29CQUFhLHNCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBTDFCOztvQkFBQTtzQkFBQSxBQVFFO0FBUkY7QUFDRSxPQURGLGtCQVFFLEFBQUM7Y0FDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtjQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO2lCQUFVLGlCQUFBLEFBQUMsTUFBRDtpQkFBVSxPQUFBLEFBQUssV0FBZixBQUFVLEFBQWdCO0FBSHRDLEFBSUU7Y0FBTyxLQUFBLEFBQUssTUFKZCxBQUlvQjs7b0JBSnBCO3NCQVJGLEFBUUUsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsQUFBQztpQkFDVyxLQUFBLEFBQUssTUFEakIsQUFDdUIsQUFDckI7Y0FBTyxLQUFBLEFBQUssTUFGZCxBQUVvQjs7b0JBRnBCO3NCQWRGLEFBY0UsQUFJQTtBQUpBO0FBQ0UsMEJBR0YsQUFBQztjQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2NBQU8sS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDbEI7aUJBQVUsaUJBQUEsQUFBQyxNQUFEO2lCQUFVLE9BQUEsQUFBSyxXQUFmLEFBQVUsQUFBZ0I7QUFIdEMsQUFJRTtjQUFPLEtBQUEsQUFBSyxNQUpkLEFBSW9CLEFBQ2xCO2FBTEYsQUFLTzs7b0JBTFA7c0JBbkJKLEFBQ0UsQUFrQkUsQUFTTDtBQVRLO0FBQ0U7Ozs7O0VBdkRtQixnQkFBTSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==