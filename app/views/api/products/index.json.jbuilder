@products.each do |product|
    json.array! @products do |product|
        json.extract! product, :id, :product_name
        json.imageUrl url_for(product.photo)
    end
end
