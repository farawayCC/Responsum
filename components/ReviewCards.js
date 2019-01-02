import React from 'react'
import { Grid, Image, Container, Header, Rating } from 'semantic-ui-react'
import { Link } from '../routes'
import ReviewCard from '../components/ReviewCard';

export default props => {
  // console.log(props);
  const finalElements = [];
  for (let index in props.items) {
    console.log("Hi");
    finalElements.push(
      <ReviewCard review={props.items[index]} />
    );
    // console.log(finalElements);
  }

  return finalElements;
};
