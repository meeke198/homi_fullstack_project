import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { thunkUpdateReview, thunkFetchReview } from "../../actions/review_actions";
import CreateReviewForm from "./review_form";


const mapStateToProps = (state, ownProps) => ({
  review: {
    id: ownProps.match.params.reviewId,
    content: state.entities.reviews[ownProps.match.params.reviewId].content,
    rating: state.entities.reviews[ownProps.match.params.reviewId].rating,
    product_id: ownProps.match.params.productId,
    reviewer_id: state.session.id,
  },
  formType: "edit",
});

const mapDispatchToProps = () => (dispatch) => ({
  updateReview: (review) => dispatch(thunkUpdateReview(review)),
  fetchReview: (reviewId) => dispatch(thunkFetchReview(reviewId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm)
);
