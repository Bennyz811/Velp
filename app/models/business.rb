class Business < ApplicationRecord
  validates :biz_name, :address, :phone, :neighborhood, :category,
            :cost, :rating, presence: true

  has_attached_file :image, default_url: "xian.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user, optional: true
  has_many :reviews,
  foreign_key: :biz_id

  has_many :picture_albums,
  foreign_key: :biz_id

  has_many :categories,
  through: :business_categories,
  source: :category

  has_many :business_categories,
  inverse_of: :business,
  dependent: :destroy
  
  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
    .where("lat > ?", bounds[:southWest][:lat])
    .where("lat > ?", bounds[:southWest][:lng])
    .where("lat < ?", bounds[:northEast][:lng])
  end

  def average_rating
    reviews.average(:rating)
  end
end
