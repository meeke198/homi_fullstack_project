import React from 'react'
import { BsStarFill } from "react-icons/bs";


class CreateReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: "",
            rating: 1,
            reviewer_id: this.props.currentUserId,
            product_id: this.props.product.id
        }
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createReview(this.state, this.props.product.id)
        
    }
    update(field){
        return (e) => this.setState({[field]: e.currentTarget.value})
    }
    render() {
        let ratings = (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingResult = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      className="star-radio"
                      value={ratingResult}
                      onClick={() => this.setState({ rating: ratingResult })}
                    />
                    <BsStarFill key={i} 
                    className="star"
                    style={{color: ratingResult <= this.state.rating ? "yellow" : "gray"}}/>
                  </label>
                );
            })}
        </div>
        );
      return (
        <div>
          <form onsubmit={this.handleSubmit}>
            <h1>Write a review</h1>
            <div>{ratings}</div>
            <div>
              <textarea
                cols="30"
                rows="10"
                value={this.state.content}
                onChange={this.update("content")}
              ></textarea>
            </div>
            <div className="review-button">
              <button type="submit">Add Review</button>
            </div>
            <div className="review-button">
              <button type="button" onClick={this.props.deleteReview}>Remove Review</button>
            </div>
          </form>
        </div>
      );
           
        
    }
}

export default CreateReviewForm;

