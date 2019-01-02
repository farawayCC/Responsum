import web3 from './web3';
import ProductFactory from './build/ProductFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ProductFactory.interface),
  '0x28ef0f85e15f7c1084e5d28df04834109095f4e0'
);

export default instance;
