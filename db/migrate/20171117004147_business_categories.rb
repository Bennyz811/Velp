class BusinessCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :business_categories do |t|
      t.integer :business_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end
