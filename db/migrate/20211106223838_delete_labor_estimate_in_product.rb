class DeleteLaborEstimateInProduct < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :labor_estimate
  end
end
