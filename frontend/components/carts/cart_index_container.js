import { openModal } from "../../actions/modal_actions";
import React from "react";
import { connect } from "react-redux";
import {
  thunkReceiveCartItems,
} from "../../actions/cart_items_actions";
import { fetchProducts } from "../../actions/product_actions";
import CartIndex from "./cart_show_item";

const mSTP = (state) => ({
  cartItems: state.entities.cartItems,
  currentUser: state.entities.user[state.session.id],
  allProducts: state.entities.products,
});
const mDTP = (dispatch) => ({
  fetchCartItems: () => dispatch(thunkFetchCartItems()),
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mSTP, mDTP)(CartIndex);
