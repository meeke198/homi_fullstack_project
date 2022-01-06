import React from "react";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
// import EditReviewFormContainer from "../Review/edit_review_form_container";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    // this.removeReview = this.removeReview.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.updateReview(this.props.review);
  }

  handleDelete() {
    debugger
    // e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    debugger
    const { review } = this.props;
    console.log("review index item-props", this.props);
    let ratings = [];
    for (let i = 0; i < 5; i++) {
      if (i < review.rating) {
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
      <div className="reviewers">
        <p>{review.reviewer.email}</p>
        <div className="review">
          <div className="review-rating-container">
            <div className="review-rating">{ratings}</div>
          </div>
          <div className="review-content">
            <p>{review.content}</p>
          </div>
          <div className="edit-delete-buttons">
            <Link to={`/reviews/${review.id}/edit`} className="edit-review">
              <button className="edit-review-btn">Edit</button>
            </Link>
          </div>
          <button type="submit" onClick={() => this.handleDelete()}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
