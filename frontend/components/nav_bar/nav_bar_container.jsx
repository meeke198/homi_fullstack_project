import React from "react";
import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions"
import { updateAllProducts } from "../../actions/product_actions";
// import { thunkCreateCartItem, thunkReceiveCartItems } from '../../actions/cart_items_actions'

const mapStateToProps = (state) => ({
  products: state.entities.products,
  currentUser: state.entities.users[state.session.id],
  cartItems: Object.values(state.entities.cartItems),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
   updateAllProducts: (products) => dispatch(updateAllProducts(products)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
