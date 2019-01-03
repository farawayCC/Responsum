import React from 'react'
import { Grid, Image, Container, Header, Rating, Button } from 'semantic-ui-react'
import { Link } from '../routes'

export default props => {
  const finalElement = (
    <Grid divided>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={props.photoLink} />
        </Grid.Column>

        <Grid.Column width={8}>
          <Header as='h1'>{props.name}</Header>
          <Rating icon='star' defaultRating={props.avgRating} maxRating={5} disabled />
          <Header as='h3'>Category: {props.category}</Header>
          <Header as='h3'>Reviews Count: {props.reviewsCount}</Header>
        </Grid.Column>
        <Grid.Column width={3}>
          <Link route={`/products/${props.address}/reviews/new`}>
            <a>
              <Button
                floated="right"
                content="Create Review"
                icon="add circle"
                primary
              />
            </a>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
  return finalElement;
};
