import React from "react";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { Link } from "react-router-dom";

class CartShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart_id: this.props.item.cart_id,
      product_id: this.props.item.product_id,
      quantity: this.props.item.quantity,
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    // this.updateCartItem = this.updateCartItem.bind(this);
  }

  updateQuantity(e) {
    this.props.item.quantity = parseInt(e.target.value);
    this.props.updateCartItem(this.props.item);
  }

  deleteCartItem() { 
    this.props.deleteCartItem(this.props.item.id);
  }


  render() {
    const { item } = this.props;
    item.length === undefined ? null : item;
    console.log("quantity", this.state.quantity);
    console.log("state", this.state);
    let totalItemsPrice = 0;
    totalItemsPrice = item.product.price * item.quantity;
    return (
      <div className="cart-item-show-container">
        <Link to={`/products/${item.product.id}`} className="link">
          <img
            src={item.image_url}
            alt="product_image"
            style={{ width: "150px", height: "150px" }}
          />
        </Link>
        <div className="product-name-container">
          <Link to={`/products/${item.product_id}`} className="link">
            <p className="product-title">{item.product.product_name}</p>
          </Link>
          <button
            type="submit"
            className="btn"
            onClick={() => this.deleteCartItem()}
          >
            Remove
          </button>
        </div>
        <div>
          <select
            className="item-quantity"
            onChange={this.updateQuantity}
            defaultValue={this.state.quantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          {/* <button onClick={() => this.updateCartItem()}>Update Quantity</button> */}
        </div>
        <div>
          <p>
            <span className="item-price">$ {totalItemsPrice}.00</span>
          </p>
          <p className="in-stock">
            Only {Math.floor(Math.random() * 10) + 2} left and it's in 20+
            people's carts
          </p>
        </div>
      </div>
    );
  }
}

export default CartShowItem;
