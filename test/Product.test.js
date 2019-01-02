const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/ProductFactory.json');
const compiledProduct = require('../ethereum/build/Product.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

    await factory.methods.createProduct('Test name', 'Test category', 'Test image link').send({
      from: accounts[0],
      gas: '1000000'
    });

    [campaignAddress] = await factory.methods.getDeployedProducts().call();
    campaign = await new web3.eth.Contract(
      JSON.parse(compiledCampaign.interface),
      campaignAddress
    );
});

describe('Products', () => {
  it('deploys a factory and a product', () => {
    assert.ok(factory.options.address);
    assert.ok(product.options.address);
  });

  it('marks caller as the product creator', async () => {
    const author = await product.methods.creator().call();
    assert.equal(accounts[0], author);
  });

  it('allows people to create reviews and marks them as authors', async () => {
    await product.methods.createReview("Header", "Text", 5, "https://i.ytimg.com/vi/uZA6pIrwm-I/maxresdefault.jpg")
    .send({
      from: accounts[1]
    });
    const reviews = await campaign.methods.reviews().call();
    const isAuthor = (reviews[0].author == accounts[1])
    assert(isAuthor);
  });

  it('allows to upvote review', async () => {
    await product.methods
      .upvoteReview(0)
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    const reviews = await campaign.methods.reviews().call();
    const isInVoters = reviews[0].voters == accounts[0]
    assert(isInVoters);
  });
});
