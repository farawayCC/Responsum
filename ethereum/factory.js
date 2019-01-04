import web3 from './web3';
import ProductFactory from './build/ProductFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ProductFactory.interface),
  '0x890b7b45471a6a288dff8b2af4ebaf7ac7e623c0'
);

export default instance;
