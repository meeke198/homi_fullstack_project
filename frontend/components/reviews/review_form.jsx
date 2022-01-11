import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi';
import { MdTrendingUp } from 'react-icons/md';
import StarRatings from "react-star-ratings";
class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.clearErrors = this.clearErrors.bind(this);
  }
  componentDidMount() {
    if (this.props.formType === "edit") {
      this.props.fetchReview(this.props.match.params.reviewId);
    }
    if(this.props.errors?.length){
      this.props.clearErrors()
    }
  }
  renderErrors() {
    return (
      <ul style={{ width: "100vw", height:"40px" }}>
        {this.props.errors.map((error, i) => (
          <li style={{ marginBottom: 10, color: "red", fontSize: "12px" }} key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    // debugger
     e.preventDefault();
    const { currentUser, reviews, product } = this.props
    console.log("reviews", reviews)
    // const productReviews = (reviews || []).filter((review) => {
    //   return review.product_id === product.id;
    // });
    // if (currentUser && productReviews.length) {
    //   let currentUsersReview = false;
    //    (productReviews || []).forEach((review) => {
    //      if (review.reviewer_id === currentUser.id){
    //        currentUsersReview = true;
    //      }
    //    })
    //   if (currentUsersReview) {
    //     this.renderErrors();
    //   } else {
    //     // debugger;
    //     this.props.createReview(this.state);
    //     this.setState({ rating: 0, content: "" });
    //   }
    // } else if (currentUser && !productReviews.length) {
      // debugger;
      if (currentUser){
      this.props.createReview(this.state);
      this.setState({ rating: 0, content: "" });
    } else {
      // debugger;
      this.props.openModal("login");
    }
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
    const { errors } = this.props
    const submitButton =
      this.props.formType === "create" ? "Submit Review" : "Edit Review";
    const submit =
      this.props.formType === "create" ? this.handleSubmit : this.handleUpdate;

    return (
      <form className="review-form" onSubmit={submit}>
        <h1 className="rating-text">Write a review</h1>
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
        {errors?.length ? this.renderErrors() : null}
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

