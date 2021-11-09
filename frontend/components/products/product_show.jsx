import React from "react";
import { Link } from "react-router-dom";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.quantityHandler = this.quantityHandler.bind(this);
    this.addToCartSubmit = this.addToCartSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  quantityHandler() {
    this.setState({ quantity: e.target.value });
  }
  addToCartSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createCartItem(this.props.product.id, this.state.quantity);
    }
  }
  render() {
    const { product } = this.props;
    return (
      <div className="product-container">
        <img className="product-img" src={product.image_url} alt="" />
        <div className="product-content">
          <p className="product-name-show">{product.product_name}</p>
          <p className="product-description">
            <span style={{ fontWeight: 700 }}>Description: </span>
            {product.description}
          </p>
          <p className="price">
            Price: $ {product.price}
          </p>
          <form className="add_to_cart" onSubmit={this.addToCartSubmit}>
            <label>Quantity</label>
            <select
              className="quantity-select"
              defaultValue={this.state.quantity}
              onChange={this.quantityHandler}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button className="submit-form-button">Add to cart</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductShow;
