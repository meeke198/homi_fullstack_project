# README

### **Overview**

Homi is a cloned version of Etsy.com, an E-commerce platform where independent artists and crafters can sell their goods. Homi is primarily associated with minimalist lifestyle and home decor: handmade toys, collectibles, art, vintage furniture, and holiday items, in addition to crafts and craft supplies.


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


For searching function, to have all the searched items render properly using the same ProductIndex component, in product_actions.js, the fetchProducts has to be a promise so that i can async await fetchProducts function in componentDidMount in product_index.js. The ProductIndex component will render the PageNotFound component when !products.length, therefore, i have to add "isLoading: false" into the state, setState ({ isLoading: true} ), and having a loading progess styling with css while waiting for the products data from the back end instead of render PageNotFound component. I can reuse ProductIndex component to render searched items and all products properly at the end.

```...javascript
product_actions.js
export const fetchProducts = (searchInputTerm) => dispatch => {
    return ProductApiUtil.fetchProducts(searchInputTerm).then((products) => {
        dispatch(receiveAllProducts(products))
        Promise.resolve()
    });
};

product_index.js
 class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

 async componentDidMount() {
   this.setState ({ isLoading: true} ) 
   await this.props.fetchProducts("");
    this.setState({ isLoading: false}); 
  }

  render() {
    const { products } = this.props;
    const ProductItems = (products || []).map((product, i) => {
      return <ProductIndexItem key={`${product.id}-${i}`} product={product} />;
    });
    if(this.state.isLoading){
      return (
        <div>
          <div className="progress">
            <div className="color"></div>
          </div>
          <div style={{fontWeight: 900, fontSize: 20, textAlign: "center"}}>Loading...</div>
        </div>
      );
      if (!products.length){
      return (
        <div className="not-found">
          <img
            style={{ width: "10%", heigh: "10%" }}
            src="https://img.icons8.com/dotty/80/000000/nothing-found.png"
          />
          <h1 className="not-found-message">Item not found</h1>
          <p
            className="enter btn"
            onClick={() => this.props.fetchProducts("")}
            style={{ fontWeight: "bolder" }}
          >
            Go back to homepage
          </p>
        </div>
      );
     }
 ```

### Future directions for the project
* Each user will have their profile page with profile picture.

