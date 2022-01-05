import React from "react";
import { withRouter } from "react-router";
import StarIcon from "@material-ui/icons/Star";

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.navigateToProductShow = this.navigateToProductShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchProduct(this.props.product.id);
  // }

  handleSubmit(e) {
    e.preventDefault();
    const productId = this.props.review.product_id;
    const review = Object.assign({}, this.state, {
      product_id: productId,
      author_id: this.props.user,
    });

    this.props.updateReview(review, productId);
    // .then(this.props.handleEdit());
    this.navigateToProductShow();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  navigateToProductShow() {
    const url = `/products/${this.props.review.product_id}`;
    this.props.history.push(url);
  }

  render() {
    const { product } = this.props;

    let starRatings = (
      <div className="edit-star-rating">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                className="star-radio"
                value={ratingValue}
                onClick={() => this.setState({ rating: ratingValue })}
              />
              <StarIcon
                className="star"
                style={{
                  color: ratingValue <= this.state.rating ? "black" : "grey",
                }}
                fontSize="small"
              />
            </label>
          );
        })}
      </div>
    );

    if (!product) return null;
    return (
      <div className="review-edit-form">
        <div className="edit-product-review">
          {product.imageUrl && <img src={product.imageUrl} />}
          {/* <img src={this.props.review.product_id.imageUrl} /> */}
          <div>
            <p>{product.title}</p>
            <p>Seller: {product.seller.first_name}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="edit-product-form">
          <h1>Tell us your thoughts!</h1>
          {starRatings}
          <textarea
            rows="10"
            cols="50"
            value={this.state.content}
            onChange={this.update("content")}
          />
          <br />
          <div className="edit-buttons">
            <button type="submit" className="editing-button">
              Submit
            </button>

            <button
              className="editing-button"
              onClick={this.navigateToProductShow}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditReviewForm);
