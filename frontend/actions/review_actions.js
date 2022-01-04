import * as reviewAPIUtil from "../util/review_api_util"
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";

export const receiveReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

export const createReview = (review) => ({
  type: CREATE_REVIEW, 
  review
});

export const updateReview = (review) => ({
  type: UPDATE_REVIEW, 
  review
});



export const thunkFetchReviews = (productId) => dispatch => (
  reviewAPIUtil.apiReceiveAllReviews(productId)
  .then(reviews => dispatch(receiveReviews(reviews)))
);


export const thunkCreateReview = (review, productId) => (dispatch) =>
  reviewAPIUtil
    .apiCreateReview(review, productId)
    .then((review) => dispatch(receiveReview(review)));


export const thunkUpdateReview = (review) => (dispatch) =>
  reviewAPIUtil.apiUpdateReview(review).then(
    (review) => dispatch(updateReview(review)));

