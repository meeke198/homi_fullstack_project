import React from "react";
import { Link } from "react-router-dom";

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("cart", cart)
    if (this.props.currentUser){
      this.props.fetchCart(this.props.currentUser.id, this.props.currentUser.id);
    }
    this.setState({});
  }

  render() {
    const { cart } = this.props;
    let itemsPrice = 0;
    let totalItemsInCart = 0;
    let allItemsObject = {};

    if (cart) {
      totalItemsInCart = cart.length
    }

    let tax = itemsPrice * 0.08;
    let total = itemsPrice + tax;
     const cartItemsList = (cartItems || []).map((item) => {
       return <CartShowItem key={item.id} item={item} />;
     });
    if (cartItems.length === 0) {
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
          return (
          <div>
            <div className="cart-index">{cartItemsList}</div>
          </div>
          );
        </div>
      );
    }
  }
}

export default CartIndex;
