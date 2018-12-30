const routes = require('next-routes')();

routes
  .add('/products/new', '/products/new')
  .add('/products/:address', '/products/show')
  .add('/products/:address/reviews', '/products/reviews/index')
  .add('/products/:address/reviews/new', '/products/reviews/new');

module.exports = routes;
