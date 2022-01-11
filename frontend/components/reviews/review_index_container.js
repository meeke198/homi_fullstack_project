import { connect } from "react-redux";
import {
  thunkFetchReviews,
  thunkUpdateReview,
  thunkDeleteReview,
} from "../../actions/review_actions";
import ReviewIndex from "./review_index";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => ({
  reviews: Object.values(state.entities.reviews),
  product: state.entities.products[ownProps.match.params.productId],
  currentUserId: state.session.id,
  errors: state.errors.reviews,
});

const mDTP = (dispatch) => ({
  fetchReviews: () => dispatch(thunkFetchReviews()),
  updateReview: (review) => dispatch(thunkUpdateReview(review)),
  deleteReview: (reviewId) => dispatch(thunkDeleteReview(reviewId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));
