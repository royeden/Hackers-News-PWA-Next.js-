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

var _Comments = require('../components/Comments');

var _Comments2 = _interopRequireDefault(_Comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/pages/post.js?entry';

var getComments = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
    var url, req, stories;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = 'https://api.hackerwebapp.com/item/' + id;
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

  return function getComments(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this2.state = {
      story: {},
      mode: false
    };
    return _this2;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var mode = this.props.url.query.mode === "night";
      this.setState({ mode: mode });
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var story;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getComments(this.props.url.query.id);

              case 2:
                story = _context2.sent;

                this.setState({ story: story });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
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
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        title: this.state.story.title,
        mode: this.state.mode,
        changeMode: function changeMode() {
          return _this3.changeMode();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_Comments2.default, {
        mode: this.state.mode,
        info: this.state.story,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiQ29tbWVudHMiLCJnZXRDb21tZW50cyIsImlkIiwidXJsIiwiZmV0Y2giLCJyZXEiLCJqc29uIiwic3RvcmllcyIsInN0YXRlIiwic3RvcnkiLCJtb2RlIiwicHJvcHMiLCJxdWVyeSIsInNldFN0YXRlIiwibmV3TW9kZSIsInRpdGxlIiwiY2hhbmdlTW9kZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7Ozs7OztBQUdyQixJQUFNLDBCQUFBO3NGQUFjLGlCQUFBLEFBQU8sSUFBUDtrQkFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUNaO0FBRFkseURBQUEsQUFDK0I7NEJBRC9CO21CQUVBLE1BRkEsQUFFQSxBQUFNOztlQUFsQjtBQUZZLDJCQUFBOzRCQUFBO21CQUdJLElBSEosQUFHSSxBQUFJOztlQUFwQjtBQUhZLCtCQUFBOzZDQUFBLEFBSVg7O2VBSlc7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUFkOztrQ0FBQTs0QkFBQTtBQUFBO0FBQU47OztrQ0FRRTs7b0JBQWM7d0NBQUE7O2lJQUdaOztXQUFBLEFBQUs7YUFBUSxBQUNKLEFBQ1A7WUFMVSxBQUdaLEFBQWEsQUFFTDtBQUZLLEFBQ1g7V0FHSDs7Ozs7eUNBRW9CLEFBQ25CO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUFmLEFBQXFCLFNBQWxDLEFBQTJDLEFBQzNDO1dBQUEsQUFBSyxTQUFTLEVBQUUsTUFBaEIsQUFBYyxBQUFRLEFBQ3ZCOzs7Ozs7Ozs7Ozs7dUJBR3FCLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBTSxBLEFBQWpDOzttQkFBZDtBLGtDQUNOOztxQkFBQSxBQUFLLFNBQVMsRUFBRSxPQUFoQixBQUFjLEFBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHWixBQUNYO1VBQU0sVUFBVSxDQUFDLEtBQUEsQUFBSyxNQUF0QixBQUE0QixBQUM1QjtXQUFBLEFBQUssU0FBUyxFQUFFLE1BQWhCLEFBQWMsQUFBUSxBQUN2Qjs7Ozs2QkFFUTttQkFDUDs7NkJBQ0UsQUFBQztlQUNTLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFEckIsQUFDMkIsQUFDekI7Y0FBTyxLQUFBLEFBQUssTUFGZCxBQUVvQixBQUNsQjtvQkFBYSxzQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUgxQjs7b0JBQUE7c0JBQUEsQUFLRTtBQUxGO0FBQ0UsT0FERixrQkFLRSxBQUFDO2NBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7Y0FBTyxLQUFBLEFBQUssTUFGZCxBQUVvQjs7b0JBRnBCO3NCQU5KLEFBQ0UsQUFLRSxBQU1MO0FBTks7QUFDRTs7Ozs7RUFqQ21CLGdCQUFNLEEiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9yb3ktZWRlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9NaW5lL25leHQtcHdhIn0=