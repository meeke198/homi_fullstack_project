# == Schema Information
#
# Table name: products
#
#  id             :bigint           not null, primary key
#  product_name   :string           not null
#  category_id    :integer          not null
#  labor_estimate :string           not null
#  price          :integer          not null
#  seller_id      :integer          not null
#  image_url      :string           not null
#  description    :text             not null
#  updated_at     :datetime         not null
#  created_at     :datetime         not null
#
class Product < ApplicationRecord
    validates :product_name, :seller_id, :description,:price, :category, presence: true
    validates :price,  numericality: { greater_than: 0 }


    belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

    has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review

    has_many :cart_items,
    foreign_key: :product_id,
    class_name: :CartItem

    has_one_attached :photo

    def self.search_query_match(query)
        # debugger
        # self.where("LOWER(name) LIKE ?", "%" + query.downcase + "%")
         self.where("LOWER(products.product_name) LIKE ?", "%" + query + "%" ) .or(self.where("LOWER(products.category) LIKE ?", "%" + query + "%" )) 
        #   .or(self.where("products.description LIKE ?", "%" + query + "%" ))
    end
end
