class Categories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.integer :biz_id
      t.string :name, null: false
      t.timestamps
    end
  end
end
