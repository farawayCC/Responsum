'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Product = require('./build/Product.json');

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Product2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxwcm9kdWN0LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJQcm9kdWN0IiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEIsQUFFQTs7Ozs7O2tCQUFlLG1CQUFXLEFBQ3hCO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLGtCQUFRLEFBQW5CLEFBQXRCLFlBQXFELEFBQXJELEFBQVAsQUFDRDtBQUZEIiwiZmlsZSI6InByb2R1Y3QuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWxleC9CbG9ja2NoYWluRGV2L0RlY1JldmlldyJ9