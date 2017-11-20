class BusinessCategory < ApplicationRecord
  validates :business, :category, presence: true 
  belongs_to :business 
  belongs_to :category
end
