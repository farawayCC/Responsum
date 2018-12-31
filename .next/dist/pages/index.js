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

var _product = require('../ethereum/product');

var _product2 = _interopRequireDefault(_product);

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
      var _props = this.props,
          headers = _props.headers,
          addresses = _props.addresses;

      console.log("----------------------");
      console.log(this.props);
      console.log("----------------------");
      var items = [{
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%'
      }, {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%'
      }, {
        header: 'Project Report - June',
        description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%'
      }];

      // for (var i = 0; i < headers.length; i++) {
      //   items.push({
      //     header: headers[i],
      //     description: (
      //         <Link route={`/products/${addresses[i]}`}>
      //           <a>View Product</a>
      //         </Link>
      //     ),
      //     fluid: true //Make a card stretch through entire screen. From left to right
      //   });
      // }


      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Open Products'), _react2.default.createElement(_routes.Link, { route: '/products/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Product',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))), this.renderProducts()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var productsAddresses, headers, i, product, name;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedProducts().call();

              case 2:
                productsAddresses = _context.sent;

                console.log("----------------------");
                console.log(productsAddresses);
                console.log("----------------------");

                //for each product we get a header, using product addresses
                headers = [];
                i = 0;

              case 8:
                if (!(i < productsAddresses.length)) {
                  _context.next = 20;
                  break;
                }

                product = (0, _product2.default)(productsAddresses[i]);
                _context.next = 12;
                return product.methods.name().call;

              case 12:
                name = _context.sent;

                console.log("----...--");
                console.log(name);
                console.log("----...--");
                headers.push(name);

              case 17:
                i++;
                _context.next = 8;
                break;

              case 20:
                return _context.abrupt('return', {
                  headers: headers,
                  addresses: productsAddresses
                });

              case 21:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiUHJvZHVjdCIsIkxheW91dCIsIkxpbmsiLCJQcm9kdWN0SW5kZXgiLCJwcm9wcyIsImhlYWRlcnMiLCJhZGRyZXNzZXMiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJyZW5kZXJQcm9kdWN0cyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFByb2R1Y3RzIiwiY2FsbCIsInByb2R1Y3RzQWRkcmVzc2VzIiwiaSIsImxlbmd0aCIsInByb2R1Y3QiLCJuYW1lIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7cUNBMEJhO21CQUNnQixLQURoQixBQUNxQjtVQURyQixBQUNQLGlCQURPLEFBQ1A7VUFETyxBQUNFLG1CQURGLEFBQ0UsQUFFakI7O2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtjQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ2pCO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtVQUFNO2dCQUNKLEFBQ1UsQUFDUjtxQkFGRixBQUVlLEFBQ2I7Y0FKVSxBQUNaLEFBR1E7QUFIUixBQUNFLE9BRlU7Z0JBTVosQUFDVSxBQUNSO3FCQUZGLEFBRWUsQUFDYjtjQVRVLEFBTVosQUFHUTtBQUhSLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO3FCQUZGLEFBR0ksQUFDRjtjQWZKLEFBQWMsQUFXWixBQUlRLEFBSVY7QUFSRSxBQUNFOztBQVFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OzsyQ0FBTyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBRUEsa0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtpQkFKRjs7b0JBQUE7c0JBTE4sQUFHRSxBQUNFLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsaUJBUlosQUFDRSxBQUNFLEFBYUcsQUFBSyxBQUliOzs7Ozs7Ozs7Ozs7dUJBcEZpQyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isc0IsQUFBaEIsQUFBc0M7O21CQUFoRTtBLDZDQUVOOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7QUFDTTtBLDBCLEFBQVUsQUFDUDtBLG9CLEFBQUk7OztzQkFBRyxJQUFJLGtCLEFBQWtCOzs7QUFDOUI7O0EsMEJBQVUsdUJBQVEsa0IsQUFBUixBQUFRLEFBQWtCOzt1QkFDdkIsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsTyxBQUFPOzttQkFBcEM7QSxnQ0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0JBQUEsQUFBUSxLQUFSLEFBQWE7O21CQU4rQjtBOzs7Ozs7MkJBU3ZDLEFBQ0ksQUFDVDs2QixBQUZLLEFBRU07QUFGTixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVOLEEsQUExRjJCOztrQkEwRjNCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWxleC9CbG9ja2NoYWluRGV2L0RlY1JldmlldyJ9