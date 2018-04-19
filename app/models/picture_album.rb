class PictureAlbum < ApplicationRecord
    validates :user_id, :biz_id, presence: true

    belongs_to :user 

    belongs_to :business,
    foreign_key: :biz_id,
    class_name: 'Business'

    has_attached_file :image
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
