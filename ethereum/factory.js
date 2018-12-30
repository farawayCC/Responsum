import web3 from './web3';
import ProductFactory from './build/ProductFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ProductFactory.interface),
  '0x65A61D84EC86550311d4002E18F009D3A5B7600a'
);

export default instance;
