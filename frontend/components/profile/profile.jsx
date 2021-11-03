import React from "react";
import { CgProfile } from "react-icons/cg";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDropdown(e) {
    let dropDown = document.getElementsByClassName("drop-down-profile");
    dropDown.addEvenListener("click", function () {
      let result = classes.toggle("c");
      if (result) {
        span.textContent = `'c' added; classList is now "${classes}".`;
      } else {
        span.textContent = `'c' removed; classList is now "${classes}".`;
      }
    });
  }
  render() {
    return (
      <div className="user-profile">
        <CgProfile />
        <div className="drop-down-profile">
          <p>Profile</p>
          <p>Purchase and reviews</p>
          <p>Account setting</p>
          <p>Logout</p>
        </div>
      </div>
    );
  }
}

export default Profile;
