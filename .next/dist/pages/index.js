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
          description: _react2.default.createElement(_routes.Link, { route: '/products/' + addresses[index], __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiUHJvZHVjdCIsIkxheW91dCIsIkxpbmsiLCJQcm9kdWN0SW5kZXgiLCJwcm9wcyIsImhlYWRlcnMiLCJhZGRyZXNzZXMiLCJpdGVtcyIsImluZGV4IiwicHVzaCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyUHJvZHVjdHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRQcm9kdWN0cyIsImNhbGwiLCJwcm9kdWN0c0FkZHJlc3NlcyIsImkiLCJsZW5ndGgiLCJwcm9kdWN0IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7cUNBdUJhO21CQUNnQixLQURoQixBQUNxQjtVQURyQixBQUNQLGlCQURPLEFBQ1A7VUFETyxBQUNFLG1CQURGLEFBQ0UsQUFHakI7O1VBQUksUUFBSixBQUFZLEFBQ1o7V0FBSyxJQUFMLEFBQVMsU0FBVCxBQUFrQixTQUFTLEFBQ3pCO2NBQUEsQUFBTTtrQkFDSSxRQURDLEFBQ0QsQUFBUSxBQUNoQjt1Q0FDUSxBQUFDLDhCQUFLLHNCQUFvQixVQUExQixBQUEwQixBQUFVO3dCQUFwQzswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFKRCxBQUdELEFBQ0UsQUFHVjtpQkFQUyxBQU9GLEtBUFQsQUFBVyxBQU9HLEFBRWY7QUFUWSxBQUNUO0FBU0o7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUVaOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtjQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7OzJDQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFFQSxrQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGOztvQkFBQTtzQkFMTixBQUdFLEFBQ0UsQUFDRSxBQVFIO0FBUkc7QUFDRSxpQkFSWixBQUNFLEFBQ0UsQUFhRyxBQUFLLEFBSWI7Ozs7Ozs7Ozs7Ozt1QkFyRWlDLGtCQUFBLEFBQVEsUUFBUixBQUFnQixzQixBQUFoQixBQUFzQzs7bUJBQWhFO0EsNkNBRU47O0FBQ0E7QUFDQTtBQUVBOztBQUNNO0EsMEJBQ0csQSxBQURPO0Esb0IsQUFDSDs7O3NCQUFHLElBQUksa0IsQUFBa0I7OztBQUM5Qjs7QSwwQkFBVSx1QkFBUSxrQixBQUFSLEFBQVEsQUFBa0I7O3VCQUN2QixRQUFBLEFBQVEsUUFBUixBQUFnQixPLEFBQWhCLEFBQXVCOzttQkFBcEM7QSxnQ0FDTjs7d0JBQUEsQUFBUSxLQUFSLEFBQWE7O21CQUgrQjtBOzs7Ozs7MkJBTXZDLEFBQ0ksQUFDVDs2QixBQUZLLEFBRU07QUFGTixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFsQnFCLEFBMkUzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BbGV4L0Jsb2NrY2hhaW5EZXYvRGVjUmV2aWV3In0=