import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Button, Divider, Container, Header, Rating }
  from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Product from '../../../ethereum/product';
import web3 from '../../../ethereum/web3'
import ReviewForm from '../../../components/ReviewForm';
import ReviewCards from '../../../components/ReviewCards';
import ProductRender from '../../../components/ProductRender';

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
    const productName = await product.methods.name().call();
    const productPhotoLink = await product.methods.photoLink().call();
    const productCategory = await product.methods.category().call();
    const productCreator = await product.methods.creator().call();

    //get average rating
    let sum = 0;
    for (var j = 0; j < reviewsCount; j++) {
      sum=parseInt(sum)+parseInt(reviews[j].rate);
    }
    const productAvgRating=sum/reviewsCount;

    return {
      review: review,
      productName: productName,
      productPhotoLink: productPhotoLink,
      productCategory: productCategory,
      productCreator: productCreator,
      productAvgRating: productAvgRating
    };
  }

  renderProduct() {
    const {
      reviewsCount,
      productName,
      productPhotoLink,
      productCategory, //set by webpage from list of available categories
      productCreator,
      productAvgRating
    } = this.props;

    return (
      <ProductRender
        photoLink={productPhotoLink}
        name={productName}
        avgRating={productAvgRating}
        category={productCategory}
        reviewsCount={reviewsCount}
      />
    );
  }

  render() {
    const {} = this.props
    return (
      <Layout>

        <h3>review</h3>

        <Grid>
            <Grid.Column width={16}>
              {this.renderProduct()}
            </Grid.Column>

            <Grid.Column width={16}>
            </Grid.Column>

        </Grid>
      </Layout>
    );
  }
}

export default ReviewShow;
