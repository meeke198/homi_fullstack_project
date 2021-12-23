class Api::CartsController < ApplicationController
    before_action :require_login, only:[:show]
    def show
        if current_user.id == params[:user_id]
            @cart = Cart.find_by(user_id: current_user.id)
            render :show
        else
            render json: {error: "Invalid cart access"}
        end
    end
    def create
            @cart = Cart.new(user_id: current_user.id)
            if @cart.save
                render :show
            else
                render json: @cart, status: :unprocessable_enttity
            end
    end
    private
    def cart_params
        params.require(:cart).permit(:user_id)
    end
end

