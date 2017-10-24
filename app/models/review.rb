class Review < ApplicationRecord
  validates :user_id, :body, :rating, :biz_id, presence: true

  belongs_to :users
  belongs_to :businesses
end
