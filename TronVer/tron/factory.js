import tronWeb from './tronweb';
import ProductFactory from './build/ProductFactory.json';

export default () => {
  return new tronWeb.contract().at('TNc9kFnhjjZj8EaUvgFyYkXZbh1d4574v7');
  // return new tronWeb.trx.getContract("TNc9kFnhjjZj8EaUvgFyYkXZbh1d4574v7");
};
