import { openModal } from "../../actions/modal_actions";
import React from "react";
import { connect } from "react-redux";
import {
  thunkFetchCartItems,
} from "../../actions/cart_items_actions";
import {
  createCart, fetchCart
} from "../../actions/cart_actions";

import CartIndex from "./cart_index";

const mSTP = state => {
  const newState = getState();
  return {
    cart: newState.entities.carts[state.session.id],
    currentUser: state.entities.users[state.session.id],
  };
};
const mDTP = (dispatch) => ({
  fetchCartItems: () => dispatch(thunkFetchCartItems()),
  createCart: (cart) => dispatch(createCart(cart)),
  fetchCart: (id, userId) => dispatch(fetchCart(id, userId)),
});

export default connect(mSTP, mDTP)(CartIndex);
