import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Product from '../tron/product';
import ProductFactory from '../tron/build/ProductFactory.json';
import tronWeb from '../tron/tronweb';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Swal from 'sweetalert2';
import Utils from '../tron/utils/index';

class ProductIndex extends Component {
  static async getInitialProps() {


        //This creates a new Factory contract for you

    // let factoryContract = await tronWeb.contract().new({
    //         abi: JSON.parse(ProductFactory.interface),
    //         bytecode: Utils.factoryBytecode
    // })
    // console.log(factoryContract.address);

    const productName = "Apple Watch 3";
    const productCategory = "Electronics";
    const productPhotoLink = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/4/4/44/alu/44-alu-gold-sport-pink-nc-s4-grid_GEO_RU?wid=270&hei=275&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1539023266589";

    // let productContract = await tronWeb.contract().new({
    //     abi: Utils.productAbi,
    //     bytecode: Utils.productBytecode,
    //     feeLimit: 1000000000,
    //     parameters: [productName, productCategory, productPhotoLink, 'TVYTNzzyt3CX5ZxHTwZwxXm6TeKhyjH8uz']
    // })
    // console.log("productContract:");
    // console.log(productContract);



    const factoryContract = await tronWeb.contract()
      .at('41b36fbe108bba3e4299897d8cfff21cd6fd667138');

    // console.log(factoryContract);

    // factoryContract.createProduct(
    //   productName,
    //   productCategory,
    //   productPhotoLink
    // ).send({
    //   feeLimit:10000,
    //   callValue:0,
    //   shouldPollResponse:true
    // });

    const productAdresses = await factoryContract.getDeployedProducts().call();
    console.log(productAdresses);

    //Get an array of products addresses
    //For each product
    const headers = [];
    let avgRatings = [];

    const product = await tronWeb.contract()
      .at('419eb6e07ea3e5189005aa59c38f0fbd9696c0e42a');
    // console.log(product);

    // tronWeb.trx.getContract('419eb6e07ea3e5189005aa59c38f0fbd9696c0e42a').then(contract => {
    //         console.group('Contract from node');
    //             console.log('- Contract Address: TFM68QBt4bD9YqYCxp4BhyaUYn4uzQXrBJ');
    //             console.log('- Origin Address:', contract.origin_address);
    //             console.log('- ABI:\n' + JSON.stringify(contract.abi, null, 2), '\n');
    //         console.groupEnd();
    //     }).catch(err => console.error(err));

    // const product = Product('419eb6e07ea3e5189005aa59c38f0fbd9696c0e42a');
    const name = await product.methods.name().call();
    console.log("name: "+name);

    // for (var i = 0; i < productAdresses.length; i++) {
    //   //get name
    //   const product = Product(productAdresses[i]);
    //   const name = await product.methods.name().call();
    //   headers.push(name);
    //   //get Avg rating
    //   const reviewsCount = await product.methods.getReviewsCount().call();
    //   const reviews = await Promise.all(
    //     Array(parseInt(reviewsCount))
    //       .fill()
    //       .map((element, index) => {
    //         return product.methods.reviews(index).call();
    //       })
    //   );
    //
    //   let sum = 0;
    //   for (var j = 0; j < reviewsCount; j++) {
    //     sum=parseInt(sum)+parseInt(reviews[j].rate);
    //   }
    //   avgRatings.push(sum/reviewsCount);
    // }

    return {
      headers: [],
      addresses: [],
      avgRatings: []
    };
  }

  render() {

    // const {
    //   headers,
    //   addresses,
    //   photoLinks,
    //   avgRatings
    // } = this.props.products
    const headers = [];

    const products = [];
    for (let index in headers) {
      products.push({
        header: headers[index],
        description: (
                <Link route={`/products/${addresses[index]}`}>
                  <a>View Product</a>
                </Link>
            ),
        meta: "Avg rating: "+avgRatings[index],
        fluid: true //Make entire screen. From left to right
      });
    }
                                                                                      products.push({
                                                                                          header: '!! TEST Kuss',
                                                                                          description: 'Nice kussi',
                                                                                          meta: ("Avg rating: "+4.5),
                                                                                          fluid: true
                                                                                        },
                                                                                        {
                                                                                          header: '!! TEST BMW 520',
                                                                                          description: 'Nice Car',
                                                                                          meta: ("Avg rating: "+4.6),
                                                                                          fluid: true
                                                                                        }
                                                                                      )
//DELETE THIS PLS  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    return (
      <Layout>
        <div>
          <h3>Last Products</h3>

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
          <Card.Group items={products} />
        </div>
      </Layout>
    )
  }
}

export default ProductIndex;
