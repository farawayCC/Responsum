import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Button, Divider, Container, Header, Rating }
  from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Product from '../../../ethereum/product';
import web3 from '../../../ethereum/web3'
import ReviewForm from '../../../components/ReviewForm';
import ReviewCards from '../../../components/ReviewCards';

import { Link } from '../../../routes';

class ReviewShow extends Component {
  static async getInitialProps(props) {
    const product = Product(props.query.address); //that props, if i get it right, we get from routes.js wildcard
    //get reviews
    const reviewsCount = await product.methods.getReviewsCount().call();
    const reviews = await Promise.all(
      Array(parseInt(reviewsCount))
        .fill()
        .map((element, index) => {
          return product.methods.reviews(index).call();
        })
    );
    const review = reviews[props.query.index];
    console.log(review)
    return {
      review: review
    };
  }

  render() {
    return (
      <Header as='h1'>
        <a>Haallloo</a>
      </Header>
    );
  }
}

export default ReviewShow;
