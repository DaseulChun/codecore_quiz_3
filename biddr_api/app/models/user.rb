class User < ApplicationRecord
  has_secure_password

  has_many :auctions, dependent: :destroy
  has_many :bids, dependent: :destroy

  validates :email, presence: true, uniqueness: true

  def full_name
    "#{first_name} #{last_name}".strip
  end
end
