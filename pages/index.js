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

    console.log("----------------------");
    console.log(productsAddresses);
    console.log("----------------------");

    //for each product we get a header, using product addresses
    const headers = [];
    for (var i = 0; i < productsAddresses.length; i++) {
      const product = Product(productsAddresses[i]);
      const name = await product.methods.name().call;
      console.log("----...--");
      console.log(name);
      console.log("----...--");
      headers.push(name);
    }

    return {
      headers: headers,
      addresses: productsAddresses
    };
  }

  renderProducts() {
    const { headers, addresses } = this.props;

    console.log("----------------------");
    console.log(this.props);
    console.log("----------------------");
    const items = [
      {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
      },
      {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        meta: 'ROI: 34%',
      },
      {
        header: 'Project Report - June',
        description:
          'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
        meta: 'ROI: 27%',
      },
    ]

    // for (var i = 0; i < headers.length; i++) {
    //   items.push({
    //     header: headers[i],
    //     description: (
    //         <Link route={`/products/${addresses[i]}`}>
    //           <a>View Product</a>
    //         </Link>
    //     ),
    //     fluid: true //Make a card stretch through entire screen. From left to right
    //   });
    // }


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
