import React from "react";
import { Link } from "react-router-dom";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.quantityHandler = this.quantityHandler.bind(this);
    this.addItemToCartHandler = this.addItemToCartHandler.bind(this);
    // console.log(props)
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    if (this.props.currentUser) {
     this.props.fetchCart(this.props.currentUser.id);
    }
  }


  addItemToCartHandler(e){
    e.preventDefault(); 
    // const quantity = parseInt(document.querySelector(".quantity-select").value);
    if (this.props.currentUser) {
      const cartItem = {
        cart_id: this.props.currentUser.id,
        product_id: this.props.product.id,
        quantity: this.state.quantity,
      };
      this.props.thunkCreateCartItem(cartItem);
      let cart = this.props.cart;
      console.log("cart", cart);
      // this.props.history.push({ 
      //   pathname: '/carts/'
      // });
    } else {
      this.setState({errors: "Please log in first!"})
      this.props.openModal("Login")
    }
    // this.props.thunkCreateCartItem(this.props.product.id, this.state.quantity);
  }
//  const quantity = parseInt(document.querySelector('.quantity-select').value);
//         const cartId = this.props.sessionId;
//         const cartItem = {
//             "quantity": 1,
//             "product_id": product.id,
//             "cart_id": cartId
//         }
//         for(let i = 0; i < quantity; i++){
//             this.props.createCartItem(cartItem);
//         }
//         this.props.fetchCart(1, this.props.sessionId);
//         this.props.history.push({
//             pathname: '/cart/'
//         });
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
          </div>
        </div>
      </div>
    );
  }
}

export default ProductShow;
