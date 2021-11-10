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
    // this.props.fetchProduct(this.props.match.params.productId);
    console.log(this.props)
    if (this.props.currentUser) {
      console.log("co chay vao day khong")
     this.props.fetchCart(this.props.currentUser.id);
    }
  }

  addItemToCartHandler(){
    this.props.hunkCreateCartItem(this.props.product.id, this.state.quantity);
  }

  quantityHandler() {
    this.setState({ quantity: e.target.value });
  }
  addToCartSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.createCartItem(this.props.product?.id, this.state.quantity);
    }
  }
  render() {
    const { product } = this.props;
    return (
      <div className="product-container-show">
        <img className="product-img-show" src={product?.image_url} alt="" />
        <div className="product-content-show">
          <p className="product-name-show">{product?.product_name}</p>
          <br />
          <p style={{ fontWeight: 700, paddingBottom: 20 }}>Description:</p>
          <p className="product-description">{product?.description}</p>
          <p className="price">Price: $ {product?.price}.00</p>
          <form className="add_to_cart" onSubmit={this.addToCartSubmit}>
            <label style={{ padding: "10px 0" }}>Quantity</label>
            <br />
            <div className="custom-select" style={{ width: "350px" }}>
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
            </div>

            <button className="submit-form-button" onClick={this.addToCartSubmit}>Add to cart</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductShow;
