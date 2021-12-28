import React from "react";
import { Link } from "react-router-dom";
import CartShowItem from "./cart_show_item"

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.currentUser){
      this.props.fetchCartItems();
    }
  }

  render() {
    console.log("cartItems", cartItems);
    const { cartItems } = this.props;
    let itemsPrice = 0;
    let totalItemsInCart = 0;
    let allItemsObject = {};

    if (cartItems) {
      cartItems.forEach((item) => totalItemsInCart += item.quantity
    )}

    let tax = itemsPrice * 0.08;
    let total = itemsPrice + tax;
     const cartItemsList = (cartItems || []).map((item) => {
       return <CartShowItem key={item.id} item={item} />;
     });
    if (cartItems.length === 0) {
      return (
        <div className="empty-cart">
          <h1>Your cart is empty</h1>
          <Link to="/">Discover something unique to fill it up</Link>
        </div>
      );
    } else {
      return (
        <div className="cart-show-container">
          <h1>{totalItemsInCart} items in your cart</h1>
          <p>Keep shopping</p>
          <div className="cart-index">{cartItemsList}</div>
        </div>
      );
    }
  }
}

export default CartIndex;
