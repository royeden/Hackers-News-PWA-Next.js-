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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Menu = require('../navigation/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _styles = require('../static/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/roy-eden/Programming/Projects/Mine/next-pwa/components/Layout.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = {
      needMenu: false,
      menu: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("resize", function () {
        return _this2.needMenu();
      });
      this.setState({ needMenu: window.outerWidth <= 800 });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var status = !this.state.menu;
      this.setState({ menu: status });
    }
  }, {
    key: 'changeMode',
    value: function changeMode() {
      this.props.changeMode();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick();
    }
  }, {
    key: 'needMenu',
    value: function needMenu() {
      var need = window.outerWidth <= 800;
      this.state.menu && !need ? this.toggleMenu() : "";
      this.setState({ needMenu: need });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var menu = this.state.needMenu;
      var mode = this.props.mode;
      var name = this.props.name;
      var title = this.props.title;
      return _react2.default.createElement('div', {
        className: _style2.default.dynamic([['2304402342', [_styles2.default.transitions.standard, this.props.mode ? _styles2.default.colors.darker_night : "#fff"]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_Header2.default, {
        title: title,
        name: name,
        mode: mode,
        handleClick: function handleClick() {
          return _this3.handleClick();
        },
        changeMode: function changeMode() {
          return _this3.changeMode();
        },
        toggleMenu: function toggleMenu() {
          return _this3.toggleMenu();
        },
        menu: menu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_Menu2.default, {
        active: name,
        on: this.state.menu,
        menu: !menu,
        mode: mode,
        handleClick: function handleClick() {
          return _this3.handleClick();
        },
        changeMode: function changeMode() {
          return _this3.changeMode();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_Title2.default, {
        mode: mode,
        title: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), this.props.children, _react2.default.createElement(_Footer2.default, { mode: this.props.mode, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2304402342',
        css: '*{padding:0;margin:0;box-sizing:border-box;font-family:\'Montserrat\',sans-serif;}body{-webkit-transition:' + _styles2.default.transitions.standard + ';transition:' + _styles2.default.transitions.standard + ';background-color:' + (this.props.mode ? _styles2.default.colors.darker_night : "#fff") + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFMEIsQUFHc0IsQUFROEIsVUFQL0IsU0FDYSxzQkFDZSxvQ0FDdkMsV0FLZ0QsOENBQ2hEIiwiZmlsZSI6ImNvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JveS1lZGVuL1Byb2dyYW1taW5nL1Byb2plY3RzL01pbmUvbmV4dC1wd2EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vbmF2aWdhdGlvbi9NZW51J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdGF0aWMvc3R5bGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuZWVkTWVudTogZmFsc2UsXG4gICAgICBtZW51OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLm5lZWRNZW51KCkpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bmVlZE1lbnU6IHdpbmRvdy5vdXRlcldpZHRoIDw9IDgwMH0pXG4gIH1cblxuICB0b2dnbGVNZW51KCkge1xuICAgIGNvbnN0IHN0YXR1cyA9ICF0aGlzLnN0YXRlLm1lbnVcbiAgICB0aGlzLnNldFN0YXRlKHttZW51OiBzdGF0dXN9KVxuICB9XG5cbiAgY2hhbmdlTW9kZSgpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vZGUoKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKClcbiAgfVxuXG4gIG5lZWRNZW51KCkge1xuICAgIGNvbnN0IG5lZWQgPSB3aW5kb3cub3V0ZXJXaWR0aCA8PSA4MDBcbiAgICB0aGlzLnN0YXRlLm1lbnUgJiYgIW5lZWQgPyB0aGlzLnRvZ2dsZU1lbnUoKSA6IFwiXCJcbiAgICB0aGlzLnNldFN0YXRlKHtuZWVkTWVudTogbmVlZH0pXG4gIH1cblxuIHJlbmRlcigpIHtcbiAgIGNvbnN0IG1lbnUgPSB0aGlzLnN0YXRlLm5lZWRNZW51XG4gICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5tb2RlXG4gICBjb25zdCBuYW1lID0gdGhpcy5wcm9wcy5uYW1lXG4gICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGVcbiAgIHJldHVybiAoXG4gICAgIDxkaXY+XG4gICAgICAgPEhlYWRlclxuICAgICAgICAgdGl0bGU9eyB0aXRsZSB9XG4gICAgICAgICBuYW1lPXsgbmFtZSB9XG4gICAgICAgICBtb2RlPXsgbW9kZSB9XG4gICAgICAgICBoYW5kbGVDbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSB9XG4gICAgICAgICBjaGFuZ2VNb2RlPXsgKCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCkgfVxuICAgICAgICAgdG9nZ2xlTWVudT17ICgpID0+IHRoaXMudG9nZ2xlTWVudSgpIH1cbiAgICAgICAgIG1lbnU9eyBtZW51IH1cbiAgICAgICAvPlxuICAgICAgIDxNZW51XG4gICAgICAgICBhY3RpdmU9eyBuYW1lIH1cbiAgICAgICAgIG9uPXsgdGhpcy5zdGF0ZS5tZW51IH1cbiAgICAgICAgIG1lbnU9eyAhbWVudSB9XG4gICAgICAgICBtb2RlPXsgbW9kZSB9XG4gICAgICAgICBoYW5kbGVDbGljaz17ICgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSB9XG4gICAgICAgICBjaGFuZ2VNb2RlPXsgKCkgPT4gdGhpcy5jaGFuZ2VNb2RlKCkgfVxuICAgICAgIC8+XG4gICAgICAgPFRpdGxlXG4gICAgICAgICBtb2RlPXsgbW9kZSB9XG4gICAgICAgICB0aXRsZT17IHRpdGxlIH1cbiAgICAgICAvPlxuICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgPEZvb3RlciBtb2RlPXsgdGhpcy5wcm9wcy5tb2RlIH0gLz5cblxuICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAqIHtcbiAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgfVxuXG5cbiAgICAgICAgIGJvZHkge1xuICAgICAgICAgICB0cmFuc2l0aW9uOiAkeyBzdHlsZXMudHJhbnNpdGlvbnMuc3RhbmRhcmQgfTtcbiAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsgdGhpcy5wcm9wcy5tb2RlID8gc3R5bGVzLmNvbG9ycy5kYXJrZXJfbmlnaHQgOiBcIiNmZmZcIn07XG4gICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgPC9kaXY+XG4gICApXG4gfVxufVxuIl19 */\n/*@ sourceURL=components/Layout.js */',
        dynamic: [_styles2.default.transitions.standard, this.props.mode ? _styles2.default.colors.darker_night : "#fff"]
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIlRpdGxlIiwiTWVudSIsInN0eWxlcyIsInN0YXRlIiwibmVlZE1lbnUiLCJtZW51Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwib3V0ZXJXaWR0aCIsInN0YXR1cyIsInByb3BzIiwiY2hhbmdlTW9kZSIsIm9uQ2xpY2siLCJuZWVkIiwidG9nZ2xlTWVudSIsIm1vZGUiLCJuYW1lIiwidGl0bGUiLCJ0cmFuc2l0aW9ucyIsInN0YW5kYXJkIiwiY29sb3JzIiwiZGFya2VyX25pZ2h0IiwiaGFuZGxlQ2xpY2siLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7Ozs7Ozs7OztrQ0FHakI7O29CQUFjO3dDQUFBOztnSUFHWjs7VUFBQSxBQUFLO2dCQUFRLEFBQ0QsQUFDVjtZQUxVLEFBR1osQUFBYSxBQUVMO0FBRkssQUFDWDtXQUdIOzs7Ozt3Q0FFbUI7bUJBQ2xCOzthQUFBLEFBQU8saUJBQVAsQUFBd0IsVUFBVSxZQUFBO2VBQU0sT0FBTixBQUFNLEFBQUs7QUFBN0MsQUFDQTtXQUFBLEFBQUssU0FBUyxFQUFDLFVBQVUsT0FBQSxBQUFPLGNBQWhDLEFBQWMsQUFBZ0MsQUFDL0M7Ozs7aUNBRVksQUFDWDtVQUFNLFNBQVMsQ0FBQyxLQUFBLEFBQUssTUFBckIsQUFBMkIsQUFDM0I7V0FBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTyxBQUN0Qjs7OztpQ0FFWSxBQUNYO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7OztrQ0FFYSxBQUNaO1dBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWjs7OzsrQkFFVSxBQUNUO1VBQU0sT0FBTyxPQUFBLEFBQU8sY0FBcEIsQUFBa0MsQUFDbEM7V0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLENBQW5CLEFBQW9CLE9BQU8sS0FBM0IsQUFBMkIsQUFBSyxlQUFoQyxBQUErQyxBQUMvQztXQUFBLEFBQUssU0FBUyxFQUFDLFVBQWYsQUFBYyxBQUFXLEFBQzFCOzs7OzZCQUVPO21CQUNQOztVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQU0sT0FBTyxLQUFBLEFBQUssTUFBbEIsQUFBd0IsQUFDeEI7VUFBTSxPQUFPLEtBQUEsQUFBSyxNQUFsQixBQUF3QixBQUN4QjtVQUFNLFFBQVEsS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3pCOzZCQUNFLGNBQUE7NERBbUNxQixpQkFBQSxBQUFPLFlBbkM1QixBQW1Dd0MsVUFDYixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8saUJBQUEsQUFBTyxPQUF6QixBQUFnQyxlQXBDM0QsQUFvQzBFOztvQkFwQzFFO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQztlQUFELEFBQ1UsQUFDUjtjQUZGLEFBRVMsQUFDUDtjQUhGLEFBR1MsQUFDUDtxQkFBYyx1QkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUozQixBQUtFO29CQUFhLHNCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBTDFCLEFBTUU7b0JBQWEsc0JBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFOMUIsQUFPRTtjQVBGLEFBT1M7O29CQVBUO3NCQURGLEFBQ0UsQUFTQTtBQVRBO0FBQ0UsMEJBUUYsQUFBQztnQkFBRCxBQUNXLEFBQ1Q7WUFBSyxLQUFBLEFBQUssTUFGWixBQUVrQixBQUNoQjtjQUFPLENBSFQsQUFHVSxBQUNSO2NBSkYsQUFJUyxBQUNQO3FCQUFjLHVCQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBTDNCLEFBTUU7b0JBQWEsc0JBQUE7aUJBQU0sT0FBTixBQUFNLEFBQUs7QUFOMUI7O29CQUFBO3NCQVZGLEFBVUUsQUFRQTtBQVJBO0FBQ0UsMEJBT0YsQUFBQztjQUFELEFBQ1MsQUFDUDtlQUZGLEFBRVU7O29CQUZWO3NCQWxCRixBQWtCRSxBQUlFO0FBSkY7QUFDRSxlQUdBLEFBQUssTUF0QlQsQUFzQmUsQUFDYiwwQkFBQSxBQUFDLGtDQUFPLE1BQU8sS0FBQSxBQUFLLE1BQXBCLEFBQTBCO29CQUExQjtzQkF2QkYsQUF1QkU7QUFBQTs7aUJBdkJGOzRIQW1DcUIsaUJBQUEsQUFBTyxZQW5DNUIsQUFtQ3dDLDRCQUFuQixpQkFBQSxBQUFPLFlBbkM1QixBQW1Dd0MsbUNBQ2IsS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFPLGlCQUFBLEFBQU8sT0FBekIsQUFBZ0MsZUFwQzNELEFBb0MwRSxVQXBDMUU7a0JBbUNxQixpQkFBQSxBQUFPLFlBbkM1QixBQW1Dd0MsVUFDYixLQUFBLEFBQUssTUFBTCxBQUFXLE9BQU8saUJBQUEsQUFBTyxPQUF6QixBQUFnQyxlQXJDN0QsQUFDRSxBQW9DMEUsQUFLN0U7QUF6Q0c7Ozs7O0VBeEN3QixnQkFBTSxBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9yb3ktZWRlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9NaW5lL25leHQtcHdhIn0=