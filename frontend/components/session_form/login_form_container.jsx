import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, clearSessionErrors } from "../../actions/session_actions";
import Login from "./login";

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/signup">Sign up</Link>,
  });

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
//login(user) =>thunk action creators