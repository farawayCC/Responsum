pragma solidity ^0.4.17;

//Admin and manager can have a console, which is used to add
//some Product and reviews to array of deleted objects.
//Web page will sort that kind of objects out from being presented on our site
contract ProductFactory {
    address[] public deployedProducts;

    function createProduct(string productName, string productCategory, string productPhotoLink) public view returns (Product) {
        return new Product(productName, productCategory, productPhotoLink, msg.sender);
        //deployedProducts.push(newProduct);
    }

    function getDeployedProducts() public view returns (address[]) {
        return deployedProducts;
    }

    function registerNewProduct(Product prod) public {
        deployedProducts.push(prod);
    }
}
