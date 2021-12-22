import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import { BsCart4 } from "react-icons/bs";

const ItemCounter = ({ items, currentUser, openModal }) => {
  const allCartItems = Object.values(items)
  let totalItems = 0;
  allCartItems.forEach((item) => (totalItems += item.quantity));

const loggedIn = () => (
  <div>
    <Link to="/cart_items">
      <BsCart4
        style={{
          marginLeft: 15,
          width: 30,
          height: 30,
          textDecoration: "none",
          position: "relative",
        }}
      />
    </Link>
    <div className="counter">{isNaN(totalItems) ? 0 : totalItems}</div>
  </div>
);
const loggedOut = () => (
  <div>
    <div>
      <BsCart4
      onClick = {() => openModal("login")}
        style={{
          marginLeft: 15,
          width: 30,
          height: 30,
          textDecoration: "none",
          position: "relative",
        }}
      />
    </div>
    <div className="counter">{isNaN(totalItems) ? 0 : totalItems}</div>
  </div>
)

  return currentUser ? loggedIn() : loggedOut();
}
export default ItemCounter;