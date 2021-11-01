# class Api::CartItemsCOntroller < ApplicationController

#     before_action :require_login

#     def index
#         @cart_items = CartItem.where(user_id: current_user.id)
#     end

    


#     def cart_item_params
#         params.require(:cart_item).permit(:product_id, :cart_id, :quantity)
#     end

#     def check_current_cart(cart_item_product_id, quantity)
#         existing_cart_item = CartItem.find_by(product_id: cart_item_product_id, user_id: current_user.id)

#         return !!existing_cart_item
#     end

#     def destroy
#         @cart_item = CartItem.find(params[:id])
#         @cart_item.destroy
#         render json: ['Successfully removed item!']
#     end


# end