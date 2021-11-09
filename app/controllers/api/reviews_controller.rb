class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:create, :destroy]

    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find_by(user_id: current_user.id)
        render :show

    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review && @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 400
        end

    end


    def destroy
        @review = Review.find_by(user_id: current_user.id)
        if @review
            @review.destroy
        else
            render json: @review.errors.full_messages, status: 404
        end
    end

    private
    def review_params
        params.require(:review).permit(:reviewer_id, :product_id, :content, :rating)
    end
end