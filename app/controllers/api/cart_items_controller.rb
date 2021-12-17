class Api::CartItemsController < ApplicationController

    before_action :require_login, only: [:destroy]

    def create
        @cart_item = CartItem.new(cart_item_params)
        # @cart_item.cart_id = params[:cart_id]
        if @cart_item.save
            render :show
        else
            flash[:errors] = ["You need to login!"]
        end
    end



    def index
        cart = Cart.find(params[:cart_id])
        @cart_items = cart.cart_items

        if @cart_items 
            render :index
        else
            redirect_to api_session_url
        end

    end


    def update
        @cart_item = CartItem.find_by(id: params[:id])

        if @cart_item && @cart_item.update(cart_item_params)
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 400
        end
    end
    


    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render json: ['Successfully removed item!']
    end

    private
    def cart_item_params
        params.require(:cart_item).permit(:product_id, :cart_id, :quantity)
    end

end