import React from 'react'
import { Grid, Image, Container, Header, Rating } from 'semantic-ui-react'
import { Link } from '../routes'
import ReviewCard from '../components/ReviewCard';

export default props => {
  const finalElements = [];
  for (let index in props.items) {
    finalElements.push(
      <ReviewCard
        key={index}
        review={props.items[index]}
        address={props.address}
        index={index}/>
    );
  }

  return finalElements;
};
