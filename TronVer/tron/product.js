import tronWeb from './tronweb';
import Product from './build/Product.json';

export default address => {
  return new tronWeb.contract().at(address);
};
