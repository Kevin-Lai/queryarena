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

u1 = User.create!(
    email: 'u1@queryarena.com',
    password: 'password',
    first_name: "Tes",
    last_name: "Ng"
)

u2 = User.create!(
    email: 'u2@queryarena.com',
    password: 'password',
    first_name: "Tes",
    last_name: "La"
)

u3 = User.create!(
    email: 'u3@queryarena.com',
    password: 'password',
    first_name: "Justin",
    last_name: "Thyme"
)

u4 = User.create!(
    email: 'u4@queryarena.com',
    password: 'password',
    first_name: "Maine",
    last_name: "Villin"
)

u5 = User.create!(
    email: 'u5@queryarena.com',
    password: 'password',
    first_name: "Holly",
    last_name: "Wood"
)

u6 = User.create!(
    email: 'u6@queryarena.com',
    password: 'password',
    first_name: "Jack",
    last_name: "Pott"
)


u7 = User.create!(
    email: 'u7@queryarena.com',
    password: 'password',
    first_name: "Ali",
    last_name: "Gator"
)

u8 = User.create!(
    email: 'u8@queryarena.com',
    password: 'password',
    first_name: "Joe",
    last_name: "King"
)

u9 = User.create!(
    email: 'u9@queryarena.com',
    password: 'password',
    first_name: "Jay",
    last_name: "Walker"
)

u10 = User.create!(
    email: 'u10@queryarena.com',
    password: 'password',
    first_name: "Horace",
    last_name: "Cope"
)


q1 = Question.create(user_id: guest.id, body: "What is Query Arena?")
q2 = Question.create(user_id: u1.id, body: "How many seconds are in a minute?")
q3 = Question.create(user_id: u2.id, body: "How many minutes are in a hour?")
q4 = Question.create(user_id: u3.id, body: "How many hours are in a day?")
q5 = Question.create(user_id: u4.id, body: "How many days are in a week?")
q6 = Question.create(user_id: u5.id, body: "How many days are in a month?")
q7 = Question.create(user_id: u6.id, body: "How many days are in a year?")
q8 = Question.create(user_id: u7.id, body: "How many weeks are in a month?")
q9 = Question.create(user_id: u8.id, body: "How many weeks are in a year?")
q10 = Question.create(user_id: u9.id, body: "How many months are in a year?")
q11 = Question.create(user_id: u10.id, body: "How many milliseconds are in a second?")


Answer.create(user_id: u10.id, question_id: q1.id, body: "QueryArena, a Quora clone, is a web application that allows users to ask questions and share answers.")
Answer.create(user_id: u1.id, question_id: q2.id, body: "There are 60 seconds in a minute.")
Answer.create(user_id: u2.id, question_id: q3.id, body: "There are 60 minutes in a hour.")
Answer.create(user_id: u3.id, question_id: q4.id, body: "There are 24 hours in a day.")
Answer.create(user_id: u4.id, question_id: q5.id, body: "There are 7 days in a week.")
Answer.create(user_id: u5.id, question_id: q6.id, body: "Months can range from 28 to 31 days.")
Answer.create(user_id: u6.id, question_id: q7.id, body: "There are typically 365 days in a year. However, leap years have 366 days.")
Answer.create(user_id: u7.id, question_id: q8.id, body: "There are 4 weeks in a month.")
Answer.create(user_id: u8.id, question_id: q9.id, body: "There are 52 weeks in a year.")
Answer.create(user_id: u9.id, question_id: q10.id, body: "There are 12 months in a year.")
Answer.create(user_id: guest.id, question_id: q11.id, body: "There are 1000 milliseconds in one second.")
