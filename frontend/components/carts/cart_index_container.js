import { openModal } from "../../actions/modal_actions";
import React from "react";
import { connect } from "react-redux";
import {
  thunkFetchCartItems,
  thunkDeleteCartItem,
  thunkUpdateCartItem,
} from "../../actions/cart_items_actions";
import {fetchCart} from "../../actions/cart_actions";

import CartIndex from "./cart_index";

const mSTP = state => {
  console.log("cartItems", Object.values(state.entities.cartItems));
  // console.log("current user", state.entities.users[state.session.id]);
  return {
    cartItems: Object.values(state.entities.cartItems),
    currentUser: state.entities.users[state.session.id],
  };
}   
const mDTP = (dispatch) => ({
  fetchCartItems: () => dispatch(thunkFetchCartItems()),
  // createCart: (cart) => dispatch(createCart(cart)),
  fetchCart: (userId) => dispatch(fetchCart(userId)),
  deleteCartItem: (cartItemId) => dispatch(thunkDeleteCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(thunkUpdateCartItem(cartItem)),
});

export default connect(mSTP, mDTP)(CartIndex);
