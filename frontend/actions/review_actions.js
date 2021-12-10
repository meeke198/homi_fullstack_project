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


export const fetchReviews = (productId) => dispatch => (
  reviewAPIUtil.apiReceiveAllReviews(productId)
  .then(reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = (reviewId, productId) => (dispatch) =>
  reviewAPIUtil
    .apiReceiveReview(reviewId, productId)
    .then((review) => dispatch(receiveReview(review)));

export const createReview = (review, productId) => (dispatch) =>
  reviewAPIUtil
    .apiCreateReview(review, productId)
    .then((review) => dispatch(receiveReview(review)));


export const updateReview = (review, productId) => (dispatch) =>
  reviewAPIUtil.apiUpdateReview(review, productId).then(
    (review) => dispatch(updateReview(review)));


  export const deleteReview = (reviewId, productId) => (dispatch) =>
    reviewAPIUtil.apiDeleteReview(reviewId, productId)
    .then(() => dispatch(deleteReview(reviewId))
    );