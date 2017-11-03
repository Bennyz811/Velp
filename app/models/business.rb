class Business < ApplicationRecord
  validates :biz_name, :address, :phone, :neighborhood, :category,
            :cost, :rating, presence: true

  has_attached_file :image, default_url: "xian.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user, optional: true
  has_many :reviews,
  foreign_key: :biz_id
end
