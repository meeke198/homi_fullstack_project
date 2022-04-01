import React from "react";
import { connect } from "react-redux";
import { thunkDeleteCartItem, thunkReceiveCartItems, thunkUpdateCartItem } from "../../actions/cart_items_actions";
import { fetchProducts } from "../../actions/product_actions";
import CartShowItem from "./cart_show_item";

const mSTP = (state) => ({
  currentUser: state.entities.user[state.session.id],
});
const mDTP = (dispatch) => ({
  deleteCartItem: (cartItemId) => dispatch(thunkDeleteCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(thunkUpdateCartItem(cartItem)),
});

export default connect(mSTP, mDTP)(CartShowItem);
