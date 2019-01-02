import React from 'react'
import { Grid, Image, Container, Header, Rating } from 'semantic-ui-react'
import { Link } from '../routes'

export default props => {
  const finalElement = (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={props.photoLink} />
        </Grid.Column>

        <Grid.Column width={11}>
          <Container text>
            <Header as='h1'>{props.name}</Header>
            <Rating icon='star' defaultRating={props.avgRating} maxRating={5} disabled />
            <Header as='h3'>Category: {props.category}</Header>
            <Header as='h3'>Reviews Count: {props.reviewsCount}</Header>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
  return finalElement;
};
