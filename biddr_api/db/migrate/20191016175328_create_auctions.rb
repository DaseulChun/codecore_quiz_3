class CreateAuctions < ActiveRecord::Migration[6.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.float :reserve_price
      t.datetime :ends_at

      t.timestamps
    end
  end
end
