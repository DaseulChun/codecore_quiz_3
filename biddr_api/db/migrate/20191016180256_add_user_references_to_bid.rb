class AddUserReferencesToBid < ActiveRecord::Migration[6.0]
  def change
    add_reference :bids, :user, foreign_key: true
  end
end
