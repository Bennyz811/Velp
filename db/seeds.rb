# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Business.destroy_all
User.destroy_all
Review.destroy_all

demo = User.create!({
  email: "demo@demo.com",
  first_name: "Johnny",
  last_name: "Chan",
  password: "pokerchan",
  zip_code: 12345
  # File.open("assets/images/johnnychan.jpg"),
})

roger = User.create!({
  email: "roger@roger.com",
  first_name: "Roger",
  last_name: "Federer",
  password: "federer",
  zip_code: 987876
})

# User.create!(demo)
# User.create!(roger)

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
  cost: 2,
  image: File.open("app/assets/images/meal.jpg"),
  image_content_type: "image/jpeg"
}

woorijip = Business.create!({
  biz_name: "Woorijip",
  address: "12 w 32nd st",
  phone: "212 244 1115",
  neighborhood: "ktown",
  category: "korean",
  rating: 3,
  cost: 1
})

picnic_garden = Business.create!({
  biz_name: "Picnic Garden",
  address: "154-05 northern blvd",
  phone: "718 886 5050",
  neighborhood: "flushing",
  category: "korean",
  rating: 3,
  cost: 1
})

# Business.create!(woorijip)
Business.create!(chikfila)
Business.create!(kfc)
# Business.create!(picnic_garden)

picnic_garden_review = {
  body: "very good stuff, stuff is so very good, good very stuff",
  rating: 4,
  user_id: demo.id,
  biz_id: picnic_garden.id
}

woorijip_review = {
  body: "wow, korean, very korean",
  rating: 4,
  user_id: roger.id,
  biz_id: woorijip.id
}
woorijip_review2 = {
  body: "WOWOWOWOWOW MUC?H GOOD FOOD",
  rating: 4,
  user_id: roger.id,
  biz_id: woorijip.id
}
woorijip_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: roger.id,
  biz_id: woorijip.id
}

Review.create!(picnic_garden_review)
Review.create!(woorijip_review)
Review.create!(woorijip_review2)
Review.create!(woorijip_review3)
