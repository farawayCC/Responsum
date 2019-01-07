import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Button, Divider, Container, Header, Rating }
  from 'semantic-ui-react';
import Layout from '../../components/Layout';
// import Product from '../../tron/product';
// import ReviewForm from '../../components/ReviewForm';
// import ReviewCards from '../../components/ReviewCards';
import ProductRender from '../../components/ProductRender';

import tronWeb from '../../tron/tronweb';
import { Router } from '../../routes';
import Utils from '../../tron/utils/index';


class ProductShow extends Component {
  state = {
    tronWeb: {
        installed: false,
        loggedIn: false
    },
    products: []
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
      this.fetchProducts()
    }

    static async getInitialProps(props) {
      //Get base values
      const address = props.query.address;

      return {
        address: address
      };
    }

  async fetchProducts() {
    const {
      address
    } = this.props;
    this.setState({
        products: [await Utils.fetchProduct(address)]
    });
    console.log("this.state.products after fetching" + this.state.products);
  }

  // renderProduct() {
  //   const {
  //     products
  //   } = this.state
  //
  //   console.log(products);
  //   return (
  //     <ProductRender
  //       photoLink={products[0].photoLink}
  //       name={products[0].name}
  //       avgRating={products[0].avgRating}
  //       category={products[0].category}
  //       reviewsCount={0}
  //       address={products[0].address}
  //     />
  //     <h1>fdssdf</h1>
  //   );
  // }

  renderProduct() {
    const {
      products
    } = this.state

    console.log(products);
    return (
      // <ProductRender
      //   photoLink={products[0].name}
      //   name={products[0].name}
      //   avgRating={products[0].avgRating}
      //   category={products[0].category}
      //   reviewsCount={0}
      //   address={this.props.address}
      // />
      <h1>product</h1>
    );
  }
  renderReviews() {
    // const {
    //   headers,
    //   texts,
    //   rates,
    //   images,
    //   creators,
    //   address
    // } = this.props;
    // let items = [];
    // for (let index in headers) {
    //   items.push({
    //     header: headers[index],
    //     text: texts[index],
    //     rate: rates[index],
    //     photoLink: images[index],
    //     author: creators[index]
    //   });
    // }
    // return (
    //     <ReviewCards items={items} address={address} />
    // );
    return (<h3>FHKUJ</h3>);
  }

  render() {
    const { name, address } = this.props;
    return (
      <Layout>
        <h3>{name} - review</h3>
        <Grid>
          <Grid.Row>
            {this.renderProduct()}
          </Grid.Row>

          {this.renderReviews()}
        </Grid>
      </Layout>
    );
  }
}

export default ProductShow;
