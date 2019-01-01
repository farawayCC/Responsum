import web3 from './web3';
import ProductFactory from './build/ProductFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ProductFactory.interface),
  '0x78b09be86f95a1d5837652594f5aa93a5d7a04ef'
);

export default instance;
