class DropBizTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :category
  end
end
