import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Button, Divider, Container, Header, Rating }
  from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Product from '../../ethereum/product';
import web3 from '../../ethereum/web3'
import ReviewForm from '../../components/ReviewForm';
import ReviewCards from '../../components/ReviewCards';

import { Link } from '../../routes';

class ProductShow extends Component {
  static async getInitialProps(props) {
    const product = Product(props.query.address); //that props, if i get it right, we get from routes.js wildcard

    //Get base values
    const address = props.query.address;
    const name = await product.methods.name().call();
    const photoLink = await product.methods.photoLink().call();
    const category = await product.methods.category().call();
    const creator = await product.methods.creator().call();

    //get reviews
    const reviewsCount = await product.methods.getReviewsCount().call();
    const reviews = await Promise.all(
      Array(parseInt(reviewsCount))
        .fill()
        .map((element, index) => {
          return product.methods.reviews(index).call();
        })
    );

    //get average rating
    let sum = 0;
    for (var j = 0; j < reviewsCount; j++) {
      sum=parseInt(sum)+parseInt(reviews[j].rate);
    }
    const avgRating=sum/reviewsCount;

    //get reviews compononets
    const headers = [];
    const texts = [];
    const rates = [];
    const images = [];
    const creators = [];


    for (var i = 0; i < reviewsCount; i++) {
      headers.push(reviews[i].header);
      texts.push(reviews[i].text);
      rates.push(reviews[i].rate);
      images.push(reviews[i].photoLink);
      creators.push(reviews[i].author);
    }

    return {
      reviewsCount: reviewsCount,
      reviews: reviews,
      avgRating: avgRating,
      name: name,
      photoLink: photoLink,
      category: category, //set by webpage from list of available categories
      creator: creator,
      address: address,

      headers: headers,
      texts: texts,
      rates: rates,
      images: images,
      creators: creators
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
    // const {
    //   reviewsCount,
    //   reviews,
    //   address
    // } = this.props;
    //
    // const reviewCards = [];
    // let ijk = 0;
    // reviews.map(function(review) {
    //   reviewCards.push(
    //     <Divider />,
    //     <ReviewCard review={review} address={address} index={ijk}/>
    //   );
    //   ijk = ijk+1;
    // });
    // return reviewCards.reverse();


    const {
      headers,
      texts,
      rates,
      images,
      creators } = this.props;
    let items = [];
    for (let index in headers) {
      items.push({
        header: headers[index],
        texts: texts[index],
        rates: rates[index],
        images: images[index],
        creators: creators[index]
      });
    }
    return <ReviewCards items={items} />;

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
