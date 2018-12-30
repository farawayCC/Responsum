import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Product from '../ethereum/product';
import Layout from '../components/Layout';
import { Link } from '../routes';

class ProductIndex extends Component {
  static async getInitialProps(props) {
    const product = Product(props.query.address);

    const summary = await product.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution : summary[0],
      balance : summary[1],
      requestsCount : summary[2],
      approversCount : summary[3],
      manager : summary[4]
    };
  }

  renderProducts() {
    const items = this.props.products.map(address => {
      return {
        header: address,
        description: (
            <Link route={`/products/${address}`}>
              <a>View Product</a>
            </Link>
        ),
        fluid: true //Make entire screen. From left to right
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Products</h3>

          <Link route="/products/new">
            <a>
              <Button
                floated="right"
                content="Create Product"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderProducts()}
        </div>
      </Layout>
    )
  }
}

export default ProductIndex;
