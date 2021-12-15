class Api::CartsController < ApplicationController
    before_action :require_login, only:[:show]

    def create
        @cart = Cart.new(cart_params)
        if @cart.save
            render :show
        else
            render json :@cart.errors.full_messages, status: 422
        end
    end

    def show
        @cart = Cart.find_by(user_id: current_user.id)
        if @cart
            render :show
        end
    end

    private
    def cart_params
        params.require(:cart).permit(:user_id)
    end
end

