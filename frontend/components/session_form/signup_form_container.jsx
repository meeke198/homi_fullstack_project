import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import Signup from "./signup";

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: "signup",
    navLink: <Link to="/login">Log in</Link>,
  });

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
  closeModal: () => dispatch(closeModal()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
