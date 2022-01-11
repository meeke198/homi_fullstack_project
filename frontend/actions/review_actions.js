import * as reviewAPIUtil from "../util/review_api_util"
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});
export const createReview = (review) => ({
  type: CREATE_REVIEW, 
  review
})
export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW, 
  review
})
export const updateReview = (review) => ({
  type: UPDATE_REVIEW, 
  review
});
export const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW, 
  reviewId
});
export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});

export const thunkFetchReviews = () => dispatch => {
  return reviewAPIUtil.apiReceiveAllReviews()
  .then(reviews => dispatch(receiveReviews(reviews)))
};

export const thunkFetchReview = (reviewId) => (dispatch) =>
  reviewAPIUtil.apiReceiveReview(reviewId).then(
    (review) => dispatch(receiveReview(review))
  );


export const thunkCreateReview = (review) => (dispatch) =>
  reviewAPIUtil.apiCreateReview(review).then(
    (review) => dispatch(createReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );
export const thunkUpdateReview = (review) => (dispatch) =>
  reviewAPIUtil.apiUpdateReview(review).then(
    (review) => dispatch(updateReview(review)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const thunkDeleteReview = (reviewId) => (dispatch) =>
  reviewAPIUtil.apiDeleteReview(reviewId).then(
    () => dispatch(deleteReview(reviewId)));


