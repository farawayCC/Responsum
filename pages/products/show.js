import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Product from '../../ethereum/product';
import web3 from '../../ethereum/web3'
import ReviewForm from '../../components/ReviewForm';
import { Link } from '../../routes';

class ProductShow extends Component {
  static async getInitialProps(props) {
    const product = Product(props.query.address); //that props, if i get it right, we get from routes.js wildcard

    // const summary = await product.methods.getSummary().call();
    const name = await product.methods.name().call();
    const photoLink = await product.methods.photoLink().call();
    const category = await product.methods.category().call();
    const creator = await product.methods.creator().call();

    const reviewsCount = await product.methods.getReviewsCount().call();
    const reviews = await Promise.all(
      Array(parseInt(reviewsCount))
        .fill()
        .map((element, index) => {
          return product.methods.reviews(index).call();
        })
    );
    for (var j = 0; j < reviewsCount; j++) {

    }


    // return{};
    return {
      // address: props.query.address,
      // // reviews: summary[0],
      // name: summary[1],
      // photoLink: summary[2],
      // category: summary[3],
      // creator: summary[4]
      name: name,
      photoLink: photoLink,
      category: category, //set by webpage from list of available categories
      creator: creator
    };
  }

  renderReviews() {
    return ;
  }

  renderCards() {
    const {
      // reviews,
      name,
      photoLink,
      category, //set by webpage from list of available categories
      creator
    } = this.props;

    const items = [
      {
        header: name,
        meta: 'Name of a product',
        description: ''
      },
      {
        header: category,
        meta: 'Category',
        description: 'Chosen from a drop-down list'
      },
      {
        header: creator,
        meta: 'Address of Creator',
        style: { overflowWrap: 'break-word' },
        description: 'The creator created this product and can delete it before anybody will review it'
      },
      {
        header: photoLink,
        meta: 'Link to a photo',
        description: 'Will be readed by web page and transformed to actual photo'
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Show a Product</h3>

        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>

            <Grid.Column width={6}>
              <ReviewForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/products/${this.props.address}/reviews`}>
                <a>
                  <Button primary>View Reviews</Button >
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default ProductShow;
