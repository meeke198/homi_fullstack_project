import React from 'react'
import { AiOutlineStar } from "react-icons/ai";


class CreateReviewForm extends React.Component {
    constructor(props){
      debugger
        super(props)
        this.state = {
            content: "",
            rating: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.updateContent = this.updateContent.bind(this);
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createReview(this.state, this.props.product.id);
        this.setState({content: "", rating: 0})
        
    }
    updateRating(updatedRating){
        this.setState({rating: updatedRating})
    }
    updateContent(e){
      e.preventDefault();
        this.setState({content: e.target.value})
    }

    render() {
      return (
        <form className="review-form" onsubmit={this.handleSubmit}>
          <label htmlFor="rating">Rating</label>
          <AiOutlineStar rating={this.state.rating} 
          starRateColor="#222222"
          starHoverColor="#222222"
          updateRating={this.updateRating}
          numberOfStars={5}
          name="rating"
          starDimension="20px"
          starSpacing="3px"
           />
          <h1>Write a review</h1>
          <div>
            <textarea
              cols="30"
              rows="10"
              value={this.state.content}
              onChange={this.updateContent}
            ></textarea>
          </div>
          <div className="review-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      );
           
        
    }
}

export default CreateReviewForm;

