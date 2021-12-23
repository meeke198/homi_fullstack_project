import React from "react";
import { Link } from "react-router-dom";

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      this.props.fetchCartItems();
  }

  render() {
    const { cartItems } = this.props;
    // let allItems =
    //   Object.values(cartItems) === 0 ? [] : Object.values(cartItems);
    // let totalItemsInCart = 0;
    // allItems.forEach((item) => (totalItemsInCart += item.quantity));
    // // let allProductsArray = [];
    // // allItems.forEach((item) => {
    // //   if (allProductsArray.includes(item.product.product_name)) {
    // //     item.product.product_name;
    // //   }
    // // });

    // let itemsPrice = 0;
    // allItems.forEach(
    //   (item) => (itemsPrice += item.product.price * item.quantity)
    // );

    // let tax = itemsPrice * 0.08;
    // let total = itemsPrice + tax;
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
