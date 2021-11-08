class DeleteCategoriesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :categories
    remove_column :products, :category_id, :labor_estimate
    change_column_null :reviews, :content, true
  end
end
