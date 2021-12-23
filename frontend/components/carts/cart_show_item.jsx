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
    this.props.fetchCartItems(this.props.cartItems);
    if (this.props.currentUser) {
      this.props.fetchCart(this.props.currentUser.id);
    }
  }

  addItemToCartHandler(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      const cartItem = {
        cart_id: this.props.currentUser.id,
        product_id: this.props.product.id,
        quantity: this.state.quantity,
      };
      this.props.thunkCreateCartItem(cartItem);
    } else {
      this.setState({ errors: "Please log in first!" });
      this.props.openModal("Login");
    }
    // this.props.thunkCreateCartItem(this.props.product.id, this.state.quantity);
  }

  quantityHandler(e) {
    this.setState({ quantity: e.target.value });
  }
  // addToCartSubmit(e) {
  //   e.preventDefault();
  //   if (this.props.currentUser) {
  //     this.props.createCartItem(this.props.product?.id, this.state.quantity);
  //   }
  // }
  render() {
    const { cartItems } = this.props;
    let allItems =
      Object.values(cartItems) === 0 ? [] : Object.values(cartItems);
    let totalItemsInCart = 0;
    allItems.forEach((item) => totalItemsInCart += item.quantity)
    let allProductsArray = [;]
    return (
      <div className="cart-show-container">
       <h1>{}</h1>
      </div>
    );
  }
}

export default CartShowItem;
