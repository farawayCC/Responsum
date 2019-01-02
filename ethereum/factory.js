import web3 from './web3';
import ProductFactory from './build/ProductFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ProductFactory.interface),
  '0xD9893570FAc18Caa968802a9532E619633e9b4fC'
);

export default instance;
