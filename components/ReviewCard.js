import React from 'react'
import { Grid, Image, Container, Header, Rating } from 'semantic-ui-react'

export default props => {
  const finalElement = (
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={props.review.photoLink} />
            </Grid.Column>

            <Grid.Column width={12}>
              <Header as='h3'>Author address: {props.review.author}</Header>
              <Header as='h1'>{props.review.header}</Header>
              <Rating icon='star' defaultRating={props.review.rate} maxRating={5} disabled />
              <Header as='h3'>{props.review.text}</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
  );
  // console.log(finalElement);
  return finalElement;
};

/*
image={reviews[i].photoLink}
header={reviews[i].header}
text={reviews[i].text}
rate={reviews[i].rate}
author={reviews[i].author}
*/
