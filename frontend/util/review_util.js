export const apiCreateReview = (review, productId) =>
  $.ajax({
    url: `api/products/${productId}/reviews`,
    method: "POST",
    data: { review }
  });

export const apiReceiveReview = (reviewId, productId) =>
  $.ajax({
    url: `api/products/${productId}/reviews/${reviewId}`,
  });


export const apiReceiveAllReviews = (productId) =>
  $.ajax({
    url: `api/products/${productId}/reviews`
  });

export const apiUpdateReview = (productId, review) =>
  $.ajax({
    url: `api/products/${productId}/reviews/${review.id}`,
    method: "PATCH",
    data: { review },
  });

export const apiDeleteReview = (review, productId) =>
  $.ajax({
    url: `api/products/${productId}/reviews/${review.id}`,
    method: "DETELE",
  });
