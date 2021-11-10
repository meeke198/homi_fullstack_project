json.extract! cart_item, :id, :cart_id, :product_id, :category, :quantity
json.cart cart_item.cart 

json.product cart_item.product
json.quantity cart_item.quantity
json.image_url url_for(cart_item.product.photo)