 if @products.present?
    @products.each do |product|
        json.set! product.id do
            json.extract! product, :id, :product_name, :price, :description, :category
            json.image_url url_for(product.photo) if product.photo.attached?
        end
    end
end

