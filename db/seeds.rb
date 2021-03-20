# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Question.destroy_all
Answer.destroy_all

guest = User.create!(
    email: 'guest@queryarena.com',
    password: 'password',
    first_name: "Guest",
    last_name: "User"
)

creator = User.create!(
    email: 'kevinlai@queryarena.com',
    password: 'createdby:kevin-lai',
    first_name: "Kevin",
    last_name: "Lai"
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


q1 = Question.create(user_id: creator.id, body: "What is Query Arena?")
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
q12 = Question.create(user_id: creator.id, body: "What color is grass?")
q13 = Question.create(user_id: creator.id, body: "What color is the sky?")
q14 = Question.create(user_id: creator.id, body: "Why is the sky blue?")
q15 = Question.create(user_id: creator.id, body: "How much does the earth weigh?")
q16 = Question.create(user_id: creator.id, body: "How far away is the sun?")
q17 = Question.create(user_id: creator.id, body: "What is a black hole?")
q18 = Question.create(user_id: creator.id, body: "How do airplanes fly?")
q19 = Question.create(user_id: creator.id, body: "How are rainbows made?")
q20 = Question.create(user_id: creator.id, body: "Are whales fish?")
q21 = Question.create(user_id: creator.id, body: "Is the earth flat?")
q22 = Question.create(user_id: creator.id, body: "Why do birds fly south for the winter?")
q23 = Question.create(user_id: creator.id, body: "What are the two holes of the nose called?")
q24 = Question.create(user_id: creator.id, body: "What organ covers the entire body and protects it?")
q25 = Question.create(user_id: creator.id, body: "Who invented the first functional telephone?")
q26 = Question.create(user_id: creator.id, body: "What part of the plant conducts photosynthesis?")
q27 = Question.create(user_id: creator.id, body: "What is the boiling point of water?")
q28 = Question.create(user_id: creator.id, body: "Which is the largest land animal?")
q29 = Question.create(user_id: creator.id, body: "What are the three states of matter?")
q30 = Question.create(user_id: creator.id, body: "Which pigment gives the leaves its green color?")
q31 = Question.create(user_id: creator.id, body: "What is color blindness?")
q32 = Question.create(user_id: creator.id, body: "What is NASA?")
q33 = Question.create(user_id: creator.id, body: "What is a pitcher plant?")
q34 = Question.create(user_id: creator.id, body: "What is a venus flytrap?")
q35 = Question.create(user_id: creator.id, body: "What is GitHub?")
q36 = Question.create(user_id: creator.id, body: "What is LinkedIn?")
q37 = Question.create(user_id: creator.id, body: "What is YouTube?")
q38 = Question.create(user_id: creator.id, body: "What is FireFox?")
q39 = Question.create(user_id: creator.id, body: "What is Twitch?")
q40 = Question.create(user_id: creator.id, body: "What is Amazon?")
q41 = Question.create(user_id: creator.id, body: "What is Netflix?")
q42 = Question.create(user_id: guest.id, body: "How would you rate your experience with Query Arena?")
q43 = Question.create(user_id: creator.id, body: "What are the most surreal places to visit?")
q44 = Question.create(user_id: creator.id, body: "What are some books that will expand our mind?")
q45 = Question.create(user_id: creator.id, body: "What are the most common mistakes first time entrepreneurs make?")
q46 = Question.create(user_id: creator.id, body: "What is the bravest thing you have ever seen someone do?")
q47 = Question.create(user_id: creator.id, body: "What can I learn right now in 10 minutes that will be useful for the rest of my life?")
q48 = Question.create(user_id: creator.id, body: "What is the most beautiful number and why?")
q49 = Question.create(user_id: creator.id, body: "What are the best mind bending films?")
q50 = Question.create(user_id: creator.id, body: "Are electrons smaller than atoms?")

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
Answer.create(user_id: creator.id, question_id: q32.id, body: "The National Aeronautics and Space Administration, also known as NASA, is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.")
Answer.create(user_id: creator.id, question_id: q34.id, body: "The Venus flytrap (Dionaea muscipula) is a carnivorous plant native to subtropical wetlands on the East Coast of the United States in North Carolina and South Carolina.")

