class ChangeBizCol2 < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :user_id 
  end
end
