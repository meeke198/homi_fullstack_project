import React from "react";
import { Link } from "react-router-dom";

class CartShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      cart_id: this.props.item.cart_id,
      product_id: this.props.item.product.product_id,
      quantity: this.props.item.product.quantity,
    };
    this.updateQuantity = this.updateQuantity.bind(this)
  }


  updateQuantity(e) {
    e.preventDefault();
    this.setState({ quantity: parseInt(e.target.value) });
  }
  
  render() {
    const { item } = this.props;
    item.length === undefined ? null : item

    let totalItemsPrice = 0;
    totalItemsPrice = (item.product.price * item.quantity);
      return (
        <div>
          <Link to={`/products/${item.product.product_id}`}>
            <img
              src={item.cart.image_url}
              alt="product_image"
              style={{ width: "200px", height: "200px" }}
            />
          </Link>
          <Link to={`/products/${item.product.product_id}`}>
            <p>{item.product.product_name}</p>
          </Link>
          <div>
            <select className="item-quantity" onClick={this.updateQuantity}>
              <option value="1" selected>
                Qty: 1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      );
    }
}

export default CartShowItem;
