
import { connect } from "react-redux";
import Profile from "./profile"

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

export default connect(mSTP, null)(Profile);
