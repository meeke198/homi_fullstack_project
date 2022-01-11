class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:create, :destroy, :update]
    def create
        # debugger
        @review = Review.new(review_params)
        if @review.save 
            render :show  
        else
            flash.now[:errors] = ["You already left a review for this product!"]
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

        if @review.reviewer_id == current_user.id && @review.update(review_params)
            render :show
        else
            flash.now[:errors] = ["Can't update others' reviews!"]
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