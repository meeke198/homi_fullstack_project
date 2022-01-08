import React from 'react'
import StarRatings from "react-star-ratings";
class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.updateContent = this.updateContent.bind(this);
  }
  componentDidMount() {
    if (this.props.formType === 'edit') {
      this.props.fetchReview(this.props.match.params.reviewId);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.setState({ rating: 0, content: "" });
  }
  changeRating(newRating) {
    this.setState({ rating: newRating });
  }
  updateContent(e) {
    e.preventDefault();
    this.setState({ content: e.target.value });
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props
      .updateReview(this.state)
      .then(() => this.props.history.push("/"));
  }
   

  render() {

    if (this.state === null) {
      return null;
    }
    // const { review } = this.props
    const submitButton =
      this.props.formType === "create" ? "Submit Review" : "Edit Review";
    const submit =
      this.props.formType === "create" ? this.handleSubmit : this.handleUpdate;
    
    return (
      <form className="review-form" onSubmit={submit}>
        <h1 className="rating-text">
          Write a review
        </h1>
        <StarRatings
          style={{ marginLeft: "5px" }}
          rating={this.state.rating}
          starRatedColor="#222222"
          starHoverColor="#222222"
          changeRating={this.changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="28px"
          starSpacing="5px"
        />
        <div>
          <textarea
            cols="50"
            rows="5"
            value={this.state.content}
            onChange={this.updateContent}
          ></textarea>
        </div>
        <div className="review-button">
          <button className="review-submit btn" type="submit">
            {submitButton}
          </button>
        </div>
      </form>
    );
  }
}

export default (CreateReviewForm);

