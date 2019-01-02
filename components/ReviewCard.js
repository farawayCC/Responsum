import React from 'react'
import { Grid, Image, Container, Header, Rating } from 'semantic-ui-react'
import { Link } from '../routes'

export default props => {
  // console.log("-----------------------------------")
  // console.log(props.review);
  const finalElement = (
    <Grid celled>
      <Link route={`/products/${props.address}/reviews/${props.index}`}>
        <a>
          <Grid.Column width={2}>
              <Image src={props.review.photoLink} />
          </Grid.Column>

          <Grid.Column width={8}>
            <Container>
              <Header as='h1'> <a>{props.review.header}</a> </Header>
              <Rating icon='star' defaultRating={props.review.rate} maxRating={5} disabled />
              <Header as='h3'>{props.review.text}</Header>
              <Header as='h3' >Author address: {props.review.author}</Header>
            </Container>
          </Grid.Column>
      </a>
      </Link>
    </Grid>
  );
  return finalElement;
};
