import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //Has metamask and in browser
  web3 = new Web3(window.web3.currentProvider);
} else {
  //server OR no metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/40665b54b6c04deeb87c66e045626409'
  );
  web3 = new Web3(provider);
}

export default web3;
