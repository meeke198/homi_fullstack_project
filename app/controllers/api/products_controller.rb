class Api::ProductsController < ApplicationController
  def index 
   @product = Product.all
   render :index
  end


  def show
    @product = Product.find(params[:id])
    render :show
  end


  private
  
  def product_params
    params.require(:product).permit(:product_name, :seller_id, :price, :image_url, :description, :labor_estimate,:category_id)
  end
end

#  id             :bigint           not null, primary key
#  product_name   :string           not null
#  category_id    :integer          not null
#  labor_estimate :string           not null
#  price          :integer          not null
#  seller_id      :integer          not null
#  image_url      :string           not null
#  description    :text             not null
#  updated_at     :datetime         not null
#  created_at     :datetime 