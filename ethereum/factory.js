import web3 from './web3';
import ProductFactory from './build/ProductFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ProductFactory.interface),
  '0xd05446083329f4d1f223a2ddab8d1a64ef61dd29'
);

export default instance;
