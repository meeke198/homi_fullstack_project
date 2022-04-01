class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
    t.integer :reviewer_id, null: false
      t.integer :product_id, null: false
      t.text :content, null: false
      t.integer :rating, null: false
      t.datetime :create_at, null: false
      t.datetime :updated_at, null: false
      
      t.timestamps
    end
  add_index :reviews, [:reviewer_id, :product_id], unique: true
  end
end
