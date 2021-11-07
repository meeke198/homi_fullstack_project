json.extract! @product, :id, :product_name, :seller_id, :price, :image_url, :description
json.image_url url_for(@product.photo) if @product.photo.attached?