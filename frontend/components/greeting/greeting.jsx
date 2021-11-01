
import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};
//hgroup: HTML element represents a multi-level heading for a section of a document
//nbsp: no break space =>prevents line breaks

export default Greeting;
