json.extract! @product, :id, :product_name, :seller_id, :price, :image_url, :description, :labor_estimate,:category_id
json.image_url url_for(@product.photo) if @product.photo.attached?