import { connect } from "react-redux";
import { createReview, deleteReview, updateReview } from "../../actions/review_actions";
import CreateReviewForm from "./create_review_form";


const mapStateToProps = state => ({ 
  currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  createReview: (review, productId) => dispatch(createReview(review, productId)),
  deleteReview: () => dispatch(deleteReview(reviewId, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);
