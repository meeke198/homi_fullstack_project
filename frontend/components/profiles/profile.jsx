import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { BsShop, BsCameraFill } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // debugger
    if (this.state === null) {
      return null;
    }
    const { currentUser } = this.props
    return (
      <div className="profile">
       
        <div className="shopping-cart">
          <img className="image" src="https://homi-seeds.s3.us-east-2.amazonaws.com/vector61-1574-01.jpg" alt="profile" />
          <BsCameraFill className="camera"/>
        </div>
        <div className="user-name">
            <h1>{currentUser.email}</h1>
            <div><MdOutlineEdit/></div>
        </div>
        <div className="user-follower">
            <p>4 followers</p>
            <p>5 following</p>
        </div>
        <div className="profile-icon">
            <div className="icon-container">
                <GrFavorite/>
                 <p>Favorite Items</p>
                <p>0 Items</p>
            </div>
            <div className="icon-container">
                <BsShop/>
                <p>Favorite Shop</p>
                <p>0 Shops</p>
            </div>
            <div className="icon-container cross">
                <h1>+</h1>
                <p>Create Collection</p>
            </div>
        </div>
        <div className="shopping-cart">
          <img src="https://homi-seeds.s3.us-east-2.amazonaws.com/shopping-cart-icon.png" alt="shopping-cart" />
          <h2>Nothing here... yet.</h2>
          <p>These are a few of your favorite things... or they will be, once you favorite something.





Footer
</p>
        </div>
      </div>
    );
  }
}

export default Profile;


const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

export default connect(mSTP, null)(Profile);