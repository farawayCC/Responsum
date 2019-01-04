import TronWeb from 'tronweb';

// const TRONGRID_API = 'https://api.shasta.trongrid.io'; //change to 'https://api.trongrid.io' to get main net
// const privateKey = '74EB7CE66DD094F41232B5A756AB782D8840FF7C6D97C388C8B61407502A651F';

const HttpProvider = TronWeb.providers.HttpProvider;
// Full node http endpoint
const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
// Solidity node http endpoint
const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
// // Contract events http endpoint
const eventServer = "https://api.shasta.trongrid.io";
// // Private key of oracle
const privateKey = 'b815adfd6ef133d5a878869cb3a2b31f32d4c1481132a71300c3e125be0ab1a1';
//
// // Create instance of TronWeb
// const tronWeb = new TronWeb(
//     fullNode,
//     solidityNode,
//     eventServer,
//     privateKey
// );

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

export default tronWeb;
