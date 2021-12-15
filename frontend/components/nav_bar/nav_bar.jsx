import React from "react";
import { FaSearchDollar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { AiOutlineGift, AiOutlineSetting } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }
  toggleDropdown(e) {
    e.stopPropagation();
    this.setState({ isDropdown: !this.state.isDropdown });
  }

  logoutHandler() {
    this.props.logout();
  }

  // componentDidMount(){
  //   if (this.props.currenUser){
  //     this.props.getCartItems();
  //   }
  // }
  render() {
    const { currentUser, openModal, cartItems } = this.props;
    let totalItems = 0;
    cartItems.forEach((item) => (totalItems += item.quantity));
    const { isDropdown } = this.state;
    let dropdownMenu;
    if (isDropdown && currentUser) {
      dropdownMenu = (
        <div className="loggedin-drop-down">
          <div className="drop-down-profile">
            <div className="drop-down-list">
              <CgProfile style={{ paddingRight: 10 }} />
              <div className="drop-down-item">
                <p> Hello {currentUser.email}</p>
                <p>View Your Profile</p>
              </div>
            </div>
            <div className="drop-down-list">
              <AiOutlineGift style={{ paddingRight: 10 }} />
              <p>Gift card balance: $0.00</p>
            </div>
            <div className="drop-down-list">
              <AiOutlineSetting style={{ paddingRight: 10 }} />
              <p>Account settings</p>
            </div>
            <div className="drop-down-list">
              <GrNotes style={{ paddingRight: 10 }} />
              <p>Perchases and reviews</p>
            </div>
            <div className="drop-down-list">
              <CgLogOut style={{ paddingRight: 10 }} />
              <p onClick={this.logoutHandler}>Logout</p>
            </div>
          </div>
        </div>
      );
    }
    const display = currentUser ? (
      <div className="logged-in">
        <div className="logged-in-profile-icon">
          <MdFavoriteBorder style={{ width: 25, height: 25 }} />
          <IoMdNotificationsOutline style={{ width: 25, height: 25 }} />
          <BsShop style={{ width: 25, height: 25 }} />
          <div>
            <CgProfile style={{ width: 25, height: 25 }} />
            <BiDownArrow
              onClick={this.toggleDropdown}
              style={{ position: "relative", marginLeft: 0 }}
            />
            <div>{dropdownMenu}</div>
          </div>
        </div>
        <div>
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
          </div>
          <div className="counter">{isNaN(totalItems) ? totalItems : 0}</div>
        </div>
      </div>
    ) : (
      <div style={{ display: "flex", alignItems: "center" }}>
        <button className="btn" onClick={() => openModal("login")}>
          Log In
        </button>
        <div>
          <div>
            <BsCart4
              style={{
                marginLeft: 30,
                width: 35,
                height: 35,
                position: "relative",
              }}
            />
          </div>
          <div className="counter">{isNaN(totalItems) ? totalItems : 0}</div>
        </div>
      </div>
    );
    return (
      <header className="nav-bar">
        <Link to="/">
          <img
            className="logo-img"
            src="https://homi-seeds.s3.us-east-2.amazonaws.com/homilogo.png"
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
  }
}
export default NavBar;
