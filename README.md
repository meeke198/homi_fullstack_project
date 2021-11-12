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
3. Product listing: 

Users, including guest users, will be able to view products. 
All user can search products by interested categories from dropping menu on the Navigation bar and seasonal suggestions"

![](https://homi-seeds.s3.us-east-2.amazonaws.com/category_SparkVideo.gif)

### Future directions for the project

* Logged in users will be able to create, update and delete their product listings.
* All users will be able to look up items by category.
* All users will be able to add items to their shopping cart.
* Users will be able to check out items in the shopping cart by login or checkout as guests.
* Users will be able to add/ remove cart items in their cart.
* All users will be able to look up items by product name
* Logged in users will be able to write reviews for products.
* Users will be able to edit their own reviews.