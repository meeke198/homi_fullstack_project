import React from "react";
import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions"
// import { thunkCreateCartItem, thunkReceiveCartItems } from '../../actions/cart_items_actions'

const mapStateToProps = ({
  session,
  entities: { users, cartItems, products },
}) => ({
  products: Object.values(products),
  currentUser: users[session.id],
  cartItems: Object.values(cartItems),
  items: state.entities.cartItems,
  currentUser: state.entities.user[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
