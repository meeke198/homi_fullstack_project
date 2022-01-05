import React from "react";
import ReviewIndexItem from "./review_index_item";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import StarRatings from "react-star-ratings";

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
    debugger
    const { reviews, product, currentUserId, deleteReview, updateReview } =
      this.props;
      console.log("review", reviews)
    if (!this.props.reviews) return null;
    // console.log(this.props.reviews);
    const productReviews = (reviews || []).filter(
      (review) => review.product_id === product.id
    );
    let totalRating = 0;
    (productReviews || []).map(
      (review) => (totalRating += review.rating)
    );
    let avgRating;
    avgRating = Math.round(totalRating / productReviews.length);
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
       
    // let ratings = [];
    // for (let i = 0; i < 5; i++) {
    //   if (i < avgRating) {
    //     ratings.push(
    //       <AiTwotoneStar
    //         style={{ color: "#222222" }}
    //         fontSize="small"
    //         key={i}
    //       />
    //     );
    //   } else {
    //     ratings.push(<AiOutlineStar fontSize="small" key={i} />);
    //   }
    // }
    return (
      <div className="reviews-container">
        <h1 className="total-reviews">
          {productReviews.length} reviews{" "}
          <span>
            <StarRatings
              rating={this.state.rating}
              starRatedColor="#222222"
              starHoverColor="#222222"
              changeRating={avgRating}
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="3px"
            />
            ;
          </span>
        </h1>
        <div className="reviews-list">{renderReviews}</div>
      </div>
    );}
}

export default ReviewIndex;
