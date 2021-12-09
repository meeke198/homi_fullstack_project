import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import CreateReviewForm from "./create_review_form";


const mapStateToProps = (state, ownProps) => ({
  review: state.entities.reviews[ownProps.match.params.productId],
  currentUser: state.entities.users[state.session.id],
});
//[ownProps.match.params.productId] lay id tu url
//state(redux), ownProps(state tu cha truyen xuong = state cua react);
const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);
