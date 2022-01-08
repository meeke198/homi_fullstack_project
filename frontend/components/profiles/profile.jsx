import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { BsShop, BsCameraFill } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.capitalize = this.capitalize.bind(this);
  }
  capitalize(s)
  {
    return s[0].toUpperCase() + s.slice(1);
  }
  render() {
    // debugger
    // if (this.state === null) {
    //   return null;
    // }
    const { currentUser } = this.props;

    return (
      <div className="profile">
        <div className="user-name">
          <div className="user-profile">
            <img
              className="image"
              src="https://homi-seeds.s3.us-east-2.amazonaws.com/vector61-1574-01-modified.png"
              alt="profile"
            />

            <div className="camera">
              <BsCameraFill style={{ width: 25, height: 25 }} />
            </div>
          </div>
          <div className="user-follower">
            <h3>{this.capitalize(currentUser.email)}</h3>
            <p>
              4 followers <span>5 following</span>
            </p>
          </div>
        </div>
        <div className="profile-icons">
          <div className="icon-outer">
            <div className="icon-container">
              <GrFavorite className="icon" />
            </div>
            <p className="title">Favorite Items</p>
            <p>0 Items</p>
          </div>
          <div className="icon-outer">
            <div className="icon-container">
              <BsShop className="icon" />
            </div>
            <p className="title">Favorite Shop</p>
            <p>0 Shops</p>
          </div>
          <div className="icon-outer">
            <div className="icon-container cross">
              <h1 id="cross-symbol">+</h1>
            </div>
            <p className="title">Create Collection</p>
          </div>
        </div>
        <div className="shopping-cart">
          <img
            className="cart-image"
            src="https://homi-seeds.s3.us-east-2.amazonaws.com/cart-modified.png"
            alt="shopping-cart"
          />
          <h2 id="nothing">Nothing here... yet.</h2>
          <p>
            These are a few of your favorite things... or they will be, once you
            favorite something.
          </p>
        </div>
      </div>
    );
  }
}

export default Profile;
