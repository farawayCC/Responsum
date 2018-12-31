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

      var items = [];
      for (var index in headers) {
        items.push({
          header: headers[index],
          description: _react2.default.createElement(_routes.Link, { route: '/products/' + addresdses[index], __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          }, 'View Product')),
          fluid: true //Make entire screen. From left to right
        });
      }
      console.log("Hi man");

      // items = [
      //   {
      //     header: 'Project Report - April',
      //     description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      //     meta: 'ROI: 30%',
      //   }];
      console.log(items);

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Open Products'), _react2.default.createElement(_routes.Link, { route: '/products/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Product',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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

                // console.log("----------------------");
                // console.log(productsAddresses);
                // console.log("----------------------");

                //for each product we get a header, using product addresses
                headers = [];
                i = 0;

              case 5:
                if (!(i < productsAddresses.length)) {
                  _context.next = 14;
                  break;
                }

                product = (0, _product2.default)(productsAddresses[i]);
                _context.next = 9;
                return product.methods.name().call();

              case 9:
                name = _context.sent;

                headers.push(name);

              case 11:
                i++;
                _context.next = 5;
                break;

              case 14:
                return _context.abrupt('return', {
                  headers: headers,
                  addresses: productsAddresses
                });

              case 15:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiUHJvZHVjdCIsIkxheW91dCIsIkxpbmsiLCJQcm9kdWN0SW5kZXgiLCJwcm9wcyIsImhlYWRlcnMiLCJhZGRyZXNzZXMiLCJpdGVtcyIsImluZGV4IiwicHVzaCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiYWRkcmVzZHNlcyIsImZsdWlkIiwiY29uc29sZSIsImxvZyIsInJlbmRlclByb2R1Y3RzIiwibWV0aG9kcyIsImdldERlcGxveWVkUHJvZHVjdHMiLCJjYWxsIiwicHJvZHVjdHNBZGRyZXNzZXMiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3FDQXVCYTttQkFDZ0IsS0FEaEIsQUFDcUI7VUFEckIsQUFDUCxpQkFETyxBQUNQO1VBRE8sQUFDRSxtQkFERixBQUNFLEFBR2pCOztVQUFJLFFBQUosQUFBWSxBQUNaO1dBQUssSUFBTCxBQUFTLFNBQVQsQUFBa0IsU0FBUyxBQUN6QjtjQUFBLEFBQU07a0JBQ0ksUUFEQyxBQUNELEFBQVEsQUFDaEI7dUNBQ1EsQUFBQyw4QkFBSyxzQkFBb0IsV0FBMUIsQUFBMEIsQUFBVzt3QkFBckM7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkQsQUFHRCxBQUNFLEFBR1Y7aUJBUFMsQUFPRixLQVBULEFBQVcsQUFPRyxBQUVmO0FBVFksQUFDVDtBQVNKO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUVaOzsyQ0FBTyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBRUEsa0NBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2lCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR08sQUFDTDtpQkFKRjs7b0JBQUE7c0JBTE4sQUFHRSxBQUNFLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsaUJBUlosQUFDRSxBQUNFLEFBYUcsQUFBSyxBQUliOzs7Ozs7Ozs7Ozs7dUJBckVpQyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isc0IsQUFBaEIsQUFBc0M7O21CQUFoRTtBLDZDQUVOOztBQUNBO0FBQ0E7QUFFQTs7QUFDTTtBLDBCQUNHLEEsQUFETztBLG9CLEFBQ0g7OztzQkFBRyxJQUFJLGtCLEFBQWtCOzs7QUFDOUI7O0EsMEJBQVUsdUJBQVEsa0IsQUFBUixBQUFRLEFBQWtCOzt1QkFDdkIsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsTyxBQUFoQixBQUF1Qjs7bUJBQXBDO0EsZ0NBQ047O3dCQUFBLEFBQVEsS0FBUixBQUFhOzttQkFIK0I7QTs7Ozs7OzJCQU12QyxBQUNJLEFBQ1Q7NkIsQUFGSyxBQUVNO0FBRk4sQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBbEJxQixBQTJFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWxleC9CbG9ja2NoYWluRGV2L0RlY1JldmlldyJ9