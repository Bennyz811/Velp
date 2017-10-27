class Business < ApplicationRecord
  validates :biz_name, :address, :phone, :neighborhood, :category,
            :cost, presence: true

  belongs_to :user, optional: true
  has_many :reviews
end
