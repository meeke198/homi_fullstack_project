# README

### **Overview**

Homi is a cloned version of Esty.com, an E-commerce platform where independent artists and crafters can sell their goods. Homi is primarily associated with minimalist lifestyle and home decor: handmade toys, collectibles, art, vintage furniture, and holiday items, in addition to crafts and craft supplies.


<img src="https://homi-seeds.s3.us-east-2.amazonaws.com/homepage.jpg" style="height: 300px; width:500px;">

### **Link to Live Site**

[Here's the link to live site](https://homi198.herokuapp.com/#/)

### Technologies Used:

* Postgresql
* Ruby on rails
* React
* Redux
* AWS

### Features

#### User Authentication: 

1. New users can sign up for a new account or they can use the demo login to checkout the features of the site.

![](https://homi-seeds.s3.us-east-2.amazonaws.com/loginout_SparkVideo.gif)


2. Product listing: 

Users, including guest users, will be able to view products. 
All user can search products by interested categories from dropping menu on the Navigation bar and seasonal suggestions"

![](https://homi-seeds.s3.us-east-2.amazonaws.com/category_SparkVideo.gif)

3. Shopping Cart Item

Logged in users can add items to their shopping cart. Users can update the quantity of items in their cart by select dropdown menu of quantity. Users can also remove products from their shopping cart. The total price will be reflected based on what is in the shopping cart and the quantity for each product.

![](https://homi-seeds.s3.us-east-2.amazonaws.com/shoppingcart.png)

4. Search Functionality

All users are able to search for items by name and by category based on the search input. 

![](https://homi-seeds.s3.us-east-2.amazonaws.com/homi_searching.gif)

5. Reviews

Logged in users will be able to write reviews for products. They  will be able to edit and remove their own reviews. 

![](https://homi-seeds.s3.us-east-2.amazonaws.com/review.png)

### Code Snippet 

To have my session form modals close properly, I have to add an "isSubmited: false" in the state, and use shouldComponentUpdate to check the state on every submit. If there is no error, form is processed and modal closes. If there are errors, errors are rendered and users only can login/signup when they pass all user validations.

```...javascript
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSubmited: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.errors.length === 0 && this.state.isSubmited === true) {
      this.props.closeModal();
    }
    return true;
  }
 renderErrors() {
    return (
      <div style={{marginTop: 20, lineHeight: 1}}>
        {this.props.errors.map((error, i) => (
          <li style={{width: '100%'}} key={`${i}`}>{error}</li>
        ))}
      </div>
    );
  }
}
```


For searching function, to have all the searched items render properly using the same product_index component, in productSearchHandler, i add an "isShown: true" flag for all items that match searchTerminput. After that, in RECEIVE_ALL_PRODUCTS, I map through all products, only products with "isShown: true" are rendered as searched result. 

productSearchHandler(searchTermInput){
    this.setState({ searchTerm: searchTermInput });
      let filterResult = this.props.products.map((product) =>
      {
      if (Object.values(product)
      .join(" ")
      .toLowerCase()
      .includes(searchTermInput.toLowerCase())){
        product.isShown = true
      } else {
        product.isShown = false
      }
      return product
      })
       this.props.updateAllProducts(filterResult);
    }

```const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return Object.values(action.products).map ((product) => {
                product.isShown = true
                return product;
            })
    }
} ```

### Future directions for the project
* Each user will have their profile page.
* All users will be able to see all products listing.
* All users will be able to look up items by name and category.
* All users will be able to add/edit/remove items to their shopping cart by login.
* Users will be able to check out items in the shopping cart by login.
* Logged in users will be able to write/edit/remove their own review for products.
