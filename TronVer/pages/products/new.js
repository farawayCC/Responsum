import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../tron/factory';
import tronWeb from '../../tron/tronweb';
import { Router } from '../../routes';
import Utils from '../../tron/utils/index';


class CampaignNew extends Component {
  state = {
    name: '',
    category: '',
    photoLink: '',
    errorMessage: '',
    loading: false
  };


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
    }

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      await Utils.contract.createProduct(
          this.state.name,
          this.state.category,
          this.state.photoLink)
          .send({
            feeLimit: 1000000000,
            shouldPollResponse: true,
            callValue: 0,
            origin_energy_limit: 10000000
          }).catch(err => {
            console.log(err);
          });

          const deployedProducts = await Utils.contract.getDeployedProducts().call();
          const lastProduct = deployedProducts[deployedProducts.length-1];
          console.log("lastProduct address: "+lastProduct)
          Router.pushRoute(`/products/${lastProduct}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    const mainCategories = [
      { key: 'b', text: 'Beauty', value: 'beauty' },
      { key: 'c', text: 'Cars', value: 'cars' },
      { key: 'fc', text: 'For Child', value: 'for_child' },
      { key: 'fh', text: 'For Home', value: 'for_home' },
      { key: 'e', text: 'Electronics', value: 'electronics' },
      { key: 's', text: 'Services', value: 'services' },
      { key: 'o', text: 'Other', value: 'other' },

    ];
    return (
      <Layout>
        <h3>Create a Product</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Name</label>
            <Input
              value={this.state.name}
              onChange={event =>
                this.setState({ name: event.target.value })}

              placeholder='Name of a Product'
            />
          </Form.Field>

          <Form.Field>
            <Form.Select fluid
            label='Category'
            options={mainCategories}
            placeholder='Choose a category for Product'
            value={this.state.category}
            onChange={(e, { value }) =>
             this.setState({ category: value })}
          />
          </Form.Field>

          <Form.Field>
            <label>Photo link</label>
            <Input
              value={this.state.photoLink}
              onChange={event =>
                this.setState({ photoLink: event.target.value })}
              placeholder='Paste here a link to a photo'
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
