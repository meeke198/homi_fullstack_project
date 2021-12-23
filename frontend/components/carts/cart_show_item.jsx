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
  }


  quantityHandler(e) {
    this.setState({ quantity: e.target.value });
  }
  
  render() {
    const { item } = this.props;
    let totalItemsPrice = 0;
    totalItemsPrice = (item.product.price * item.quantity);
      return (
        <div>
          <Link to={`/products/${item.product.product_id}`}>
            <img src={this.state.image_url} alt="product_image" />
          </Link>
          <Link to={`/products/${item.product.product_id}`}>
            <p>{item.product.product_name}</p>
          </Link>
          <div>
            <select className="item-quantity" onChange={this.quantityHandler}>
              <option value="1" selected>
                1
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
