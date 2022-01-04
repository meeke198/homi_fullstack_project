export const apiCreateReview = (review, productId) =>
  $.ajax({
    url: `api/products/${productId}/reviews`,
    method: "POST",
    data: { review }
  });

// export const apiReceiveReview = (reviewId, productId) =>
//   $.ajax({
//     url: `api/products/${productId}/reviews/${reviewId}`,
//   });


export const apiReceiveAllReviews = (productId) =>
  $.ajax({
    url: `api/products/${productId}/reviews`
  });

export const apiUpdateReview = (review) =>
  $.ajax({
    url: `api/reviews/${review.id}`,
    method: "PATCH",
    data: { review },
  });

