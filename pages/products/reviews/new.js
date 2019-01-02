import React, { Component } from 'react';
import { Button, Form, Input, Message, Header, Rating }
  from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Product from '../../../ethereum/product';
import web3 from '../../../ethereum/web3'
import ReviewForm from '../../../components/ReviewForm';
import ReviewCards from '../../../components/ReviewCards';
import { Router } from '../../../routes';

import { Link } from '../../../routes';

class ProductShow extends Component {
  state = {
    header: '',
    text: '',
    rate: '',
    photoLink: '',
    loading: false
  };

  static async getInitialProps(props) {
    const product = Product(props.query.address);

    return {
      product: product,
      address: props.query.address
    };
  }

  onSubmit = async event => {
    event.preventDefault();

    const {product, address} = this.props;

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      console.log(product)
      await product.methods
        .createReview(
          this.state.header,
          this.state.text,
          this.state.rate,
          this.state.photoLink)
        .send({
          from: accounts[0]
        });

      Router.pushRoute(
        `/products/${address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    const {product} = this.props;
    return (
      <Layout>
        <h3>Create a Review</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Header</label>
            <Input
              value={this.state.header}
              onChange={event =>
                this.setState({ header: event.target.value })}
              placeholder='Header for your review'
            />
          </Form.Field>

          <Form.Field>
            <Rating icon='star'
              defaultRating={0}
              maxRating={5}
              onChange={(e, { value }) =>
               this.setState({ rate: value })}
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

          <Form.Field>
            <Form.TextArea
              label='Main text'
              placeholder='Describe your experience with this thing'
              value={this.state.text}
              onChange={event =>
                this.setState({ text: event.target.value })}
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

export default ProductShow;
