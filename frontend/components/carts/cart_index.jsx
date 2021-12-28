import React from "react";
import { Link } from "react-router-dom";
import CartShowItem from "./cart_show_item"

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false,
    };
  }
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchCartItems();
    }
  }

  onSelect() {
    this.setState({
      selected: !this.state.select,
    });
  }

  render() {
    console.log("cartItems", cartItems);
    const { cartItems, deleteCartItem, updateCartItem } = this.props;
    let itemsPrice = 0;
    let totalItemsInCart = 0;
    let allItemsObject = {};

    if (cartItems) {
      cartItems.forEach((item) => {
        totalItemsInCart += item.quantity;
        // debugger
        if (allItemsObject[item.product_id]) {
          allItemsObject[item.product_id]['quantity'] += item.quantity;
        } else {
          allItemsObject[item.product_id] = item
        };
      });
      console.log("allItemsObject", allItemsObject);
    }

    let tax = itemsPrice * 0.08;
    let total = itemsPrice + tax;
    const cartItemsList = (Object.values(allItemsObject) || []).map((item) => {
      return (
        <CartShowItem
          key={item.id}
          item={item}
          deleteCartItem={deleteCartItem}
          updateCartItem={updateCartItem}
        />
      );
    });
    if (cartItems.length === 0) {
      return (
        <div className="empty-cart">
          <div className="counter">0</div>
          <h1>Your cart is empty</h1>
          <Link to="/">Discover something unique to fill it up</Link>
        </div>
      );
    } else {
      return (
        <div className="cart-show-container">
          <div className="counter">
            {isNaN(totalItemsInCart) ? 0 : totalItemsInCart}
          </div>
          <h1>{totalItemsInCart} items in your cart</h1>
          <p>Keep shopping</p>
          <div className="cart-index">{cartItemsList}</div>
          <div className="cart-checkout" onClick={() => this.onSelect()}>
            <h1>How you'll pay</h1>
            <div>
              <input type="radio" name="visa" />
            </div>
            <div>
              <input type="radio" name="paypal" />
            </div>
            <div>
              <input type="radio" name="monthly" />
            </div>
            <p>
              Item(s) subtotal <span>{itemsPrice}</span>
            </p>
            <p>
              Tax: <span>{tax}</span>
            </p>
            <p>
              Item(s) total <span>{total}</span>
            </p>
          </div>
        </div>
      );
    }
  }
}

export default CartIndex;
