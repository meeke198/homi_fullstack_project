 @products.each do |product|
 json.set product.id do
        json.extract! product, :id, :product_name, :price
        json.imageUrl url_for(product.photo)
    end
end

