class Category < ApplicationRecord
  validates :name, presence: true

  has_many :businesses,
  through: :category,
  source: :business

  has_many :business_categories,
  inverse_of: :category,
  dependent: :destroy
end
