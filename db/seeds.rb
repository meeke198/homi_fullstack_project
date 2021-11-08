require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all


ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('products')
user1 = User.create!(email: "susu@gmail.com", password: 'password')
user2 = User.create!(email: "kmommy@gmail.com", password: 'password')
user3 = User.create!(email: "woffy@gmail.com", password: 'password')
user4 = User.create!(email: "wendy@gmail.com", password: 'password')
user5 = User.create!(email: "piggy@gmail.com", password: 'password')
user6 = User.create!(email: "owll2@gmail.com", password: 'password')
user7 = User.create!(email: "soup@gmail.com", password: 'password')
user8 = User.create!(email: "guava@gmail.com", password: 'password')
user9 = User.create!(email: "taro@gmail.com", password: 'password')
user10 = User.create!(email: "puppy@gmail.com", password: 'password')
user11 = User.create!(email: "sunny@gmail.com", password: 'password')
user12 = User.create!(email: "cat@gmail.com", password: 'password')
user13 = User.create!(email: "dog@gmail.com", password: 'password')
user14 = User.create!(email: "owl@gmail.com", password: 'password')
user15 = User.create!(email: "milktea@gmail.com", password: 'password')
user16 = User.create!(email: "fishy@gmail.com", password: 'password')
user17 = User.create!(email: "hotdog@gmail.com", password: 'password')
user18 = User.create!(email: "grapes@gmail.com", password: 'password')
user19 = User.create!(email: "frenchfries@gmail.com", password: 'password')
user20 = User.create!(email: "glasses@gmail.com", password: 'password')
user21 = User.create!(email: "chicken@gmail.com", password: 'password')
user22 = User.create!(email: "gimmy@gmail.com", password: 'password')
user23 = User.create!(email: "denvau@gmail.com", password: 'password')
user24 = User.create!(email: "sweet@gmail.com", password: 'password')
user25 = User.create!(email: "helloworld@gmail.com", password: 'password')
user26 = User.create!(email: "header@gmail.com", password: 'password')
user27 = User.create!(email: "ginny@gmail.com", password: 'password')
user28 = User.create!(email: "sunshine@gmail.com", password: 'password')
demoUser = User.create!(email: "demo@gmail.com", password: "password123")


product1 = Product.create!(product_name: "House Bed Frame Twin Full or Queen Made in US", description: "What a great functional piece for your kids room! Now they can have a home inside their home with this adorable house bed frame. Make the transition out of the toddler bed exciting for your little ones!", price: 70, seller_id: 1)
bedframe1 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/bedframe1.webq")
product1.photo.attach(io: bedframe1, filename:"bedframe1.webq")

product2 = Product.create!(product_name: "Natural color linen cover for toddler bed", description: "Add a modern touch to your toddlers house shape bed with our linen covers!" , price: 75.22, seller_id: 2)
bedframe2 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/bedframe2.jpg")
product2.photo.attach(io: bedframe2, filename:"bedframe2.jpg")

product3 = Product.create!(product_name: "Montessori toddler beds Frame bed ", description: "Montessori toddler beds are amazing kids' teepee wood house beds for children. Adorable children's furniture frame bed will make transitioning from a nursery bed or a baby bed to a children's bed smoothly.", price: 200, seller_id: 3)
bedframe3 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/bedframe3.jpg")
product3.photo.attach(io: bedframe3, filename:"bedframe3.jpg")

product4 = Product.create!(product_name: "Tepee House Bed", description: "Adventure awaits with the Teepee full tent complete bed in a box." , price: 290, seller_id: 4)
bedframe4 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/bedroom4.jpg")
product4.photo.attach(io: bedframe4, filename:"bedframe4.jpg")

product5 = Product.create!(product_name: "Lucinda Luxurious 6 Piece 100% Cotton Towel Set", description: "Pamper yourself with the luxurious weight of 600gsm towels and washcloths when you use these cotton towels." , price: 22.21, seller_id: 5)
bath2 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/bath2.jpg")
product5.photo.attach(io: bath2, filename:"bath2.jpg")

product6 = Product.create!(product_name: "Wooden Serving Board for Foods Food Serving Platter Cheese No Engraving", description: "HIGH-QUALITY MATERIALS: This serving board for foods is made of Acacia Wood that is a water-resilient and highly durable material." , price: 40.25, seller_id: 6)
kitchen1 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/kitchen1.webp")
product6.photo.attach(io: kitchen1, filename:"kitchen1.webq")

product7 = Product.create!(product_name: "Funny Dish Towels", description: "Are you looking for a unique gift for someone special? Our personalized kitchen towels are the gift for you!! " , price: 11.77, seller_id: 7)
kitchen2 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/kitchen2.webp")
product7.photo.attach(io: kitchen2, filename:"kitchen2.webq")

product8 = Product.create!(product_name: "Natural linen table runner", description: "STRIPED linen table runner - natural linen table runner - light white beige table runner - handmade linen table runner", price: 22.19, seller_id: 8)
kitchen3 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/kitchen3.webp")
product8.photo.attach(io: kitchen3, filename:"kitchen3.webq")

product9 = Product.create!(product_name: "Kitchen stool Safety", description: "The kitchen step stool, safety stool, or kids step stool is an adjustable kitchen chair or Montessori tower for toddlers. " , price: 55.99, seller_id: 9)
kitchen4 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/kitchen4.webp")
product9.photo.attach(io: kitchen4, filename:"kitchen4.webq")

product10 = Product.create!(product_name: "REGULAR Two Tone Tray ", description: "THE CRAFTY SWIRL is expanding its two tone collection!" , price: 80.21, seller_id: 10)
kitchen5 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/kitchen5.webp")
product10.photo.attach(io: kitchen5, filename:"kitchen5.webq")

product11 = Product.create!(product_name: "Wood World Map Wall Art Wood Large Wall Decor Travel Home Decor", description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, " , price: 22.46, seller_id: 11)
walldecor1 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/walldecor1.jpg")
product11.photo.attach(io: walldecor1, filename:"walldecor1.jpg")

product12 = Product.create!(product_name: "Family Last Name Sign for Personalized Wedding", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " , price: 41.19, seller_id: 12)
walldecor2 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/walldecor2.jpg")
product12.photo.attach(io: walldecor2, filename:"walldecor2.jpg")

product13 = Product.create!(product_name: "Wine Bottle Bag - Personalized Wine Gift Bag", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", price: 20.15, seller_id: 13)
walldecor3 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/walldecor3.jpg")
product13.photo.attach(io: walldecor3, filename:"walldecor3.jpg")

product14 = Product.create!(product_name: "Custom Doormat, Personalize Gift, Personalized doormat, Last Name Doormat", description: "This last name doormat also makes for the perfect housewarming gift and wedding gift. There's nothing like receiving such a special personalized gift!" , price: 31.14, seller_id: 14)
walldecor4 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/walldecor4.jpg")
product14.photo.attach(io: walldecor4, filename:"walldecor4.jpg")

product15 = Product.create!(product_name: "Large Hexagon shelf, hexagon shelves", description: "Endless possibilities await with these custom finished shelves." , price: 31.21, seller_id: 15)
walldecor5 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/walldecor5.jpg")
product15.photo.attach(io: walldecor5, filename:"walldecor5.jpg")

product16 = Product.create!(product_name: "Bridal Shower Gift", description: "This personalized pallet sign makes a beautiful addition to your home. It also makes for a unique wedding or anniversary gift.", price: 25.35, seller_id: 16)
vase1 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/vase1.jpg")
product16.photo.attach(io: vase1, filename:"vase1.jpg")

product17 = Product.create!(product_name: "Flower Girl Gift, Bridesmaid Proposal", description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages", price: 22.13, seller_id: 17)
vase2 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/vase2.jpg")
product17.photo.attach(io: vase2, filename:"vase2.jpg")

product18 = Product.create!(product_name: "SET of 3 -Knitted Pumpkins, Fall Decor, Thanksgiving Decorations, Autumn Decor", description: "These soft knitted pumpkins are sold in a SET OF 3 and I promise you, they will bring indoors all the warmth and coziness of the season!" , price: 37.25, seller_id: 18)
vase3 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/vase3.jpg")
product18.photo.attach(io: vase3, filename:"vase3.jpg")

product19 = Product.create!(product_name: "MOSS GREEN linen table runner", description: "MOSS GREEN linen table runner - heavier linen olive green linen table runner - military green table runner - handmade linen table runner", price: 34.21, seller_id:19)
vase4 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/vase4.jpg")
product19.photo.attach(io: vase4, filename:"vase4.jpg")

product20 = Product.create!(product_name: "Wood Floating Shelves 3-Inches Thick", description: "This beautiful floating wood shelf is the perfect shelving unit designed to work with any theme your décor is going for, making them completely harmonious.", price: 35.21, seller_id: 20)
livingroom1 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/livingroom1.jpg")
product20.photo.attach(io: livingroom1, filename:"livingroom1.jpg")

product21 = Product.create!(product_name: "Floating Shelf Rustic Shelf Ledge Shelf URI.open Shelving", description: "Amazing kids' teepee wood house beds for children.", price: 200, seller_id: 21)
livingroom2 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/livingroom2.jpg")
bedframe1.photo.attach(io: bedframe1, filename:"livingroom2.jpg")

product22 = Product.create!(product_name: "Floating Reclaimed Wood Shelves", description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages", price: 22.13, seller_id: 22)
livingroom3 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/livingroom3.jpg")
product17.photo.attach(io: livingroom3, filename:"livingroom3.jpg")

product23 = Product.create!(product_name: "Rustic Floating Shelves Industrial ", description: "Our floating shelf adds a rustic farmhouse URI.open storage solution to your home or work space." , price: 37.25, seller_id: 23)
livingroom4 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/livingroom4.jpg")
product18.photo.attach(io: livingroom4, filename:"livingroom4.jpg")

product24 = Product.create!(product_name: "MOSS GREEN linen table runner", description: "MOSS GREEN linen table runner - heavier linen olive green linen table runner - military green table runner - handmade linen table runner", price: 34.21, seller_id: 24)
livingroom5 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/livingroom5.webp")
product19.photo.attach(io: livingroom5, filename:"livingroom5.webq")

product25 = Product.create!(product_name: "Heavenly Angel Solar Powered Led Outdoor Decor Garden Light", description: "Solar Powered LED Outdoor Garden Light - Great addition for your garden!", price: 15.21, seller_id: 25)
garden1 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/gargen1.webp")
product20.photo.attach(io: garden1, filename:"garden1.webq")

product26 = Product.create!(product_name: "Solar Powered LED Outdoor Garden Light - Great addition for your garden!", description: "Captures the essence of nature at rest with this lifelike fox pup figure taking time out from his busy day to sleep.", price: 32.99, seller_id: 26)
garden2 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/garden2.webp")
product20.photo.attach(io: garden2, filename:"garden2.webq")

product27 = Product.create!(product_name: "Rain Slicker Frog Statue", description: "Theme: Animal", price: 38.21, seller_id: 27)
garden3 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/garden3.webp")
product20.photo.attach(io: garden3, filename:"garden3.webq")

product28 = Product.create!(product_name: "Cherubs Of Contemplation Angel Statue", description: "If you can't sneak a catnap for yourself, you'll envy this feathered fellow's sweet repose in your home or garden. ", price: 34.21, seller_id: 28)
garden4 = URI.open("https://homi-seeds.s3.us-east-2.amazonaws.com/garden4.webp")
product20.photo.attach(io: garden4, filename:"garden4.webq")
