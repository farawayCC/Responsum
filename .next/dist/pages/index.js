'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Alex\\BlockchainDev\\DecReview\\pages\\index.js?entry';


var ProductIndex = function (_Component) {
  (0, _inherits3.default)(ProductIndex, _Component);

  function ProductIndex() {
    (0, _classCallCheck3.default)(this, ProductIndex);

    return (0, _possibleConstructorReturn3.default)(this, (ProductIndex.__proto__ || (0, _getPrototypeOf2.default)(ProductIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProductIndex, [{
    key: 'renderProducts',
    value: function renderProducts() {
      var items = this.props.products.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/products/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }, 'View Product')),
          fluid: true //Make entire screen. From left to right
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Open Products'), _react2.default.createElement(_routes.Link, { route: '/products/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Product',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), this.renderProducts()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var products;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedProducts().call();

              case 2:
                products = _context.sent;

                console.log(products);
                return _context.abrupt('return', { products: products });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProductIndex;
}(_react.Component);

exports.default = ProductIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIlByb2R1Y3RJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJwcm9kdWN0cyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyUHJvZHVjdHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRQcm9kdWN0cyIsImNhbGwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3FDQU9hLEFBQ2Y7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxtQkFBVyxBQUMvQzs7a0JBQU8sQUFDRyxBQUNSO3VDQUNJLEFBQUMsOEJBQUssc0JBQU4sQUFBMEI7d0JBQTFCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUpELEFBR0QsQUFDRSxBQUdOO2lCQVBLLEFBT0UsS0FQVCxBQUFPLEFBT08sQUFFZjtBQVRRLEFBQ0w7QUFGSixBQUFjLEFBWWQsT0FaYzs7MkNBWVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFHQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLGtDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7aUJBSkY7O29CQUFBO3NCQUxOLEFBR0UsQUFDRSxBQUNFLEFBUUg7QUFSRztBQUNFLGlCQVJaLEFBQ0UsQUFDRSxBQWFHLEFBQUssQUFJYjs7Ozs7Ozs7Ozs7O3VCQXpDd0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHNCLEFBQWhCLEFBQXNDOzttQkFBdkQ7QSxvQ0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7aURBQ0wsRUFBRSxVLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ1gsQSxBQTlDMkI7O2tCQThDM0IsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BbGV4L0Jsb2NrY2hhaW5EZXYvRGVjUmV2aWV3In0=