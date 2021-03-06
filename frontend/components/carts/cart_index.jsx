import React from "react";
import { Link } from "react-router-dom";
import CartShowItem from "./cart_show_item";
import { RiVisaFill } from "react-icons/ri";
import { SiMastercard, SiAmericanexpress, SiKlarna } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { GiThreeLeaves } from "react-icons/gi";


class CartIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false,
    };
    this.onSelect = this.onSelect.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
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

  handleCheckout(cartItems){
    Object.values(cartItems).forEach((cartItem) => {
      this.props.deleteCartItem(cartItem.id)
    })
  }

  render() {
    const { cartItems, deleteCartItem, updateCartItem, currentUser } =
      this.props;
    let itemsPrice = 0;
    let totalItemsInCart = 0;
   

    let subTotal = 0;
   let cart = (cartItems || []).filter(
     (item) => item.cart_id === currentUser.id
   );
    const cartItemsList = (cart || []).map((item) => {
       totalItemsInCart += item.quantity;
      itemsPrice = item.quantity * item.product.price;
        subTotal += itemsPrice;
      return (
        <CartShowItem
          key={item.id}
          item={item}
          deleteCartItem={deleteCartItem}
          updateCartItem={updateCartItem}
          currentUser = {currentUser}
        />
      );
    });
     let tax = subTotal * 0.08;
    if (cartItems.length === 0) {
      return (
        <div className="empty-cart">
          <div className="counter">0</div>
          <h1 className="empty-message">Your cart is empty</h1>
          <Link to="/" className="empty-message discover">
            Discover something unique to fill it up
          </Link>
          <div className="leave">
            <GiThreeLeaves /><p>Homi offsets carbon emissions from every delivery</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cart-show-container">
          <div className="counter">
            {isNaN(totalItemsInCart) ? 0 : totalItemsInCart}
          </div>
          <h2>{totalItemsInCart} item(s) in your cart</h2>
          <Link to="/products" className="link">
            Keep shopping
          </Link>
          <div className="cart-index-container">
            <div className="cart-index">{cartItemsList}</div>
            <div className="cart-checkout" onClick={() => this.onSelect()}>
              <h2>How you'll pay</h2>
              <div>
                <input className="input-radio" type="radio" name="payment" />{" "}
                <span className="payment-icon">
                  <SiMastercard
                    style={{ width: 50, height: 40, color: "#F69E1D" }}
                  />
                </span>
                <span className="payment-icon">
                  <RiVisaFill
                    style={{ width: 50, height: 40, color: "#1A2072" }}
                  />
                </span>
                <span className="payment-icon">
                  <SiAmericanexpress
                    style={{ width: 50, height: 30, color: "#086FCE" }}
                  />
                </span>
              </div>
              <div>
                <input className="input-radio" type="radio" name="payment" />
                <span className="payment-icon">
                  <BsPaypal
                    style={{
                      width: 60,
                      height: 35,
                      color: "#1A2072",
                      border: "black solid 1px",
                      borderRadius: 5,
                    }}
                  />
                </span>
              </div>
              <div>
                <input className="input-radio" type="radio" name="payment" />
                <span className="payment-icon">
                  <SiKlarna
                    style={{
                      width: 60,
                      height: 35,
                      backgroundColor: "#FEB3C7",
                      color: "black",
                      borderRadius: 5,
                    }}
                  />
                </span>
                <span>Monthly financing</span>
                <p>
                  Pay as low as $ {((subTotal + tax) / 12).toFixed(2)}/mo.
                  <span style={{ fontWeight: "bolder" }}> Klarna. </span>
                  <span>
                    <a href="https://www.klarna.com/us/" target="_blank">
                      See if you're prequalified
                    </a>
                  </span>
                </p>
              </div>
              <p>
                Item(s) subtotal:{" "}
                <span className="item-price">$ {subTotal.toFixed(2)}</span>
              </p>
              <p>
                Tax: <span className="item-price">$ {tax.toFixed(2)}</span>
              </p>
              <p>
                Item(s) total:{" "}
                <span className="item-price">
                  {" "}
                  $ {(subTotal + tax).toFixed(2)}
                </span>
              </p>
              <p>
                <FaShippingFast className="checkout-icon" />{" "}
                <a href="https://apps.goshippo.com/"> Get shipping cost</a>
              </p>
              <div className="checkout-btn">
                <Link
                  to="/order_confirmation"
                  className="link"
                  id="checkout"
                  onClick={() => this.handleCheckout(cartItems)}
                >
                  Proceed to checkout
                </Link>
              </div>
              <div className="coupon">
                <IoMdPricetags className="checkout-icon" /> Apply Homi's coupon
                code
              </div>
              <p className="addition-tax">
                * Additional duties and taxes{" "}
                <a
                  href="https://www.cbp.gov/travel/international-visitors/kbyg/customs-duty-info"
                  target="_blank"
                >
                  may apply
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CartIndex;
