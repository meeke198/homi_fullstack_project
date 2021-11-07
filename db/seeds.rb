# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all



user1 = User.create!(email: "ben@gmail.com", password: 'password')
user2 = User.create!(email: "mia@gmail.com", password: 'password')
user3 = User.create!(email: "tim@gmail.com", password: 'password')
user4 = User.create!(email: "banana@gmail.com", password: 'password')
user5 = User.create!(email: "ben@gmail.com", password: 'password')
user6 = User.create!(email: "tom@gmail.com", password: 'password')
user7 = User.create!(email: "matt@gmail.com", password: 'password')
user8 = User.create!(email: "linh@gmail.com", password: 'password')
user9 = User.create!(email: "joe@gmail.com", password: 'password')
user10 = User.create!(email: "potato@gmail.com", password: 'password')
user11 = User.create!(email: "strawberry@gmail.com", password: 'password')
user12 = User.create!(email: "cat@gmail.com", password: 'password')
user13 = User.create!(email: "dog@gmail.com", password: 'password')
user14 = User.create!(email: "owl@gmail.com", password: 'password')
user15 = User.create!(email: "milktea@gmail.com", password: 'password')
user16 = User.create!(email: "fishy@gmail.com", password: 'password')
user17 = User.create!(email: "hotdog@gmail.com", password: 'password')
user18 = User.create!(email: "grapes@gmail.com", password: 'password')
user19 = User.create!(email: "frenchfries@gmail.com", password: 'password')
user20 = User.create!(email: "sushi@gmail.com", password: 'password')
demoUser = User.create!(email: "demo@gmail.com", password: "password123")


product1 = Product.create!(product_name: "Horse Watercolor Art Print - Horse Watercolour Print - Gift for Equestrian - Housewarming Gift - Horse Prints - Horse Poster", description: "Horse Watercolor Art Print
Paper: Epson Heavy Weight High Quality Paper - Made in Japan" , price: 20, seller_id: user1.id)
image1 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/WWybTsQ2brDRhJAJGcqNv2vW")
product1.photo.attach(io: image1, filename:"image1.jpg")

product2 = Product.create!(product_name: "Ceramic Vases for Flowers- Unique Flower Vase- Modern Decorative Vase for Home Decoration- Nordic Vase Collection", description: "Want something special in your home? Check out these Ceramic Vases for Flowers! Unique and refined, our vases decorate large and small spaces to give them an incredible personality." , price: 18.22, seller_id: user2.id)
image2 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/WWybTsQ2brDRhJAJGcqNv2vW")
product2.photo.attach(io: image2, filename:"image2.jpg")

product3 = Product.create!(product_name: "Moon Phase Wall Hanging, Moon Decor Phases of the Moon, Boho Bedroom Art Celestial Bohemian Room", description: "PHASES OF THE MOON shine with this decorative wall hanging, creating peace and comfort in any room
HANDMADE with hammered metal moons and iron chains, each piece is unique and original as you are too
EASY BOHO HOME DECOR", price: 20.15, seller_id: user3.id)
image3 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product3.photo.attach(io: image3, filename:"image2.jpg")

product4 = Product.create!(product_name: "Moon Phase Glass Mirror Wall Décor - Wall decor, home decor, Moon decoration, Moon phase, Bedroom Decor, Moon phase decor, Boho decor,Mirror", description: "Our moon wall décor mirrors are made of 100% GLASS and non-toxic environmental basswood, which allows a clear imaging effect just as a regular mirror would unlike type moon mirrors out there." , price: 20.44, seller_id: user4.id)
image4 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product4.photo.attach(io: image4, filename:"image4.jpg")

product5 = Product.create!(product_name: "Botanical Print Set, Rustic Farmhouse Gray Beige Botanical Prints, Cream Floral Prints, Living Room Decor, Gray Cream Taupe Botanical Art", description: "The neutrals: Cream and gray botanical prints. Bring rustic charm to your home with these 6 Wild flowers against shades of cream, coffee, beige and grays. Printed on matte, fine art paper" , price: 80.21, seller_id: user5.id)
image5 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product5.photo.attach(io: image5, filename:"image5.jpg")

product6 = Product.create!(product_name: "Set of 3 Scandinavian Wall Art, Nordic Wall Art", description: "This set of Scandinavian wall prints are sure to add style to any room, especially a living room, bedroom, dining room or hallway." , price: 19.25, seller_id: user6.id)
image6 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product6.photo.attach(io: image6, filename:"image6.jpg")

product7 = Product.create!(product_name: "Custom Dog Portrait Watercolor, Painting Of Dog Custom, Watercolor Dog Art", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" , price: 55.77, seller_id: user7.id)
image7 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product7.photo.attach(io: image7, filename:"image7.jpg")

product8 = Product.create!(product_name: "Dried Plant Hanging - Wall Decor", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", price: 45.19, seller_id: user8.id)
image8 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product8.photo.attach(io: image8, filename:"image8.jpg")

product9 = Product.create!(product_name: "Moon Phase Glass Mirror Wall Décor - Wall decor, home decor, Moon decoration, Moon phase, Bedroom Decor, Moon phase decor, Boho decor,Mirror", description: "Our moon wall décor mirrors are made of 100% GLASS and non-toxic environmental basswood, which allows a clear imaging effect just as a regular mirror would unlike type moon mirrors out there." , price: 20.99, seller_id: user9.id)
image9 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product9.photo.attach(io: image9, filename:"image9.jpg")

product10 = Product.create!(product_name: "Wall Decor,Lavender,Farmhouse Decor", description: "The neutrals: Cream and gray botanical prints. Bring rustic charm to your home with these 6 Wild flowers against shades of cream, coffee, beige and grays. Printed on matte, fine art paper" , price: 80.21, seller_id: user10.id)
image10 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product10.photo.attach(io: image10, filename:"image10.jpg")

product11 = Product.create!(product_name: "Wood World Map Wall Art Wood Large Wall Decor Travel Home Decor", description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, " , price: 22.46, seller_id: user11.id)
image11 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product11.photo.attach(io: image11, filename:"image11.jpg")

product12 = Product.create!(product_name: "Family Last Name Sign for Personalized Wedding", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " , price: 41.19, seller_id: user12.id)
image12 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product12.photo.attach(io: image12, filename:"image12.jpg")

product13 = Product.create!(product_name: "Wine Bottle Bag - Personalized Wine Gift Bag", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", price: 20.15, seller_id: user13.id)
image13 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product13.photo.attach(io: image13, filename:"image2.jpg")

product14 = Product.create!(product_name: "Custom Doormat, Personalize Gift, Personalized doormat, Last Name Doormat", description: "This last name doormat also makes for the perfect housewarming gift and wedding gift. There's nothing like receiving such a special personalized gift!" , price: 31.14, seller_id: user14.id)
image14 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product14.photo.attach(io: image14, filename:"image14.jpg")

product15 = Product.create!(product_name: "Custom Chopping Board, Personalized Cutting Board Set", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." , price: 31.21, seller_id: user15.id)
image15 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product15.photo.attach(io: image15, filename:"image15.jpg")

product16 = Product.create!(product_name: "Bridal Shower Gift", description: "This personalized pallet sign makes a beautiful addition to your home. It also makes for a unique wedding or anniversary gift.", price: 25.35, seller_id: user16.id)
image16 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product16.photo.attach(io: image16, filename:"image16.jpg")

product17 = Product.create!(product_name: "Flower Girl Gift, Bridesmaid Proposal", description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages", price: 22.13, seller_id: user17.id)
image17 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product17.photo.attach(io: image17, filename:"image17.jpg")

product18 = Product.create!(product_name: "SET of 3 -Knitted Pumpkins, Fall Decor, Thanksgiving Decorations, Autumn Decor", description: "These soft knitted pumpkins are sold in a SET OF 3 and I promise you, they will bring indoors all the warmth and coziness of the season!" , price: 37.25, seller_id: user18.id)
image18 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product18.photo.attach(io: image18, filename:"image18.jpg")

product19 = Product.create!(product_name: "MOSS GREEN linen table runner", description: "MOSS GREEN linen table runner - heavier linen olive green linen table runner - military green table runner - handmade linen table runner", price: 34.21, seller_id: user19.id)
image19 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product19.photo.attach(io: image19, filename:"image19.jpg")

product20 = Product.create!(product_name: "handmade ceramic oil burner", description: "handmade oil burner", price: 15.21, seller_id: user20.id)
image20 = URI.open("https://homi-aa-dev.s3.us-east-2.amazonaws.com/zFBebWz6tiTLRs16twPBcYuA")
product20.photo.attach(io: image20, filename:"image20.jpg")

