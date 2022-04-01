class RemoveUniqueConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_index :cart_items, name: "index_cart_items_on_product_id_and_cart_id", unique: true
    add_index :cart_items, :product_id
    add_index :cart_items, :cart_id
  end
end
