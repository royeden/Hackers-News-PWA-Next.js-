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

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Stories.js';


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
        className: _style2.default.dynamic([['3963338017', [_styles2.default.transitions.standard, this.props.mode ? "#fff" : "#000"]]]) + ' ' + 'stories',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_Filter2.default, {
        filter: this.state,
        handleFilter: function handleFilter(filter) {
          return _this2.handleFilter(filter);
        },
        mode: this.props.mode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), this.props.stories.map(function (story) {
        return _react2.default.createElement(_Story2.default, {
          info: story,
          filter: _this2.state.active,
          mode: _this2.props.mode,
          key: story.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        });
      }), _react2.default.createElement(_style2.default, {
        styleId: '3963338017',
        css: '.stories.__jsx-style-dynamic-selector{-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';border:2px solid ' + (this.props.mode ? "#fff" : "#000") + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3Rvcmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBR3FELHdGQUNNLDhDQUNoRCIsImZpbGUiOiJjb21wb25lbnRzL1N0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcm95LWVkZW4vUHJvZ3JhbW1pbmcvUHJvamVjdHMvTWluZS9uZXh0LXB3YSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBTdG9yeSBmcm9tICcuL1N0b3J5J1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3RhdGljL3N0eWxlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBbXVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6IFsxLCAwLCAwLCAwXX0pXG4gIH1cblxuICBoYW5kbGVGaWx0ZXIoZmlsdGVyKSB7XG4gICAgbGV0IGFjdHVhbCA9IHRoaXMuc3RhdGUuYWN0aXZlXG4gICAgaWYoZmlsdGVyKSB7XG4gICAgICBhY3R1YWxbZmlsdGVyXSA9IGFjdHVhbFtmaWx0ZXJdID8gMCA6IDFcbiAgICAgIGFjdHVhbFswXSA9IGZpbHRlciAmJiBhY3R1YWwucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjK3ZhbCwgMCkgPj0gMSA/IDAgOiAxXG4gICAgICBhY3R1YWwgPSBhY3R1YWwucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjK3ZhbCwgMCkgPT09IDMgPyBbMSwgMCwgMCwgMF0gOiBhY3R1YWxcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0dWFsID0gWzEsIDAsIDAsIDBdXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOiBhY3R1YWx9KVxuICB9XG5cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwic3Rvcmllc1wiPlxuICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgZmlsdGVyPXsgdGhpcy5zdGF0ZSB9XG4gICAgICAgICAgaGFuZGxlRmlsdGVyPXsgKGZpbHRlcikgPT4gdGhpcy5oYW5kbGVGaWx0ZXIoZmlsdGVyKSB9XG4gICAgICAgICAgbW9kZT17IHRoaXMucHJvcHMubW9kZSB9XG4gICAgICAgIC8+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5zdG9yaWVzLm1hcChzdG9yeSA9PiAoXG4gICAgICAgICAgPFN0b3J5XG4gICAgICAgICAgICBpbmZvPXsgc3RvcnkgfVxuICAgICAgICAgICAgZmlsdGVyPXsgdGhpcy5zdGF0ZS5hY3RpdmUgfVxuICAgICAgICAgICAgbW9kZT17IHRoaXMucHJvcHMubW9kZSB9XG4gICAgICAgICAgICBrZXk9eyBzdG9yeS5pZCB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSkgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnN0b3JpZXMge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJHsgc3R5bGVzLnRyYW5zaXRpb25zLnN0YW5kYXJkIH07XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkeyB0aGlzLnByb3BzLm1vZGUgPyBcIiNmZmZcIiA6IFwiIzAwMFwifTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Stories.js */',
        dynamic: [_styles2.default.transitions.standard, this.props.mode ? "#fff" : "#000"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiU3RvcnkiLCJGaWx0ZXIiLCJzdHlsZXMiLCJzdGF0ZSIsImFjdGl2ZSIsInNldFN0YXRlIiwiZmlsdGVyIiwiYWN0dWFsIiwicmVkdWNlIiwiYWNjIiwidmFsIiwidHJhbnNpdGlvbnMiLCJzdGFuZGFyZCIsInByb3BzIiwibW9kZSIsImhhbmRsZUZpbHRlciIsInN0b3JpZXMiLCJtYXAiLCJzdG9yeSIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7a0NBR2pCOztvQkFBYzt3Q0FBQTs7Z0lBR1o7O1VBQUEsQUFBSztjQUhPLEFBR1osQUFBYSxBQUNIO0FBREcsQUFDWDtXQUVIOzs7Ozt5Q0FFb0IsQUFDbkI7V0FBQSxBQUFLLFNBQVMsRUFBQyxRQUFRLENBQUEsQUFBQyxHQUFELEFBQUksR0FBSixBQUFPLEdBQTlCLEFBQWMsQUFBUyxBQUFVLEFBQ2xDOzs7O2lDLEFBRVksUUFBUSxBQUNuQjtVQUFJLFNBQVMsS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQUEsQUFBRyxRQUFRLEFBQ1Q7ZUFBQSxBQUFPLFVBQVUsT0FBQSxBQUFPLFVBQVAsQUFBaUIsSUFBbEMsQUFBc0MsQUFDdEM7ZUFBQSxBQUFPLHNCQUFlLEFBQU8sT0FBTyxVQUFBLEFBQUMsS0FBRCxBQUFNLEtBQU47aUJBQWMsTUFBZCxBQUFrQjtBQUFoQyxTQUFBLEVBQUEsQUFBcUMsTUFBL0MsQUFBcUQsQ0FBckQsR0FBQSxBQUF5RCxJQUFyRSxBQUF5RSxBQUN6RTt3QkFBUyxBQUFPLE9BQU8sVUFBQSxBQUFDLEtBQUQsQUFBTSxLQUFOO2lCQUFjLE1BQWQsQUFBa0I7QUFBaEMsU0FBQSxFQUFBLEFBQXFDLE9BQXJDLEFBQTRDLElBQUksQ0FBQSxBQUFDLEdBQUQsQUFBSSxHQUFKLEFBQU8sR0FBdkQsQUFBZ0QsQUFBVSxLQUFuRSxBQUF3RSxBQUN6RTtBQUpELGFBSU8sQUFDTDtpQkFBUyxDQUFBLEFBQUMsR0FBRCxBQUFJLEdBQUosQUFBTyxHQUFoQixBQUFTLEFBQVUsQUFDcEI7QUFFRDs7V0FBQSxBQUFLLFNBQVMsRUFBQyxRQUFmLEFBQWMsQUFBUyxBQUN4Qjs7Ozs2QkFHTzttQkFDTjs7NkJBQ0UsY0FBQTs0REFnQnFCLGlCQUFBLEFBQU8sWUFoQjVCLEFBZ0J3QyxVQUNiLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixTQWpCN0MsQUFpQnNELG1CQWpCdEQsQUFBZ0I7O29CQUFoQjtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7Z0JBQ1UsS0FEWCxBQUNnQixBQUNkO3NCQUFlLHNCQUFBLEFBQUMsUUFBRDtpQkFBWSxPQUFBLEFBQUssYUFBakIsQUFBWSxBQUFrQjtBQUYvQyxBQUdFO2NBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0I7O29CQUhwQjtzQkFERixBQUNFLEFBS0U7QUFMRjtBQUNFLGVBSUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixJQUFJLGlCQUFBOytCQUN2QixBQUFDO2dCQUFELEFBQ1MsQUFDUDtrQkFBUyxPQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDcEI7Z0JBQU8sT0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7ZUFBTSxNQUpSLEFBSWM7O3NCQUpkO3dCQUR1QixBQUN2QjtBQUFBO0FBQ0UsU0FERjtBQVBKLEFBTUk7aUJBTko7MkVBZ0JxQixpQkFBQSxBQUFPLFlBaEI1QixBQWdCd0MsNEJBQW5CLGlCQUFBLEFBQU8sWUFoQjVCLEFBZ0J3QyxtQ0FDYixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsU0FqQjdDLEFBaUJzRCxVQWpCdEQ7a0JBZ0JxQixpQkFBQSxBQUFPLFlBaEI1QixBQWdCd0MsVUFDYixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsU0FsQi9DLEFBQ0UsQUFpQnNELEFBS3pEO0FBdEJHOzs7OztFQTdCdUIsZ0JBQU0sQSIsImZpbGUiOiJTdG9yaWVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EifQ==