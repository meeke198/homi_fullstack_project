json.extract! @product, :id, :product_name, :price, :description
json.image_url url_for(@product.photo) if @product.photo.attached?