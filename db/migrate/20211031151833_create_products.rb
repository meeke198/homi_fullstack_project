class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false
      t.integer :category_id, null: false
      t.string :labor_estimate, null: false
      t.integer :price, null: false
      t.integer :seller_id, null: false
      t.string :image_url, null: false
      t.text :description, null: false, limit: 300
      t.datetime :create_at, null: false
      t.datetime :updated_at, null: false
      
      t.timestamps
    end
  add_index :products, [:category_id, :image_url]
  add_index :products, :seller_id, unique: true
  end
end
