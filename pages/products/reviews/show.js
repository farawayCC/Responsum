import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Button, Divider, Container, Header, Rating }
  from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Product from '../../../ethereum/product';
import web3 from '../../../ethereum/web3'
import ReviewForm from '../../../components/ReviewForm';
import ReviewCard from '../../../components/ReviewCard';
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

    // console.log(review)

    return {
      review: review,
      productName: productName,
      productPhotoLink: productPhotoLink,
      productCategory: productCategory,
      productCreator: productCreator,
      productAvgRating: productAvgRating,
      address: props.query.address
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

  renderReview() {
    const {
      review,
      address
    } = this.props;
    // console.log(review);
    return <ReviewCard
      key={0}
      review={review}
      address={address}
      index={0}
    />;
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
              {this.renderReview()}
            </Grid.Column>

        </Grid>
      </Layout>
    );
  }
}

export default ReviewShow;
