'use strict';

var routes = require('next-routes')();

routes.add('/products/new', '/products/new').add('/products/:address', '/products/show').add('/products/:address/reviews', '/products/reviews/index').add('/products/:address/reviews/new', '/products/reviews/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGlCQUN3QixBQUR4QixpQkFFRyxBQUZILElBRU8sQUFGUCxzQkFFNkIsQUFGN0Isa0JBR0csQUFISCxJQUdPLEFBSFAsOEJBR3FDLEFBSHJDLDJCQUlHLEFBSkgsSUFJTyxBQUpQLGtDQUl5QyxBQUp6Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FsZXgvQmxvY2tjaGFpbkRldi9EZWNSZXZpZXcifQ==