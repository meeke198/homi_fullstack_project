class RemoveUniqueContraintonSchema < ActiveRecord::Migration[5.2]
  def change
    remove_index :products, name: "index_products_on_seller_id", unique: true
    add_index :products, :seller_id
    remove_index :reviews, name: "index_reviews_on_reviewer_id_and_product_id", unique: true
    add_index :reviews, :reviewer_id
    add_index :reviews, :product_id
    remove_index :carts, name: "index_carts_on_user_id_and_id", unique: true
  end
end
