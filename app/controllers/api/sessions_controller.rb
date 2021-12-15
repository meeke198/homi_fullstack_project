class Api::SessionsController < ApplicationController
  def create #login
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      # @cart = Cart.new(cart_params)
      # if @cart.save
      #     render :show
      # else
      #     render json :@cart.errors.full_messages, status: 422
      # end
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy #logout
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
  
  private
    def cart_params
        params.require(:cart).permit(:user_id)
    end
end
