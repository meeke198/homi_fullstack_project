class Api::ProductsController < ApplicationController
  def index 
    # debugger
    # if params[:search] == ""
    #   @products = Product.all
    # else
    #   @products == Product.where("product_name LIKE ?", "%" + params[:search] + "%" ) .or(Product.where("category LIKE ?", "%" + params[:search] + "%" )) .or(Product.where("discription LIKE ?", "%" + params[:search] + "%" ))
    #   debugger
      
    # end
    @products = Product.search_query_match(params[:search])
    render :index
  end


  def show
    @product = Product.find(params[:id])
    render :show
  end

  # def search 
  #   @products = Product.where("product_name LIKE ")
  # end

  private
  
  def product_params
    params.require(:product).permit(:product_name, :seller_id, :price, :description, :category, :photo)
  end
end
