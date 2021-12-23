import React from "react";
import { Link } from "react-router-dom";

class CartShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchCartItems();
    }
  }

  
  quantityHandler(e) {
    this.setState({ quantity: e.target.value });
  }
  
  render() {
    const { cartItems } = this.props;
    let allItems =
      Object.values(cartItems) === 0 ? [] : Object.values(cartItems);
    let totalItemsInCart = 0;
    allItems.forEach((item) => totalItemsInCart += item.quantity)
    let allProductsArray = [];
    allItems.forEach((item) => {
      if (allProductsArray.includes(item.product.product_name)){
        item.product.product_name
      }
    })

    let itemsPrice = 0;
    allItems.forEach((item) => itemsPrice += (item.product.price * item.quantity));
    if (cartItems === undefined){
      return null
    }

    let tax = itemsPrice * 0.08
    let total = itemsPrice + tax
    if (totalItemsInCart === 0) {
      return (
        <div>
          <h1>Your cart is empty</h1>
          <Link>Discover something unique to fill it up</Link>
        </div>
      );
    } else {
      return (
        <div className="cart-show-container">
          <h1>{totalItemsInCart} items in your cart</h1>
          <p>Keep shopping</p>
        </div>
      );
    }

    
  }
}

export default CartShowItem;
