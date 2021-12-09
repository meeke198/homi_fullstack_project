import { connect } from "react-redux";
import ReviewIndex from "./review_index";

const mSTP = (state) => ({
  currentUserId: state.session.id,
});

const mDTP = (dispatch) => ({
 
});

export default connect(mSTP, mDTP)(ReviewIndex);
