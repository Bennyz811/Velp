class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.integer :user_id, null: false
      t.string :biz_name, null: false
      t.string :address, null: false
      t.string :phone
      t.string :neighborhood
      t.string :category, null: false
      t.integer :rating, null: false
      t.integer :cost, null: false

      t.timestamps
    end
    add_index :businesses, :category
    add_index :businesses, :rating
    add_index :businesses, :cost
  end
end
