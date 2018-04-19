class AddAttachmentImageToPictureAlbum < ActiveRecord::Migration[5.1]
  def self.up
    change_table :picture_albums do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :picture_albums, :image
  end
end
