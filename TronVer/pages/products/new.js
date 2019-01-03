import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    name: '',
    category: '',
    photoLink: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createProduct(
          this.state.name,
          this.state.category,
          this.state.photoLink)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    const mainCategories = [
      { key: 'b', text: 'Beauty', value: 'beauty' },
      { key: 'c', text: 'Cars', value: 'cars' },
      { key: 'f', text: 'For Child', value: 'for_child' },
      { key: 'o', text: 'Other', value: 'other' }
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
