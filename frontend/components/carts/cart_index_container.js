import { openModal } from "../../actions/modal_actions";
import React from "react";
import { connect } from "react-redux";
import {
  thunkFetchCartItems,
} from "../../actions/cart_items_actions";
import CartIndex from "./cart_index";

const mSTP = state => {
  return {
    cartItems: Object.values(state.entities.cartItems),
    currentUser: state.entities.user[state.session.id]
  };
};
const mDTP = dispatch => ({
  fetchCartItems: () => dispatch(thunkFetchCartItems()),
});

export default connect(mSTP, mDTP)(CartIndex);
