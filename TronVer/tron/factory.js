import tronWeb from './tronweb';
import ProductFactory from './build/ProductFactory.json';

export default () => {
  return new new tronWeb.contract().at('TFM68QBt4bD9YqYCxp4BhyaUYn4uzQXrBJ');
};
