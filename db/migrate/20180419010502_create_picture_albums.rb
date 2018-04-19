class CreatePictureAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :picture_albums do |t|
      t.integer :user_id
      t.integer :biz_id
      t.datetime :created_at

      t.timestamps
    end
  end
end
