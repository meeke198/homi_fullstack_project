json.extract! @product, :id, :product_name, :price, :description, :category
json.image_url url_for(@product.photo) if @product.photo.attached?