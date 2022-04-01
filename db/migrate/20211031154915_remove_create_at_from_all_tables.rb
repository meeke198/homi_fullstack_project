class RemoveCreateAtFromAllTables < ActiveRecord::Migration[5.2]
  def change
    tables = [:reviews, :products, :categories, :carts, :cart_items]

    tables.each do |table_name|
      remove_column table_name, :create_at
    end
  end
end
