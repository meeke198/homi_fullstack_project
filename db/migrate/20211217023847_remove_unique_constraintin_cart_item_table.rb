class RemoveUniqueConstraintinCartItemTable < ActiveRecord::Migration[5.2]
  def change
    change_column :cart_items, :product_id, :integer, unique: false
    change_column :cart_items, :cart_id, :integer, unique: false
  end
end
