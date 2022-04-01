import {
  RECEIVE_REVIEW_ERRORS,
//   RECEIVE_CURRENT_USER,
  CLEAR_REVIEW_ERRORS,
} from "../actions/review_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    // case RECEIVE_CURRENT_USER:
    //   return [];
    case CLEAR_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
};

//RECEIVE_SESSION_ERRORS: sets errors to the action's errors
//CLEAR_SESSION_ERRORS: clears the errors
