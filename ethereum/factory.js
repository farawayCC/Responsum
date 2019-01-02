import web3 from './web3';
import ProductFactory from './build/ProductFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ProductFactory.interface),
  '0x242a451d7305ef79173bf9758826f64632b21c6f'
);

export default instance;
