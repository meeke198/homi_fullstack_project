class RemoveCreateAtFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :create_at
  end
end
