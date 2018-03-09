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
  zip_code: 12345,
  image: File.open("app/assets/images/johnnychan.jpg"),
  image_content_type: "image/jpeg"
})

roger = User.create!({
  email: "roger@roger.com",
  first_name: "Roger",
  last_name: "Federer",
  password: "federer",
  zip_code: 987876,
  image: File.open("app/assets/images/roger.jpg"),
  image_content_type: "image/jpeg"
})

jon_stewart = User.create!({
  email: "jon@jon.com",
  first_name: "Jon",
  last_name: "Stewart",
  password: "jonstew",
  zip_code: 98776,
  image: File.open("app/assets/images/jon.jpg"),
  image_content_type: "image/jpeg"
  })

stephen_colbert = User.create!({
  email: "stephen@stephen.com",
  first_name: "stephen",
  last_name: "Colbert",
  password: "stepcol",
  zip_code: 23421,
  image: File.open("app/assets/images/stephen.jpg"),
  image_content_type: "image/jpeg"
  })

rafael_nadal = User.create!({
  email: "rafa@rafa.com",
  first_name: "Rafa",
  last_name: "Nadal",
  password: "rafanadal",
  zip_code: 86548,
  image: File.open("app/assets/images/rafa.jpg"),
  image_content_type: "image/jpeg"
  })

daniel_negraneu = User.create!({
  email: "dan@dan.com",
  first_name: "Daniel",
  last_name: "Negraneu",
  password: "danneg",
  zip_code: 87654,
  image: File.open("app/assets/images/daniel.jpg"),
  image_content_type: "image/jpeg"
  })

phily_ivey = User.create!({
  email: "phil@phil.com",
  first_name: "Phil",
  last_name: "Ivey",
  password: "philphil",
  zip_code: 45678,
  image: File.open("app/assets/images/phil.jpg"),
  image_content_type: "image/jpeg"
  })

walter_white = User.create!({
  email: "walter@walter.com",
  first_name: "Walter",
  last_name: "White",
  password: "walterblue",
  zip_code: 38906,
  image: File.open("app/assets/images/walter.jpg"),
  image_content_type: "image/jpeg"
  })

doug_polk = User.create!({
  email: "doug@doug.com",
  first_name: "Doug",
  last_name: "Polk",
  password: "dougpolk",
  zip_code: 987654,
  image: File.open("app/assets/images/doug.jpg"),
  image_content_type: "image/jpeg"
  })

richard_hendricks = User.create!({
  email: "richard@rich.com",
  first_name: "Richard",
  last_name: "Hendricks",
  password: "richardrich",
  zip_code: 134511,
  image: File.open("app/assets/images/richard.jpg"),
  image_content_type: "image/jpeg"
  })

dinesh = User.create!({
  email: "dinesh@dinesh.com",
  first_name: "Dinesh",
  last_name: "Chugtai",
  password: "dineshdin",
  zip_code: 98138,
  image: File.open("app/assets/images/dinesh.jpg"),
  image_content_type: "image/jpeg"
  })

gilfoyle = User.create!({
  email: "gil@gil.com",
  first_name: "Bertram",
  last_name: "Gilfoyle",
  password: "gilgilgil",
  zip_code: 98765,
  image: File.open("app/assets/images/gilfoly.jpg"),
  image_content_type: "image/jpeg"
  })

claire = User.create!({
  email: "claire@claire.com",
  first_name: "Claire",
  last_name: "Underwood",
  password: "underwood",
  zip_code: 87953,
  image: File.open("app/assets/images/claire.jpg"),
  image_content_type: "image/jpeg"
  })

gavin = User.create!({
  email: "gavin@gavin.com",
  first_name: "Gavin",
  last_name: "Belson",
  password: "gavingavin",
  zip_code: 130091,
  image: File.open("app/assets/images/gavin.jpg"),
  image_content_type: "image/jpeg"
  })

erlich = User.create!({
  email: "erlich@erlich.com",
  first_name: "Erlich",
  last_name: "Bachman",
  password: "erlichas",
  zip_code: 325225,
  image: File.open("app/assets/images/erlich.jpg"),
  image_content_type: "image/jpeg"
  })
# User.create!(demo)
# User.create!(roger)
# User.create!(jon_stewart)
# User.create!(stephen_colbert)
# User.create!(rafael_nadal)
# User.create!(walter_white)
# User.create!(phily_ivey)
# User.create!(daniel_negraneu)
# User.create!(gavin)
# User.create!(erlich)
# User.create!(richard_hendricks)
# User.create!(dinesh)
# User.create!(gilfoyle)
# User.create!(doug_polk)
# User.create!(claire)

chikfila = {
  biz_name: "Chik-fil-A",
  address: "1000 6th Ave",
  phone: "212-704-9920",
  neighborhood: "Time square",
  category: "Chicken",
  rating: 4,
  cost: 2,
  lat: 40.7510535,
  lng: -73.9889654,
  image: File.open("app/assets/images/meal.jpg"),
  image_content_type: "image/jpeg"
}

kfc = {
  biz_name: "kfc",
  address: "761 7th ave",
  phone: "212-704-9920",
  neighborhood: "Time square",
  category: "Chicken",
  rating: 4,
  cost: 2,
  lat: 40.751,
  lng: -74.003,
  image: File.open("app/assets/images/kfc.jpg"),
  image_content_type: "image/jpeg"
}

woorijip = Business.create!({
  biz_name: "Woorijip",
  address: "12 w 32nd st",
  phone: "212 244 1115",
  neighborhood: "ktown",
  category: "korean",
  rating: 3,
  cost: 1,
  lat: 40.747351,
  lng: -73.9887053,
  image: File.open("app/assets/images/woorijip.jpg"),
  image_content_type: "image/jpeg"
})

picnic_garden = Business.create!({
  biz_name: "Picnic Garden",
  address: "154-05 northern blvd",
  phone: "718 886 5050",
  neighborhood: "flushing",
  category: "korean",
  rating: 3,
  cost: 1,
  lat: 40.7648348,
  lng: -73.8127505,
  image: File.open("app/assets/images/picnic_garden.jpg"),
  image_content_type: "image/jpeg"
})

sophies = Business.create!({
  biz_name: "Sophie's Cuban",
  address: "21 w 45th st New York, NY",
  phone: "212 302 1211",
  neighborhood: "Midtown West",
  category: "cuban",
  rating: 4,
  cost: 2,
  lat: 40.728349,
  lng: -74.01999,
  image: File.open("app/assets/images/sophies.jpg"),
  image_content_type: "image/jpeg"
})

gong_cha = Business.create!({
  biz_name: "Gong Cha",
  address: "75 W 38th St New York, NY",
  phone: "718 886 5050",
  neighborhood: "Midtown West",
  category: "boba",
  rating: 3,
  cost: 2,
  lat: 40.7283384,
  lng: -74.0199929,
  image: File.open("app/assets/images/gong_cha.jpg"),
  image_content_type: "image/jpeg"
})

perse = Business.create!({
  biz_name: "per se",
  address: "10 Columbus Cir New York, NY",
  phone: "718 886 5050",
  neighborhood: "Hell's Kitchen",
  category: "French",
  rating: 4,
  cost: 4,
  lat: 40.7682269,
  lng: -73.98504,
  image: File.open("app/assets/images/perse2.jpg"),
  image_content_type: "image/jpeg"
})

upstate = Business.create!({
  biz_name: "Upstate",
  address: "95 1st Ave New York, NY 10003",
  phone: "718 886 5050",
  neighborhood: "Midtown West",
  category: "Seafood",
  rating: 4,
  cost: 2,
  lat: 40.7263542,
  lng: -73.988742,
  image: File.open("app/assets/images/upstate.jpg"),
  image_content_type: "image/jpeg"
})

icecream = Business.create!({
  biz_name: "Ample Hill Creamery",
  address: "623 Vanderbilt Ave
Brooklyn, NY",
  phone: "718 886 5050",
  neighborhood: "Prospect Heights",
  category: "ice cream",
  rating: 4,
  cost: 2,
  lat: 40.7263489,
  lng: -74.0215726,
  image: File.open("app/assets/images/icecream.jpg"),
  image_content_type: "image/jpeg"
})

van_leeu = Business.create!({
  biz_name: "Van Leeuwen",
  address: "172 Ludlow St
New York, NY",
  phone: "718 886 5050",
  neighborhood: "Lower East Side",
  category: "ice cream",
  rating: 4,
  cost: 2,
  lat: 40.7263383,
  lng: -74.0215,
  image: File.open("app/assets/images/van_leeu.jpg"),
  image_content_type: "image/jpeg"
})

momofuku = Business.create!({
  biz_name: "Momofuku",
  address: "171 1st Ave
New York, NY",
  phone: "718 886 5050",
  neighborhood: "East Village",
  category: "Ramen",
  rating: 4,
  cost: 2,
  lat: 40.729233,
  lng: -73.9866987,
  image: File.open("app/assets/images/momofuku.jpg"),
  image_content_type: "image/jpeg"
})

jajaja = Business.create!({
  biz_name: "Jajaja",
  address: "162 E Broadway
New York, NY",
  phone: "718 886 5050",
  neighborhood: "Lower East Side",
  category: "Vegan",
  rating: 4,
  cost: 2,
  lat: 40.7142229,
  lng: -73.9925793,
  image: File.open("app/assets/images/jajaja.jpg"),
  image_content_type: "image/jpeg"
})

blossom = Business.create!({
  biz_name: "Blossom",
  address: "187 9th Ave
New York, NY ",
  phone: "718 886 5050",
  neighborhood: "Chelsea",
  category: "Vegan",
  rating: 4,
  cost: 3,
  lat: 40.7142176,
  lng: -74.0254099,
  image: File.open("app/assets/images/blossom.jpg"),
  image_content_type: "image/jpeg"
})

dirt_candy = Business.create!({
  biz_name: "Dirt Candy",
  address: "154 E 79th St
New York, NY ",
  phone: "718 886 5050",
  neighborhood: "Upper East Side",
  category: "Vegan",
  rating: 4,
  cost: 3,
  lat: 40.7179086,
  lng: -73.9929057,
  image: File.open("app/assets/images/dirt_candy.jpg"),
  image_content_type: "image/jpeg"
})

han = Business.create!({
  biz_name: "Han Dynasty",
  address: "90 3rd Ave
New York, NY ",
  phone: "718 886 5050",
  neighborhood: "East Village",
  category: "Chinese",
  rating: 4,
  cost: 2,
  lat: 40.7179072,
  lng: -74.0082266,
  image: File.open("app/assets/images/han.jpg"),
  image_content_type: "image/jpeg"
})

wah_fung = Business.create!({
  biz_name: "Wah Fung",
  address: "79 Chrystie St
New York, NY",
  phone: "718 886 5050",
  neighborhood: "Lower East Side",
  category: "Chinese",
  rating: 5,
  cost: 1,
  lat: 40.717339,
  lng: -73.9967727,
  image: File.open("app/assets/images/wah-fung.jpg"),
  image_content_type: "image/jpeg"
})

shake_shack = Business.create!({
  biz_name: "Shake Shack",
  address: "E 23rd St & Madison Ave
New York, NY ",
  phone: "718 886 5050",
  neighborhood: "Flatiron",
  category: "burgers",
  rating: 4,
  cost: 2,
  lat: 40.7408761,
  lng: -73.9901701,
  image: File.open("app/assets/images/shake-shack.jpg"),
  image_content_type: "image/jpeg"
})

five_guys = Business.create!({
  biz_name: "Five Guys",
  address: "138 Montague St
Brooklyn, NY ",
  phone: "718 886 5050",
  neighborhood: "Brooklyn Heights",
  category: "Burgers",
  rating: 4,
  cost: 2,
  lat: 40.6944743,
  lng: -73.9960248,
  image: File.open("app/assets/images/five-guys.jpg"),
  image_content_type: "image/jpeg"
})

bowery_road = Business.create!({
  biz_name: "Bowery Road",
  address: "132 4th Ave
New York, NY ",
  phone: "718 886 5050",
  neighborhood: "Union Square",
  category: "American",
  rating: 5,
  cost: 3,
  lat: 40.7332643,
  lng: -73.9923977,
  image: File.open("app/assets/images/bowery.jpg"),
  image_content_type: "image/jpeg"
})

sushi_jones = Business.create!({
  biz_name: "Sushi on Jones",
  address: "210 W 10th St
New York, NY",
  phone: "718 886 5050",
  neighborhood: "West Village",
  category: "Sushi",
  rating: 5,
  cost: 3,
  lat: 40.7266766,
  lng: -73.9942636,
  image: File.open("app/assets/images/sushi-jones.jpg"),
  image_content_type: "image/jpeg"
})

balthazar = Business.create!({
  biz_name: "Balthazar",
  address: "80 Spring St
New York, NY ",
  phone: "718 886 5050",
  neighborhood: "Soho",
  category: "French",
  rating: 4,
  cost: 3,
  lat: 40.7226242,
  lng: -74.0003601,
  image: File.open("app/assets/images/baltha.jpg"),
  image_content_type: "image/jpeg"
})

# Business.create!(woorijip)
# Business.create!(picnic_garden)
# Business.create!(chikfila)
# Business.create!(sophies)
# Business.create!(gong_cha)
# Business.create!(perse)
# Business.create!(upstate)
# Business.create!(icecream)
# Business.create!(van_leeu)
# Business.create!(momofuku)
# Business.create!(jajaja)
# Business.create!(blossom)
# Business.create!(dirt_candy)
# Business.create!(han)
# Business.create!(shake_shack)
# Business.create!(bowery_road)
# Business.create!(sushi_jones)
# Business.create!(balthazar)
# kfc = Business.new(kfc)
# kfc.image = File.open("app/assets/images/meal.jpg")
# kfc.save!

picnic_garden_review = {
  body: "very good stuff, stuff is so very good, good very stuff",
  rating: 4,
  user_id: demo.id,
  biz_id: picnic_garden.id
}

woorijip_review = {
  body: "LOVE LOVE LOVE LOVE",
  rating: 4,
  user_id: roger.id,
  biz_id: woorijip.id
}
woorijip_review2 = {
  body: "WOWOWOWOWOW MUC?H GOOD FOOD",
  rating: 4,
  user_id: jon_stewart.id,
  biz_id: woorijip.id
}
woorijip_review3 = {
  body: "This place is so nice and so big,
  I was able to bring in, not only my wife,
  but also my girlfriend, my secretary, and my second cousin,
  all with the same week and without any of them finding about each other!",
  rating: 4,
  user_id: dinesh.id,
  biz_id: woorijip.id
}
sophies_review = {
  body: "as a part time homeless guy i want to say DO NOT dumpster dive here!",
  rating: 2,
  user_id: gavin.id,
  biz_id: sophies.id
}
sophies_review2 = {
  body: "They didn’t allow any photography, but it was some of the most creative
  (but still delicious) cuisine we’ve ever tasted. Much of it was deliberately
  un-Instagrammable, even if someone tried to break the rules, as the food was often
  tucked into nooks of custom-made tableware.",
  rating: 4,
  user_id: phily_ivey.id,
  biz_id: sophies.id
}
sophies_review3 = {
  body: "This restaurant/experience will and should blow up over food
  journalism, no doubt. I hope that there’s a Netflix special,
  coffee table book, or Chef’s Table for Kahn and his team’s
  breathtaking work. This is a one-in-a-lifetime meal that lasted 4 hours for me.
  There is a bar set in the culinary world and Kahn has upped it to an untouchable
  stratosphere. It was a joy to be greeted by Kahn before heading to the rooftop.
  His vision is so strong and all the small details at this place are worth it.",
  rating: 4,
  user_id: walter_white.id,
  biz_id: sophies.id
}
sophies_review4 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: doug_polk.id,
  biz_id: sophies.id
}
gong_cha_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: roger.id,
  biz_id: gong_cha.id
}
gong_cha_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: rafael_nadal.id,
  biz_id: gong_cha.id
}
gong_cha_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: erlich.id,
  biz_id: gong_cha.id
}
gong_cha_review4 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: richard_hendricks.id,
  biz_id: gong_cha.id
}
perse_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: stephen_colbert.id,
  biz_id: perse.id
}
perse_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: jon_stewart.id,
  biz_id: perse.id
}
perse_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: dinesh.id,
  biz_id: perse.id
}
perse_review4 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: claire.id,
  biz_id: perse.id
}
upstate_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: demo.id,
  biz_id: woorijip.id
}
upstate_review2 = {
  body: "My husband and I are seasoned foodies, having just returned from El Celler de Can Roca in Barcelona, so we are not easily (or often) floored by food. And while food is at the center of Vespertine, it is about so much more than that. It is about escape and surprise, sensation and suspension of disbelief, and most importantly, it is about obsession.",
  rating: 4,
  user_id: gilfoyle.id,
  biz_id: woorijip.id
}
upstate_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: gavin.id,
  biz_id: woorijip.id
}
upstate_review4 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: roger.id,
  biz_id: woorijip.id
}
icecream_review = {
  body: "My husband and I are seasoned foodies, having just returned from El Celler de Can Roca in Barcelona, so we are not easily (or often) floored by food. And while food is at the center of Vespertine, it is about so much more than that. It is about escape and surprise, sensation and suspension of disbelief, and most importantly, it is about obsession.",
  rating: 4,
  user_id: roger.id,
  biz_id: icecream.id
}
icecream_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: dinesh.id,
  biz_id: icecream.id
}
icecream_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: rafael_nadal.id,
  biz_id: icecream.id
}
icecream_review4 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: stephen_colbert.id,
  biz_id: icecream.id
}
van_leeu_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: roger.id,
  biz_id: van_leeu.id
}
van_leeu_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: claire.id,
  biz_id: van_leeu.id
}
van_leeu_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: walter_white.id,
  biz_id: van_leeu.id
}
van_leeu_review4 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: daniel_negraneu.id,
  biz_id: van_leeu.id
}
momofuku_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: phily_ivey.id,
  biz_id: momofuku.id
}
momofuku_review2 = {
  body: "My husband and I are seasoned foodies, having just returned from
   El Celler de Can Roca in Barcelona, so we are not easily (or often)
   floored by food. And while food is at the center of Vespertine, it is about
   so much more than that. It is about escape and surprise, sensation and
   suspension of disbelief, and most importantly, it is about obsession.",
  rating: 4,
  user_id: daniel_negraneu.id,
  biz_id: momofuku.id
}
momofuku_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: roger.id,
  biz_id: momofuku.id
}
momofuku_review4 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: jon_stewart.id,
  biz_id: momofuku.id
}
jajaja_Review = {
  body: "MORE WINE",
  rating: 4,
  user_id: roger.id,
  biz_id: jajaja.id
}
jajaja_Review2 = {
  body: "My husband and I are seasoned foodies, having just returned from
  El Celler de Can Roca in Barcelona, so we are not easily (or often) floored
  by food. And while food is at the center of Vespertine, it is about so much
  more than that. It is about escape and surprise, sensation and suspension of
  disbelief, and most importantly, it is about obsession.",
  rating: 4,
  user_id: richard_hendricks.id,
  biz_id: jajaja.id
}
blossom_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: walter_white.id,
  biz_id: blossom.id
}
blossom_review2 = {
  body: "Blossom is an experience with architecture, space, time and food.
  It the most unique, beautiful and delicious at the same time, the best
  meal ever.",
  rating: 4,
  user_id: jon_stewart.id,
  biz_id: blossom.id
}
dirt_candy_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: rafael_nadal.id,
  biz_id: dirt_candy.id
}
dirt_candy_review2 = {
  body: "Great new place in the West Village. The service was excellent
  and very friendly. This is a great place for a date or group of friends.
  I loved the Ssam buns and a special toro appetizer, and we both loved our
  fish coop and gochu ramyun. The wine and beer menu is also great. This is
  an elegant but casual place and pricing is fair. I'll definitely be back.

Also, I heard that maybe they originally didn't take reservations- which put
me off for a while because I just can't be bothered to go wait around to get
in somewhere. I re-checked, and it turns out you CAN get a reservation on Resy.
 Loved this.",
  rating: 4,
  user_id: stephen_colbert.id,
  biz_id: dirt_candy.id
}
dirt_candy_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: jon_stewart.id,
  biz_id: dirt_candy.id
}
han_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: rafael_nadal.id,
  biz_id: han.id
}
han_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: daniel_negraneu.id,
  biz_id: han.id
}
han_review3 = {
  body: "EXXXXCELLENT EYE HOLES",
  rating: 4,
  user_id: gavin.id,
  biz_id: han.id
}
wah_fung_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: doug_polk.id,
  biz_id: wah_fung.id
}
wah_fung_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: dinesh.id,
  biz_id: wah_fung.id
}
wah_fung_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: claire.id,
  biz_id: wah_fung.id
}
shake_shack_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: demo.id,
  biz_id: shake_shack.id
}
shake_shack_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: phily_ivey.id,
  biz_id: shake_shack.id
}
shake_shack_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: daniel_negraneu.id,
  biz_id: shake_shack.id
}
five_guys_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: demo.id,
  biz_id: five_guys.id
}
five_guys_review2 = {
  body: "MORE BUTTER",
  rating: 1,
  user_id: gilfoyle.id,
  biz_id: five_guys.id
}
bowery_road_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: richard_hendricks.id,
  biz_id: bowery_road.id
}
bowery_road_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: walter_white.id,
  biz_id: bowery_road.id
}
bowery_road_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: jon_stewart.id,
  biz_id: bowery_road.id
}
sushi_jones_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: gavin.id,
  biz_id: sushi_jones.id
}
sushi_jones_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: rafael_nadal.id,
  biz_id: sushi_jones.id
}
balthazar_review = {
  body: "DELICIOUS",
  rating: 4,
  user_id: doug_polk.id,
  biz_id: balthazar.id
}
balthazar_review2 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: jon_stewart.id,
  biz_id: balthazar.id
}
balthazar_review3 = {
  body: "DELICIOUS",
  rating: 4,
  user_id: erlich.id,
  biz_id: balthazar.id
}

Review.create!(picnic_garden_review)
Review.create!(woorijip_review)
Review.create!(woorijip_review2)
Review.create!(woorijip_review3)
Review.create!(sophies_review)
Review.create!(sophies_review2)
Review.create!(sophies_review3)
Review.create!(sophies_review4)
Review.create!(gong_cha_review)
Review.create!(gong_cha_review2)
Review.create!(gong_cha_review3)
Review.create!(gong_cha_review4)
Review.create!(perse_review)
Review.create!(perse_review2)
Review.create!(perse_review3)
Review.create!(perse_review4)
Review.create!(upstate_review)
Review.create!(upstate_review2)
Review.create!(upstate_review3)
Review.create!(upstate_review4)
Review.create!(icecream_review)
Review.create!(icecream_review2)
Review.create!(icecream_review3)
Review.create!(icecream_review4)
Review.create!(van_leeu_review)
Review.create!(van_leeu_review2)
Review.create!(van_leeu_review3)
Review.create!(van_leeu_review4)
Review.create!(momofuku_review)
Review.create!(momofuku_review2)
Review.create!(momofuku_review3)
Review.create!(momofuku_review4)
Review.create!(jajaja_Review)
Review.create!(jajaja_Review2)
Review.create!(blossom_review)
Review.create!(blossom_review2)
Review.create!(dirt_candy_review)
Review.create!(dirt_candy_review2)
Review.create!(dirt_candy_review3)
Review.create!(han_review)
Review.create!(han_review2)
Review.create!(han_review3)
Review.create!(wah_fung_review)
Review.create!(wah_fung_review2)
Review.create!(wah_fung_review3)
Review.create!(shake_shack_review)
Review.create!(shake_shack_review2)
Review.create!(shake_shack_review3)
Review.create!(five_guys_review)
Review.create!(five_guys_review2)
Review.create!(bowery_road_review)
Review.create!(bowery_road_review2)
Review.create!(bowery_road_review3)
Review.create!(sushi_jones_review)
Review.create!(sushi_jones_review2)
Review.create!(balthazar_review)
Review.create!(balthazar_review3)
Review.create!(balthazar_review2)

require 'faker'
  100.times {
    food_pic = ["apple-pie", "chinese-chicken", "dumplings", "garlic-bread", "juicy-burger", "milkshake", "noodles", "nutella-banana", "peacan-pie", "pizza-bread", "pizza-bread2", "sandwich", "stew"].sample
    Business.create!(
      biz_name: [
        "#{Faker::RickAndMorty.character}'s #{["Hole", "Place", "Restaurant", "House", "Garden", "Lab", "Plate"].sample}", 
        "#{Faker::Friends.character}'s #{["Hole", "Place", "Restaurant", "House", "Garden", "Lab", "Plate"].sample}",
        "#{Faker::GameOfThrones.character}'s #{["Hole", "Place", "Restaurant", "House", "Garden", "Lab", "Plate"].sample}",
        "#{Faker::Simpsons.character}'s #{["Hole", "Place", "Restaurant", "House", "Garden", "Lab", "Plate"].sample}"
      ].sample,
      address: Faker::Address.unique.street_address,
      phone: "212-#{rand(101..999)}-#{rand(0001..9999)}",
      neighborhood: Faker::Address.community,
      category: ["Chicken", "Korean", "Italian", "Pizza", "French", "Cuban", "Vegan", "Cafe", "Ramen"].sample,
      rating: [2, 2.5, 3, 3.5, 4, 4.5, 5].sample,
      cost: [2,3,4].sample,
      lat: Faker::Address.latitude,
      lng: Faker::Address.longitude,
      image: File.open("app/assets/images/food/#{food_pic}.jpg"),
      image_content_type: "image/jpeg"
    )
  }

  100.times {
    avatar = ["johnnychan", "gavin", "gilfoly", "doug", "daniel", "dinesh", "claire", "erlich", "phil", "rafa", "roger", "richard", "stephen", "walter"].sample
    User.create!(
      email: Faker::Internet.unique.email,
      first_name: Faker::Name.unique.first_name,
      last_name: Faker::Name.unique.last_name,
      password: Faker::Internet.password(6, 8),
      zip_code: Faker::Address.zip,
      image: File.open("app/assets/images/#{avatar}.jpg"),
      image_content_type: "image/jpeg"
    )
  }

  70.times {
    Business.order(:id).all.each do |biz|
      Review.create!(
        body: Faker::Lorem.sentence(rand(4...10)),
        rating: [2,3,4].sample,
        user_id: User.all.sample.id,
        biz_id: biz.id
      )
    end
  }