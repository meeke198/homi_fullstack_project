import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import ItemCounter from "./item_counter";

const mSTP = (state) => ({
  items: state.entities.cartItems,
  currentUser: state.entities.user[state.session.id],
});
const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(ItemCounter);
