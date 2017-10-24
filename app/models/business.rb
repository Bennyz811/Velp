class Business < ApplicationRecord
  validates :user_id, :biz_name, :address, :phone,
            :neighborhood, :category, :rating,
            :cost, presence: true

  belongs_to :users
  has_many :reviews
end
