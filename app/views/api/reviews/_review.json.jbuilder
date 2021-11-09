json.extract! review, :id, :reviewer_id, :product_id, :content, :rating
json.user review.reviewer
json.product review.product
