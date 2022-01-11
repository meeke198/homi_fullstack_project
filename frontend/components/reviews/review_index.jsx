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
    this.props.fetchReviews();
  }
  render() {
    const { reviews, product, updateReview, deleteReview, errors } =
      this.props;
    const productReviews = (reviews || []).filter(
      (review) => {
       return review.product_id === product?.id
      }
    );
    let totalRating = 0;
    (productReviews || []).map(
      (review) => (totalRating += review.rating)
    );
    let avgRating;
    avgRating = (totalRating / productReviews.length).toFixed(2);
    const renderReviews = productReviews.length ? (
      (productReviews || []).map((review, i) => {
  
        return (
          <div key={`${review.id}-${i}`}>
            <ReviewIndexItem
              review={review}
              productId={product.id}
              updateReview={updateReview}
              deleteReview={deleteReview}
              errors={errors}
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
            Buyers are raving! Multiple people gave 5-star reviews to this shop
            in the past 7 days.
          </p>
        </div>
        <div className="reviews-list">{renderReviews}</div>
      </div>
    );}
}

export default ReviewIndex;
