class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:create, :destroy]
    def create
        product = Product.find(params[:product_id])
        product_id = product.id
        reviewer_id = current_user.id
        @review = Review.new(review_params)
        @review.product_id = product_id
        @review.reviewer_id = current_user.id
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show 
        @review = Review.find(params[:id])
        render :show
    end

    def index
        @product = Product.find(params[:product_id])
        @reviews = @product.reviews
        render :index

    end


    def update
        # @product = Product.find(params[:product_id])
        @review = Review.find(params[:id])

        if @review && @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 400
        end
    end
    


    # def destroy
    #     # @product = Product.find(params[:product_id])
    #     @review = Review.find(params[:id])
    #     @review.destroy
    #     render json: ['Successfully removed item!']
    # end

    private
    def review_params
        params.require(:review).permit(:id, :content, :rating)
    end

end