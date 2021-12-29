import React from "react";
import { Link } from "react-router-dom";

class CartShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      cart_id: this.props.item.cart_id,
      product_id: this.props.item.product_id,
      quantity: this.props.item.quantity,
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
  }

  updateQuantity(e) {
    e.preventDefault();
    this.setState({ quantity: parseInt(e.target.value) });
  }

  deleteCartItem() {
    console.log("cart_show");
    this.props.deleteCartItem(this.state.id);
  }

 

  render() {
    console.log("props", this.props);
    const { item } = this.props;
    console.log("item", item);
    // console.log("quantity", item.quantity);
    // console.log("item.product.price", item.product.price);
    item.length === undefined ? null : item;

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
            onClick={this.updateQuantity}
            defaultValue={item.quantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
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
