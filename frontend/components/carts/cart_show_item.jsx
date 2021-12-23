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
    item.length === undefined ? null : item

    let totalItemsPrice = 0;
    totalItemsPrice = (item.product.price * item.quantity);
      return (
        <div>
          <Link to={`/products/${item.product.product_id}`}>
            <img
              src={item.image_url}
              alt="product_image"
              style={{ width: "200px", height: "200px" }}
            />
          </Link>
          <Link to={`/products/${item.product.product_id}`}>
            <p>{item.product.product_name}</p>
          </Link>
          <div>
            <label htmlFor="">Change quality</label>
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
// return (
//   <div className="product-container-show">
//     <img className="product-img-show" src={product?.image_url} alt="" />
//     <div className="product-content-show">
//       <p className="product-name-show">{product?.product_name}</p>
//       <br />
//       <p style={{ fontWeight: 700, paddingBottom: 20 }}>Description:</p>
//       <p className="product-description">{product?.description}</p>
//       <p className="price">Price: $ {product?.price}.00</p>
//       <div className="add_to_cart">
//         <label style={{ padding: "10px 0" }}>Quantity</label>
//         <br />
//         <form
//           className="custom-select"
//           style={{ width: "350px" }}
//           onSubmit={this.addItemToCartHandler}
//         >
//           <select className="quantity-select" onChange={this.quantityHandler}>
//             <option value="1" selected>
//               1
//             </option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//           <button type="submit" className="submit-form-button">
//             Add to cart
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// );