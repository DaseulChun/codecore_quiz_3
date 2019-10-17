class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :reserve_price, :ends_at, :created_at, :updated_at

  belongs_to :user, key: :seller
  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at, :updated_at
  end
end
