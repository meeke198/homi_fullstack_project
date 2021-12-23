import React from "react";
import { connect } from "react-redux";
import { thunkDeleteCartItem, thunkReceiveCartItems, thunkUpdateCartItem } from "../../actions/cart_items_actions";
import { fetchProducts } from "../../actions/product_actions";
import CartShowItem from "./cart_show_item";

const mSTP = (state) => ({
  cartItems: Object.values(state.entities.cartItems),
  currentUser: state.entities.user[state.session.id],
  allProducts: state.entities.products
});
const mDTP = (dispatch) => ({
  deleteCartItem: (cartItemId) => dispatch(thunkDeleteCartItem(cartItemId)),
  updateCartItem: (cartItem) => dispatch(thunkUpdateCartItem(cartItem)),
  fetchCartItems: () => dispatch(thunkFetchCartItems()),
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mSTP, mDTP)(CartShowItem);
