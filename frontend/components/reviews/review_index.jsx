import React from "react";
import ReviewIndexItem from "./review_index_item";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { MdStars } from "react-icons/md";
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
        // debugger
       return review.product_id === product.id
      }
    );
    console.log("productReviews", productReviews);
    let totalRating = 0;
    // debugger;
    (productReviews || []).map(
      (review) => (totalRating += review.rating)
    );
    console.log("totalRating", totalRating);
    let avgRating;
    avgRating = (totalRating / productReviews.length).toFixed(2);
    const renderReviews = productReviews.length ? (
      (productReviews || []).map((review, i) => {
        // debugger;
        return (
          <div>
            <div className="review-border">
              <MdStars
                style={{
                  marginLeft: 30,
                  marginRight: "10px",
                  width: 30,
                  height: 30,
                }}
              />
              <p>
                Buyers are raving! Multiple people gave 5-star reviews to this
                shop in the past 7 days.
              </p>
            </div>

            <ReviewIndexItem
              key={i}
              review={review}
              productId={product.id}
              currentUserId={currentUserId}
              updateReview={updateReview}
              deleteReview={deleteReview}
            />
          </div>
        );
      })
    ) : (
      <div className="review-title">Write the first review for this item</div>
    );
       
    let ratings = [];
    for (let i = 0; i < 5; i++) {
      if (i < avgRating) {
        ratings.push(
          <AiTwotoneStar
            style={{ color: "#222222", width: "30px",
            height: "30px",
            marginLeft: "20px"
            }}
            key={i}
          />
           
        );
      } else {
        ratings.push(
          <AiOutlineStar
            style={{
              color: "#222222",
              width: "30px",
              height: "30px",
              marginLeft: "20px",
            }}
            key={i}
          />
        );
      }
    }
    return (
      <div className="reviews-container">
        <div className="total-reviews">
            <h1>{productReviews.length} reviews</h1>
            <div>{ratings}</div>
          </div>
        <div className="reviews-list">{renderReviews}</div>
      </div>
    );}
}

export default ReviewIndex;
