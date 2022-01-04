import React from 'react'
import StarRatings from "react-star-ratings";

class CreateReviewForm extends React.Component {
    constructor(props){
      debugger
        super(props)
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.updateContent = this.updateContent.bind(this);
        
    }
    handleSubmit(e){
      debugger
        e.preventDefault();
        this.props.createReview(this.state);  
    }
    changeRating(newRating){
        this.setState({rating: newRating})
    }
    updateContent(e){
      e.preventDefault();
        this.setState({content: e.target.value})
    }

    render() {
      debugger
      if(this.state === null){
        return null
      }
      return (
        <form className="review-form" onSubmit={this.handleSubmit}>
          <label htmlFor="rating">Rating</label>
          <StarRatings rating={this.state.rating} 
          starRatedColor="#222222"
          starHoverColor="#222222"
          changeRating={this.changeRating}
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

