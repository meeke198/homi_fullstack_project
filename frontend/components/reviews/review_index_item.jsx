import React from "react";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.updateReview(this.props.review);
  }

  handleDelete() {
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    const { review, currentUser } = this.props;
    let ratings = [];
    for (let i = 0; i < 5; i++) {
      if (i < review.rating) {
        ratings.push(
          <AiTwotoneStar
            style={{
              color: "#222222",
              width: "22px",
              height: "22px",
              marginRight: "10px",
            }}
            key={i}
          />
        );
      } else {
        ratings.push(
          <AiOutlineStar
            style={{
              color: "#222222",
              width: "25px",
              height: "22px",
              marginRight: "10px",
            }}
            key={i}
          />
        );
      }
    }

    // const display = (currentUser?.id === review?.reviewer_id) ? (
    //   <div className="edit-delete-buttons">
    //     <Link to={`/reviews/${review.id}/edit`} className="edit-review">
    //       <button className="review-btn btn">Edit</button>
    //     </Link>
    //     <button
    //       className="review-btn btn"
    //       type="submit"
    //       onClick={() => this.handleDelete()}
    //     >
    //       Remove
    //     </button>
    //   </div>
    // ) : (
    //   <div></div>
    // );
    return (
      <div className="review">
        <p className="email">{review.reviewer.email}</p>
        <div className="review">
          <div className="review-rating-container">
            <div className="review-rating">{ratings}</div>
          </div>
          <div className="review-content">
            <p>{review.content}</p>
          </div>
        
            {currentUser?.id === review?.reviewer_id ? (
              <div className="edit-delete-buttons">
                <Link to={`/reviews/${review.id}/edit`} className="edit-review">
                  <button className="review-btn btn">Edit</button>
                </Link>
                <button
                  className="review-btn btn"
                  type="submit"
                  onClick={() => this.handleDelete()}
                >
                  Remove
                </button>
              </div>
            ) : (
              <div></div>
            )}
       
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
