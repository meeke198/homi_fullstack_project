class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:create, :destroy]
    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show 
        @review = Review.find_by(user_id: current_user.id)
        render :show
    end

    def index
        @reviews = Review.all
        render :index

    end


    def updated
        @review = Review.find_by(id: params[:id])

        if @review && @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 400
        end
    end
    


    def destroy
        @cart_item = Review.find_by(user_id: current_user.id)
        @cart_item.destroy
        render json: ['Successfully removed item!']
    end

    private
    def review_params
        params.require(:review).permit(:reviewer_id, :product_id, :content, :rating)
    end

end