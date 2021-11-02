import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/signup">Sign up</Link>,
  });

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors(errors)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
//login(user) =>thunk action creators