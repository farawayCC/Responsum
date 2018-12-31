import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Product from '../ethereum/product';
import Layout from '../components/Layout';
import { Link } from '../routes';

class ProductIndex extends Component {
  static async getInitialProps() {
    //Get an array of products addresses
    const productsAddresses = await factory.methods.getDeployedProducts().call();

    // console.log("----------------------");
    // console.log(productsAddresses);
    // console.log("----------------------");

    //for each product we get a header, using product addresses
    const headers = [];
    for (var i = 0; i < productsAddresses.length; i++) {
      const product = Product(productsAddresses[i]);
      const name = await product.methods.name().call();
      headers.push(name);
    }

    return {
      headers: headers,
      addresses: productsAddresses
    };
  }

  renderProducts() {
    const { headers, addresses } = this.props;


    let items = [];
    for (let index in headers) {
      items.push({
        header: headers[index],
        description: (
                <Link route={`/products/${addresses[index]}`}>
                  <a>View Product</a>
                </Link>
            ),
        fluid: true //Make entire screen. From left to right
      });
    }
    console.log("Hi man");

    // items = [
    //   {
    //     header: 'Project Report - April',
    //     description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    //     meta: 'ROI: 30%',
    //   }];
    console.log(items);

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
