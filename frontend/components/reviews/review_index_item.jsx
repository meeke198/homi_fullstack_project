import React from "react";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import EditReviewFormContainer from "../Review/edit_review_form_container";

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingReview: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.removeReview = this.removeReview.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.updateReview({ editingReview: !this.state.editingReview });
  }

  removeReview() {
    // e.preventDefault();
    this.props.handleDelete(this.props.review.id);
  }

  render() {
    const { review, productId } = this.props;
    // console.log(this.props);
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
        <h1>{review.email}</h1>
        <div className="review">
          <div className="review-rating-container">
            <div className="review-rating">{ratings}</div>
          </div>
          <div className="review-content">
            <p>{review.content}</p>
          </div>
          <div className="edit-delete-buttons">
            <Link
              to={`/reviews/${review.id}`}
              className="edit-review"
            >
              <button className="edit-review-btn">Edit</button>
            </Link>
          </div>
          <button type="submit" onClick={() => this.removeReview()}>Remove</button>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
