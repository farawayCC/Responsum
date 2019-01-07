import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Product from '../tron/product';
import factory from '../tron/build/ProductFactory.json';
import tronWeb from '../tron/tronweb';

import Layout from '../components/Layout';
import { Link } from '../routes';
import Utils from '../tron/utils/index';

class ProductIndex extends Component {
  state = {
    tronWeb: {
        installed: false,
        loggedIn: false
    },
    products: []
  }

  static async getInitialProps() {
    return {};
  }

  async componentDidMount() {
    console.log("Starting componentDidMount(). window.tronWeb.ready = " + window.tronWeb.ready);
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
                const TRONGRID_API = "https://api.shasta.trongrid.io";

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

    Utils.setTronWeb(window.tronWeb);
    this.fetchProducts();
  }

  componentWillUnmount() {

  }

  async fetchProducts() {
      this.setState({
          products: await Utils.fetchProducts()
      });
      console.log("After fetchProducts() execution. this.state.products = " + this.state.products);
  }

  renderProducts() {
      const {
        products
      } = this.state
      console.log("In renderProducts() we got Products array: " + products);
      const items = [];
      for (let index in products) {
        items.push({
          header: products[index].name,
          description: (
                  <Link route={`/products/${products[index].address}`}>
                    <a>View Product</a>
                  </Link>
              ),
          meta: "Avg rating: "+products[index].avgRating,
          fluid: true //Make entire screen. From left to right
        });
      }

    return <Card.Group items={items} />;
  }

  render() {
    console.log("Starting render()");
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
            {this.renderProducts()}
        </div>
      </Layout>
    );
  }
}

export default ProductIndex;
