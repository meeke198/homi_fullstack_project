import { connect } from "react-redux";
import { createReview, deleteReview, updateReview } from "../../actions/review_actions";
import CreateReviewForm from "./review_form";


const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
  createReview: (review, productId) => dispatch(createReview(review, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);
