import * as reviewAPIUtil from "../util/review_api_util"
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

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



export const thunkFetchReviews = () => dispatch => (
  reviewAPIUtil.apiReceiveAllReviews()
  .then(reviews => dispatch(receiveReviews(reviews)))
);

export const thunkFetchReview = (reviewId) => dispatch => (
  reviewAPIUtil.apiReceiveReview(reviewId)
  .then(review => dispatch(receiveReview(review)))
);


export const thunkCreateReview = (review) => (dispatch) => (
  reviewAPIUtil
    .apiCreateReview(review)
    .then((review) => dispatch(createReview(review)))

);
export const thunkUpdateReview = (review) => (dispatch) =>
  reviewAPIUtil.apiUpdateReview(review).then(
    (review) => dispatch(updateReview(review)));

export const thunkDeleteReview = (reviewId) => (dispatch) =>
  reviewAPIUtil.apiDeleteReview(reviewId).then(
    () => dispatch(deleteReview(reviewId)));

