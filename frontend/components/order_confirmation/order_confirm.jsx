import React from "react";
import { Link } from "react-router-dom";

const OrderConfirm = () => {
  return (
    <div className="confirm_div">
      <img
        src="https://homi-seeds.s3.us-east-2.amazonaws.com/Order_confirmed.jpg"
        alt=""
        className="confirm__image"
      />
      <Link className="btn confirm" to="/">
        Continue shopping
      </Link>
    </div>
  );
};
export default OrderConfirm;
