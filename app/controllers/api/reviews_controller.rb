class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:create, :destroy, :update]
    def create
        # debugger
        @reviews = current_user.reviews
        currentReview = false;
        @reviews.each do |review|
           currentReview = true if review.product_id == review_params[:product_id].to_i
        end
        # debugger
        if !currentReview
            @review = Review.new(review_params)
            @review.save 
            render :show  
        else
            # flash.now[:errors] = ["You already left a review for this product!"]
            render json: ["You already left a review for this product!"], status: 401
        end
    end

    def show 
        @review = Review.find(params[:id])
        render :show
    end

    def index
        # debugger
        @reviews = Review.all
        render :index

    end


    def update
        @review = Review.find(params[:id])
        if @review && @review.update(review_params)
            render :show
        else
            render json: ["Please don't leave any field blank! :)"], status: 401
        end
    end

     def destroy
        # debugger
        @review = Review.find(params[:id])
        @review.destroy   
    end

    private
    def review_params
        params.require(:review).permit(:reviewer_id, :product_id, :content, :rating)
    end

end