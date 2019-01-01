import React from 'react'
import { Grid, Image, Container, Header, Rating } from 'semantic-ui-react'

export default props => {
  const finalElement = (
        <Grid>
            <Grid.Column width={4}>
                <Image src={props.review.photoLink} />
            </Grid.Column>

            <Grid.Column width={12}>
              <Header as='h1'>{props.review.header}</Header>
              <Rating icon='star' defaultRating={props.review.rate} maxRating={5} disabled />
              <Header as='h3'>{props.review.text}</Header>
              <Header as='h3' >Author address: {props.review.author}</Header>
            </Grid.Column>
        </Grid>
  );
  return finalElement;
};

/*
image={reviews[i].photoLink}
header={reviews[i].header}
text={reviews[i].text}
rate={reviews[i].rate}
author={reviews[i].author}
*/
