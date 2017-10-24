class Business < ApplicationRecord
  validates :user_id, :biz_name, :address, :phone,
            :neighborhood, :category,
            :cost, presence: true

  belongs_to :users
  has_many :reviews
end
