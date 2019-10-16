# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Auction.destroy_all
Bid.destroy_all
User.destroy_all

NUM_AUCTIONS = 20
NUM_USERS = 10
PASSWORD = "supersecret"

NUM_USERS.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

users = User.all

NUM_AUCTIONS.times do
  created_at = Faker::Date.backward(days: 180)
  a = Auction.create(
    title: Faker::House.furniture,
    description: Faker::ChuckNorris.fact,
    ends_at: Faker::Date.forward(days: 90),
    reserve_price: rand(20..10_000),
    created_at: created_at,
    updated_at: created_at,
    user: users.sample
  )

  if a.valid?
    a.bids = rand(0..5).times.map do
      Bid.new(
        price: rand(a.reserve_price..10_000), 
        user: users.sample)
    end
  end
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{auctions.count} auctions", :frogs)
puts Cowsay.say("Generated #{bids.count} bids", :stegosaurus)
puts Cowsay.say("Generated #{users.count} users", :tux)