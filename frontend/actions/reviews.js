import * as reviewAPIUtil from "../util/review_util"
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

export const receiveReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW, 
  review
});

export const createReview = (review) => ({
  type: CREATE_REVIEW, 
  review
});

export const updateReview = (review) => ({
  type: UPDATE_REVIEW, 
  review
});


export const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW, 
  reviewId
});


export const fetchReviews = () => dispatch => (
  reviewAPIUtil.apiReceiveAllReviews()
  .then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = (reviewId) => (dispatch) =>
  reviewAPIUtil
    .apiReceiveReview(reviewId)
    .then((review) => dispatch(receiveReview(review)));

export const createReview = (review) => (dispatch) =>
  reviewAPIUtil
    .apiCreateReview(review)
    .then((review) => dispatch(receiveReview(review)));


export const updateReview = (review) => (dispatch) =>
  reviewAPIUtil.apiUpdateReview(review).then(
    (review) => dispatch(updateReview(review)));


  export const deleteReview = (reviewId) => (dispatch) =>
    reviewAPIUtil.apiDeleteReview(reviewId)
    .then(() => dispatch(deleteReview(reviewId))
    );