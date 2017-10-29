# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = {
  email: "demo@demo.com",
  first_name: "Johnny",
  last_name: "Chan",
  password: "pokerchan",
  zip_code: 12345

}
User.destroy_all
User.create(demo)

chikfila = {
  biz_name: "Chik-fil-A",
  address: "1000 6th Ave",
  phone: "212-704-9920",
  neighborhood: "Time square",
  category: "Chicken",
  rating: 4,
  cost: 2
}

kfc = {
  biz_name: "kfc",
  address: "kfc ave",
  phone: "212-704-9920",
  neighborhood: "Time square",
  category: "Chicken",
  rating: 4,
  cost: 2
}

woorijip = {
  biz_name: "Woorijip",
  address: "12 w 32nd st",
  phone: "212 244 1115",
  neighborhood: "ktown",
  category: "korean",
  rating: 3,
  cost: 1
}

picnicGarden = {
  biz_name: "Picnic Garden",
  address: "154-05 northern blvd",
  phone: "718 886 5050",
  neighborhood: "flushing",
  category: "korean",
  rating: 3,
  cost: 1
}
Business.destroy_all
Business.create(woorijip)
Business.create(chikfila)
Business.create(kfc)
Business.create(picnicGarden)
