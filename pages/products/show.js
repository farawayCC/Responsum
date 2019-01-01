import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Button, Divider, Container, Header, Rating }
  from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Product from '../../ethereum/product';
import web3 from '../../ethereum/web3'
import ReviewForm from '../../components/ReviewForm';
import ReviewCard from '../../components/ReviewCard';

import { Link } from '../../routes';

class ProductShow extends Component {
  static async getInitialProps(props) {
    const product = Product(props.query.address); //that props, if i get it right, we get from routes.js wildcard

    // const summary = await product.methods.getSummary().call();
    const address = props.query.address;
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

    let sum = 0;
    for (var j = 0; j < reviewsCount; j++) {
      sum=parseInt(sum)+parseInt(reviews[j].rate);
    }
    const avgRating=sum/reviewsCount;

    return {
      reviewsCount: reviewsCount,
      reviews: reviews,
      avgRating: avgRating,
      name: name,
      photoLink: photoLink,
      category: category, //set by webpage from list of available categories
      creator: creator,
      address: address
    };
  }


  renderProduct() {
    const {
      reviewsCount,
      name,
      photoLink,
      category, //set by webpage from list of available categories
      creator,
      avgRating
    } = this.props;

    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image src={photoLink} />
          </Grid.Column>

          <Grid.Column width={11}>
            <Container text>
              <Header as='h1'>{name}</Header>
              <Rating icon='star' defaultRating={avgRating} maxRating={5} disabled />
              <Header as='h3'>Category: {category}</Header>
              <Header as='h3'>Reviews Count: {reviewsCount}</Header>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }


  renderReviews() {
    const {
      reviewsCount,
      reviews,
      address
    } = this.props;

    const reviewCards = [];
    let ijk = 0;
    reviews.map(function(review) {
      reviewCards.push(
        <Divider />,
        <ReviewCard review={review} address={address} index={ijk}/>
      );
      ijk = ijk+1;
    });

    return reviewCards.reverse();
  }

  render() {
    const { name, address } = this.props;
    return (
      <Layout>

        <h3>{name} - review</h3>

        <Grid>
            <Grid.Column width={16}>
              <div>
                {this.renderProduct()}
              </div>
            </Grid.Column>

            <Grid.Column width={16}>
            <Link route={`/products/${address}/reviews/`}>
              <a>{this.renderReviews()}</a>
            </Link>
            </Grid.Column>

        </Grid>
      </Layout>
    );
  }
}

export default ProductShow;
