import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router";

const ItemCounter = ({ items, currentUser, openModal }) => {
  const allCartItems = Object.values(items)
  let totalItems = 0;
  allCartItems.forEach((item) => (totalItems += item.quantity));

  return (
    <div>
      <div>{isNaN(totalItems) ? 0 : totalItems} items in your cart</div>
      <div>keep shopping</div>
    </div>
  )}
export default ItemCounter;