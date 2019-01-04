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
const privateKey = 'E62CDE753B273B76AEA4147AD6D97C2B63776933686EAB4B75D98EBA5679FE78';
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
