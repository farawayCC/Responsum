pragma solidity ^0.4.17;

//Admin and manager can have a console, which is used to add
//some Product and reviews to array of deleted objects.
//Web page will sort that kind of objects out from being presented on our site
contract ProductFactory {
    address[] public deployedProducts;

    function createProduct(string productName, string productCategory, string productPhotoLink) public {
        address newProduct = new Product(productName, productCategory, productPhotoLink, msg.sender);
        deployedProducts.push(newProduct);
    }

    function getDeployedProducts() public view returns (address[]) {
        return deployedProducts;
    }
}

contract Product {
    struct Review {
        string header;
        string text;
        uint rate;
        string photoLink;
        address[] voters; //true means upvote, false-downvote
        address author;
        bool isDeleted; //can be set either by manager/admin or review creator
    }

    Review[] public reviews;
    string public name;
    string public photoLink;
    string public category; //set by webpage from list of available categories
    bool public isDeleted; //Pls check if is invoked by manager or admin or product creator
    address public creator;

    modifier restrictedCreator() {
        require(msg.sender == creator);
        _;
    }

    function Product(string productName, string productCategory, string productPhotoLink, address productCreator) public {
        name = productName;
        photoLink = productPhotoLink;
        category = productCategory;
        creator = productCreator;
    }

    function createReview(string newHeader, string newText, uint newRate, string newPhotoLink) public {
        Review memory newReview;
        newReview.header = newHeader;
        newReview.text = newText;
        newReview.rate = newRate;
        newReview.photoLink = newPhotoLink;
        newReview.author = msg.sender;
        newReview.isDeleted = false; //can be set either by manager/admin(otherContract) or by review author

        reviews.push(newReview);
    }

    function upvoteReview(uint index) public {
        Review storage review = reviews[index];
        review.voters.push(msg.sender);
    }

    function getSummary() public view returns (
      string, string, string, address
      ) {
        return (
          name,
          photoLink,
          category, //set by webpage from list of available categories
          creator
        );
    }

    function getReviewsCount() public view returns (uint) {
        return reviews.length;
    }
    
    function markAsDeleted() public restrictedCreator {
      isDeleted = true;
    }
}
