import React from "react";
import { Link } from "react-router-dom";
import { RiUserStarLine } from "react-icons/ri"
import { FaShippingFast } from "react-icons/fa";
import CreateReviewForm from "../reviews/review_form_container";

class ProductShow extends React.Component {
  // debugger
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    // debugger
    this.quantityHandler = this.quantityHandler.bind(this);
    this.addItemToCartHandler = this.addItemToCartHandler.bind(this);
    // console.log(props)
  }
  componentDidMount() {
    // debugger
    this.props.fetchProduct(this.props.match.params.productId);
    // if (this.props.currentUser) {
    //  this.props.fetchCart(this.props.currentUser.id);
    // }
  }

  addItemToCartHandler(e) {
    // debugger
    e.preventDefault();
    let { cartItems, currentUser, product } = this.props;
    // const quantity = parseInt(document.querySelector(".quantity-select").value);
    // debugger
    if (currentUser) {
      // debugger
      const cartItem = {
        cart_id: currentUser.id,
        product_id: product.id,
        quantity: this.state.quantity,
      };
      if (cartItems.length) {
        cartItems.forEach((item) => {
          //  debugger
          if (item?.product_id === cartItem?.product_id) {
            //  debugger
            item.quantity += cartItem.quantity;

            this.props.updateCartItem(item);
          }
        });
      } else {
        cartItems[cartItem.product_id] = this.props.createCartItem(cartItem);
      }
    } else {
      this.setState({ errors: "Please log in first!" });
      this.props.openModal("Login");
    }
  }
  // this.props.thunkCreateCartItem(this.props.product.id, this.state.quantity);

  quantityHandler(e) {
    this.setState({ quantity: parseInt(e.target.value) });
  }

  render() {
    // debugger
    const { product, currentUser } = this.props;
    return (
      <div className="product-container-show">
        <div className="product-inner-container">
          <img className="product-img-show" src={product?.image_url} alt="" />
          <div className="product-content-show">
            <p className="product-name-show">{product?.product_name}</p>
            <br />
            <p style={{ fontWeight: 700, paddingBottom: 20 }}>Description:</p>
            <p className="product-description">{product?.description}</p>
            <p className="price">Price: $ {product?.price}.00</p>
            <div className="add_to_cart">
              <label style={{ padding: "10px 0" }}>Quantity</label>
              <br />
              <form
                className="custom-select"
                style={{ width: "350px" }}
                onSubmit={this.addItemToCartHandler}
              >
                <select
                  className="quantity-select"
                  onChange={this.quantityHandler}
                >
                  <option value="1" defaultValue={this.state.quantity}>
                    Qty: 1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button type="submit" className="submit-form-button">
                  Add to cart
                </button>
              </form>
              <p className="term">
                By making a purchase, you agree to Homi's{" "}
                <a
                  href="https://www.formfindr.com/terms-of-service-headline/"
                  target="_blank"
                >
                  Terms of Use{" "}
                </a>
                and{" "}
                <a
                  href="https://www.privacypolicies.com/blog/privacy-policy-template/"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <div className="star-seller">
                <div>
                  <RiUserStarLine
                    style={{ color: "#8C66B2" }}
                    className="product-show-icon"
                  />
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Star Seller.</span> This
                  seller has a history of 5-star reviews, shipping on time, and
                  replying quickly when they got any messages.
                </p>
              </div>
              <div className="star-seller">
                <div>
                  <FaShippingFast
                    style={{ color: "#1C72E8" }}
                    className="product-show-icon"
                  />
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Hooray!</span>
                  This item ships free to the US.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CreateReviewForm product={product} currentUser={currentUser} />
      </div>
    );
  }
}

export default ProductShow;
