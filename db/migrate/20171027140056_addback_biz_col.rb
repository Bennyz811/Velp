class AddbackBizCol < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :user_id, :integer
  end
end
