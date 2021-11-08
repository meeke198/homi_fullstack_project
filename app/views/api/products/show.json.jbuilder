json.extract! @product, :id, :product_name, :price, :description
json.imageUrl url_for(@product.photo) if @product.photo.attached?