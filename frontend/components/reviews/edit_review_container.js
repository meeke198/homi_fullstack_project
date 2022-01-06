import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { thunkUpdateReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";
import { clearEventErrors } from "../../actions/event_actions";

const mapStateToProps = (state, ownProps) => ({
  review: Object.values(state.entities.reviews).filter(
    (review) => review.id === ownProps.match.params.reviewId
  )[0],
  formType: "edit",
});

const mapDispatchToProps = () => (dispatch) => ({
  updatereview: (review) => dispatch(thunkUpdateReview(review)),
  fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
);
