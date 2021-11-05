@products.each do |product|
    json.set! product.id do
        json.extract! product, :product_name, :seller_id, :price, :image_url, :description
    end
end
