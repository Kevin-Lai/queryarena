# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# TODO: Seed Questions and Answers for Guest User

User.delete_all
Question.destroy_all
# Answer.destroy_all

guest = User.create!(
    email: 'guest@queryarena.com',
    password: 'password',
    first_name: "Guest",
    last_name: "User"
)


Question.create(user_id: guest.id, body: "What is Query Arena?")