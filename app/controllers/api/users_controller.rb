class Api::UsersController < ApplicationController
  def create #signup
    @user = User.new(user_params)
    if @user.save
      login!(@user) 
        @cart = Cart.new(user_id: @user.id)
        @cart.save
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password)
  end
 
end
