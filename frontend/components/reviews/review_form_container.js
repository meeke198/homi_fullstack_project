import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { thunkCreateReview } from "../../actions/review_actions";
import CreateReviewForm from "./review_form";


const mapStateToProps = (state, ownProps) => ({
  review: {
    content: "",
    rating: 0,
    product_id: ownProps.match.params.productId,
    reviewer_id: state.session.id,
  },
  formType: "create"
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(thunkCreateReview(review)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm));
