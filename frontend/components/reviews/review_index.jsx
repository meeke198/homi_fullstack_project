import React from "react";
import ReviewIndexItem from "./review_index_item";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import StarRatings from "react-star-ratings";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchReviews();
  }
  render() {
    // debugger;
    const { reviews, product, currentUserId, updateReview, deleteReview } =
      this.props;
      console.log("reviews", reviews)
    // if (!this.props.reviews) return null;
    // console.log(this.props.reviews);

    const productReviews = (reviews || []).filter(
      (review) => {
        debugger
       return review.product_id === product.id
      }
    );
    console.log("productReviews", productReviews);
    let totalRating = 0;
    debugger;
    (productReviews || []).map(
      (review) => (totalRating += review.rating)
    );
    console.log("totalRating", totalRating);
    let avgRating;
    avgRating = Math.round(totalRating / productReviews.length);
    const renderReviews = productReviews.length ? (
      (productReviews || []).map((review, i) => {
        // debugger;
        return (
          <ReviewIndexItem
            key={i}
            review={review}
            productId={product.id}
            currentUserId={currentUserId}
            updateReview={updateReview}
            deleteReview={deleteReview}
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
          {productReviews.length} reviews{" "}
          <span>{ratings}</span>
        </h1>
        <div className="reviews-list">{renderReviews}</div>
      </div>
    );}
}

export default ReviewIndex;
