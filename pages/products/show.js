import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Button, Divider, Container, Header, Rating }
  from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Product from '../../ethereum/product';
import web3 from '../../ethereum/web3'
import ReviewForm from '../../components/ReviewForm';
import ReviewCards from '../../components/ReviewCards';
import ProductRender from '../../components/ProductRender';

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
    // console.log(reviews[0]);
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
      <ProductRender
        photoLink={photoLink}
        name={name}
        avgRating={avgRating}
        category={category}
        reviewsCount={reviewsCount}
      />
    );
  }


  renderReviews() {
    const {
      headers,
      texts,
      rates,
      images,
      creators,
      address
    } = this.props;
    let items = [];
    for (let index in headers) {
      items.push({
        header: headers[index],
        text: texts[index],
        rate: rates[index],
        photoLink: images[index],
        author: creators[index]
      });
    }
    return <ReviewCards items={items} address={address} />;
  }

  render() {
    const { name, address } = this.props;
    return (
      <Layout>

        <h3>{name} - review</h3>

        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column >
              <div>
                {this.renderProduct()}
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column >
              {this.renderReviews()}
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Layout>
    );
  }
}

export default ProductShow;
