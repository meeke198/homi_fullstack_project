import {
RECEIVE_ALL_REVIEWS,
CREATE_REVIEW,
UPDATE_REVIEW,
} from "../actions/review_actions";

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case CREATE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case UPDATE_REVIEW:
      nextState[action.review.id] = action.review;
      return nextState;
    default:
      return oldState;
  }
};
export default reviewsReducer;
