const routes = require('next-routes')();

routes
  .add('/products/new', '/products/new')
  .add('/products/:address', '/products/show')
  .add('/products/:address/reviews/new', '/products/reviews/new')
  .add('/products/:address/reviews/:index', '/products/reviews/show');

module.exports = routes;
