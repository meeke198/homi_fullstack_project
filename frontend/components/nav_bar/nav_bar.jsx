import React from "react";
import { FaSearchDollar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import Profile from "../profile/profile";
import { Link } from "react-router-dom";
import Menu from "./menu";
import homilogo from '../../../app/assets/images/homilogo.png'

const NavBar = ({ currentUser, openModal, logout }) => {
  const display = currentUser ? (
    <div className="logged-in">
      <button className="btn" onClick={logout}>
        Logout
      </button>
      <Profile />
      <Link to="/cart_items">
        <BsCart4 style={{ marginLeft: 15, width: 25, height: 25 }}/>
      </Link>
    </div>
  ) : (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button className="btn" onClick={() => openModal("login")}>
        Log In
      </button>
      <BsCart4 style={{ marginLeft: 30, width: 35, height: 35 }} />
    </div>
  );
  return (
    <header className="nav-bar">
      <Link to="/">
        <img className="logo-img"
          src={homilogo}
          alt=""
        />
      </Link>
      <div className="searching-container">
        <input
          className="searching-input"
          type="text"
          placeholder="Search for anything"
        />
        <FaSearchDollar style={{ marginRight: 25, width: 30, height: 25 }} />
      </div>
      {display}
    </header>
  );
};

export default NavBar;
