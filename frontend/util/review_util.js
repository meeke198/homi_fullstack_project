export const apiCreateReview = (review) =>
  $.ajax({
    url: `api/reviews`,
    method: "POST",
    data: { review }
  });

export const apiReceiveReview = (reviewId) =>
  $.ajax({
    url: `api/reviews/${reviewId}`,
  });


export const apiReceiveAllReviews = (productId) =>
  $.ajax({
    url: `api/reviews/${productId}/reviews`
  });

export const apiUpdateReview = (review) =>
  $.ajax({
    url: `api/reviews/${review.id}`,
    method: "PATCH",
    data: { review },
  });

export const apiDeleteReview = (reviewId) =>
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: "DETELE",
  });
