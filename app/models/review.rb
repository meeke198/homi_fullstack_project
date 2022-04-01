# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :integer          not null
#  product_id  :integer          not null
#  content     :text             not null
#  rating      :integer          not null
#  updated_at  :datetime         not null
#  created_at  :datetime         not null
#
class Review < ApplicationRecord
validates :rating, :reviewer_id, :product_id, presence: true
validates :rating, inclusion: { in: (1..5) }

  belongs_to :reviewer,
  foreign_key: :reviewer_id,
  class_name: :User


  belongs_to :product,
  foreign_key: :product_id,
  class_name: :Product

  # def self.get_product_reviews(product_id)
  #    self.where("product_id = ?", product_id)
  # end

end
