export const apiCreateReview = (review) => {
  debugger
  return $.ajax({
    url: `api/reviews`,
    method: "POST",
    data: { review }
  });
}

export const apiReceiveAllReviews = () =>
  $.ajax({
    url: `api/reviews`
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
    method: "DELETE",
  });

