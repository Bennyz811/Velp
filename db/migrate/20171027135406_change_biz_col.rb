class ChangeBizCol < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :user_id, :integer
  end
end
