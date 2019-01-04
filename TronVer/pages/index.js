import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Product from '../tron/product';
import factory from '../tron/build/ProductFactory.json';
import tronWeb from '../tron/tronweb';

import Layout from '../components/Layout';
import { Link } from '../routes';
import Swal from 'sweetalert2';
import Utils from '../tron/utils/index';

class ProductIndex extends Component {
  async componentDidMount() {

  }
  static async getInitialProps() {
        //This will create a new Factory contract for you
    // let factoryContract = await tronWeb.contract().new({
    //     abi: Utils.factoryAbi,
    //     bytecode: Utils.factoryBytecode,
    //     feeLimit: 1000000000
    // });
    // console.log(factoryContract);


    const _factory = await tronWeb.trx.getContract('TNc9kFnhjjZj8EaUvgFyYkXZbh1d4574v7');
    console.log("_factory: \n" + _factory + "\n---------------------END_OF_ _factory------------------------------  ");
    const products = false;//await factory.getDeployedProducts().call();
    return { products };
  }

  async componentDidMount() {
      await new Promise(resolve => {
          const tronWebState = {
              installed: !!window.tronWeb,
              loggedIn: window.tronWeb && window.tronWeb.ready
          };

          if(tronWebState.installed) {
              this.setState({
                  tronWeb:
                  tronWebState
              });

              return resolve();
          }

          let tries = 0;

          const timer = setInterval(() => {
              if(tries >= 10) {
                  const TRONGRID_API = 'https://api.trongrid.io';

                  window.tronWeb = new TronWeb(
                      TRONGRID_API,
                      TRONGRID_API,
                      TRONGRID_API
                  );

                  this.setState({
                      tronWeb: {
                          installed: false,
                          loggedIn: false
                      }
                  });

                  clearInterval(timer);
                  return resolve();
              }

              tronWebState.installed = !!window.tronWeb;
              tronWebState.loggedIn = window.tronWeb && window.tronWeb.ready;

              if(!tronWebState.installed)
                  return tries++;

              this.setState({
                  tronWeb: tronWebState
              });

              resolve();
          }, 100);
      });

      if(!this.state.tronWeb.loggedIn) {
          // Set default address (foundation address) used for contract calls
          // Directly overwrites the address object as TronLink disabled the
          // function call
          window.tronWeb.defaultAddress = {
              hex: window.tronWeb.address.toHex(FOUNDATION_ADDRESS),
              base58: FOUNDATION_ADDRESS
          };

          window.tronWeb.on('addressChanged', () => {
              if(this.state.tronWeb.loggedIn)
                  return;

              this.setState({
                  tronWeb: {
                      installed: true,
                      loggedIn: true
                  }
              });
          });
      }

      await Utils.setTronWeb(tronWeb);

      this.startEventListener();
      this.fetchMessages();
  }

  renderProducts() {
    const items = this.props.products.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Product</a>
          </Link>
        ),
        meta: ("Avg rating: "+4.5),
        fluid: true
      };
    });

      //DELETE THIS PLS
    items.push({
        header: '!! TEST Kuss',
        description: 'Nice kussi',
        meta: ("Avg rating: "+4.5),
        fluid: true
      },
      {
        header: '!! TEST BMW 520',
        description: 'Nice Car',
        meta: ("Avg rating: "+4.6),
        fluid: true
      }
    )
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Last Products</h3>

          <Link route="/products/new">
            <a>
              <Button
                floated="right"
                content="Create Product"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderProducts}
        </div>
      </Layout>
    )
  }
}

export default ProductIndex;
