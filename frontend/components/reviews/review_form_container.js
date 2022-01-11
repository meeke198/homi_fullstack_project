import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { thunkCreateReview, clearReviewErrors } from "../../actions/review_actions";
import CreateReviewForm from "./review_form";
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => ({
  review: {
    content: "",
    rating: 0,
    product_id: ownProps.match.params.productId,
    reviewer_id: state.session.id,
  },
  formType: "create",
  errors: state.errors.reviews,
  reviews: Object.values(state.entities.reviews),
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(thunkCreateReview(review)),
  openModal: (modal) => dispatch(openModal(modal)),
  clearErrors: () => dispatch(clearReviewErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm));
