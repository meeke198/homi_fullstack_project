import React from "react";
import ReviewIndexItem from "./review_index_item";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  handleDelete(reviewId) {
    // e.preventDefault();
    this.props.deleteReview(reviewId);
  }

  render() {
    const { reviews, product, currentUserId, deleteReview, updateReview } =
      this.props;
    if (!this.props.reviews) return null;
    // console.log(this.props.reviews);
    const productReviews = (reviews || []).filter(
      (review) => review.product_id === product.id
    );
    let avgReview = 0(productReviews || []).map(
      (review) => (avgReview += review.rating)
    );
    const renderReviews = productReviews.length ? (
      (productReviews || []).map((review) => {
        // debugger;
        return (
          <ReviewIndexItem
            key={i}
            review={review}
            productId={product.id}
            currentUserId={currentUserId}
            deleteReview={deleteReview}
            updateReview={updateReview}
          />
        );
      })
    ) : (
      <div>Write the first review for this item</div>
    );

    let ratings = [];
    for (let i = 0; i < 5; i++) {
      if (i < avgRating) {
        ratings.push(
          <AiTwotoneStar
            style={{ color: "#222222" }}
            fontSize="small"
            key={i}
          />
        );
      } else {
        ratings.push(<AiOutlineStar fontSize="small" key={i} />);
      }
    }
    return (
    <div className="reviews-container">
      <h1 className="total-reviews">
        {productReviews.length} reviews <span>{ratings}</span>
      </h1>
      <div className="reviews-list">{renderReviews}</div>
    </div>
    )}
}

export default ReviewIndex;
