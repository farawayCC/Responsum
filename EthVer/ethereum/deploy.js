const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/ProductFactory.json');

const provider = new HDWalletProvider(
  'purchase idle erosion foam relief rose century turtle bulb correct country melt',
  'https://rinkeby.infura.io/v3/40665b54b6c04deeb87c66e045626409'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface))
      .deploy({ data: '0x' + compiledFactory.bytecode })
      .send({from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();
