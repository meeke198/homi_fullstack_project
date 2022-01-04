class Api::ProductsController < ApplicationController
  def index 
    # debugger
   @products = Product.all
   render :index
  end


  def show
    # debugger
    @product = Product.find(params[:id])
    render :show
  end

  

  private
  
  def product_params
    # debugger
    params.require(:product).permit(:product_name, :seller_id, :price, :description, :category, :photo)
  end
end
