class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :birthday, null: false
      t.datetime :create_at, null: false
      t.datetime :updated_at, null: false
      
      t.timestamps
    end
  add_index :users, [:email, :session_token], unique: true
  add_index :users, :name
  end
end
