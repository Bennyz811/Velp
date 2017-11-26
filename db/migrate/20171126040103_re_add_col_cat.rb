class ReAddColCat < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :category, :string
  end
end
