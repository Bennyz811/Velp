class ChangeRevCol < ActiveRecord::Migration[5.1]
  def change
    remove_column :reviews, :body
    add_column :reviews, :body, :text
  end
end
