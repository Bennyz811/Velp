class Review < ApplicationRecord
  validates :user_id, :body, :rating, :biz_id, presence: true

  belongs_to :user

  belongs_to :business,
  foreign_key: :biz_id,
  class_name: 'Business'
end
