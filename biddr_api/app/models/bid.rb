class Bid < ApplicationRecord
  belongs_to :auction
  belongs_to :user
  
  validates :price, numericality: { greater_than: 0 }
end
