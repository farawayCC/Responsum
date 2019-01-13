import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../tron/factory';
import tronWeb from '../../tron/tronweb';
import { Router } from '../../routes';
import Utils from '../../tron/utils/index';
import deploy_product from '../../scripts/deploy_product';


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
      //Create new Product smart-contract
      console.log("Trying to create a contract");
      let contract_instance = await tronWeb.contract()
        .new({
          abi: Utils.productAbi,
          bytecode:Utils.productBytecode,
          feeLimit: 1000000000,
          callValue : 0,
          userFeePercentage : 1,
          parameters:[this.state.name, this.state.category, this.state.photoLink, window.tronWeb.defaultAddress.base58]
        })
      console.log("Contract created: "+contract_instance.address);
      // console.log(window.tronWeb.defaultAddress.base58);
      //console.log("contract_instance.address"+contract_instance.address);

      // Utils.contract.registerNewProduct(contract_instance.address)
      //   .send({
      //     feeLimit: 1000000000,
      //     shouldPollResponse: true,
      //     callValue: 0,
      //     origin_energy_limit: 10000000
      //   }).catch(err => {
      //     console.log(err);
      //   });

      //

      // const deployedProducts = await Utils.contract.getDeployedProducts().call();
      // const lastProduct = deployedProducts[deployedProducts.length-1];
      // console.log("lastProduct address: "+lastProduct)
      // Router.pushRoute(`/products/${lastProduct}`);
      console.log("end");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    console.log("Switching off method .onSubmit.");

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
