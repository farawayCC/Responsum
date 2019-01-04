# Dec Review

  This is a Decentralized feedback platform on the Tron network. On our platform, the authors will receive a reward for good reviews, and the rating depends on the activity not only on the site but also on the Trone network.
  The platform will allow companies to get good feedback by allocating a small budget. We offer a win-win system when the manufacturer receives high-quality information about their products+great advertisement, and the authors of reviews are getting honestly paid for their efforts. The team believes that this project will perfectly fit into the ecosystem of the Tron and help with the spreading of such great technology.

# Current state

Nowadays project is under rapid development. Core functionality is already presented using Ethereum blockchain (link in repository's head), but we are migrating to Tron network because during development we found out that eth blockchain is too slow for that kind of project and require a lot of money to proceed transactions (create reviews). It will give our product more usability because with it we can provide a solution to review products without a need of going to cryptocurrency exchange. You can learn more about this great blockchain at https://developers.tron.network/docs/getting-started 

# How to try
### Note

Currently project is in beta so it is runned on rinkeby network. Don't forget to switch Metamask to use Rinkeby test network 

## Our web page
http://decreview.ngrok.io

It can be a bit slow and unstable because run on an computer in a cupboard. We think that it is suitable for development. So now we recommend running your own instance on localhost using instruction below

## Installing on localhost

Clone repository on your computer
```
git clone https://github.com/farawayCC/DecReview
```

Install npm

https://www.npmjs.com/get-npm

Install packages
```
npm install --save web3 solc@0.4.17 next@4.2.3 ganache-cli react react-dom semantic-ui-react fs-extra truffle-hdwallet-provider
```

## Running on localhost

Navigate to root directory DecReview/

```
cd DevReview
```

Start server.js

```
npm run dev
```

Navigate to http://localhost:3000 in your browser


## Authors

* **Alexey Klygin** - *Initial work* - [farawayCC](https://github.com/farawayCC)
