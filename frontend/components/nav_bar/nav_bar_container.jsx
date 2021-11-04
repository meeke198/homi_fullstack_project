import React from "react";
import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";
import { closeModal, openModal } from "../../actions/modal_actions"

const mapStateToProps = (state) => ({
  currentUser: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openSignupModal: loginModal => dispatch(openModal(loginModal)),
  openLoginModal: signupModal => dispatch(openModal(signupModal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
