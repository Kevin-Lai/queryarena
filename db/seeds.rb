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
q28 = Question.create(user_id: creator.id, body: "What is the largest land animal?")
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
q51 = Question.create(user_id: creator.id, body: "What are electrons?")
q52 = Question.create(user_id: creator.id, body: "What are protons?")
q53 = Question.create(user_id: creator.id, body: "What is an atom?")
q54 = Question.create(user_id: creator.id, body: "What does DNA stand for?")
q55 = Question.create(user_id: creator.id, body: "How many bones are in the human body?")
q56 = Question.create(user_id: creator.id, body: "The concept of gravity was discovered by which famous physicist?")
q57 = Question.create(user_id: creator.id, body: "What is the hardest natural substance on Earth?")
q58 = Question.create(user_id: creator.id, body: "Which is the main gas that makes up the Earth’s atmosphere?")
q59 = Question.create(user_id: creator.id, body: "What percent of DNA do humans share with chimpanzees?")
q60 = Question.create(user_id: creator.id, body: "What is the most abundant gas in the Earth’s atmosphere?")
q61 = Question.create(user_id: creator.id, body: "What is the tallest animal in the world?")
q62 = Question.create(user_id: creator.id, body: "What mineral is essential for our bones?")
q63 = Question.create(user_id: creator.id, body: "What temperature does water boil?")
q64 = Question.create(user_id: creator.id, body: "What organ pumps blood to the rest of the human body?")
q65 = Question.create(user_id: creator.id, body: "How many elements are there on the periodic table?")
q66 = Question.create(user_id: creator.id, body: "What is the name of the galaxy that contains our solar system?")
q67 = Question.create(user_id: creator.id, body: "What do you call the hot liquid rock under the surface of the Earth?")
q68 = Question.create(user_id: creator.id, body: "What is the longest river on Earth?")
q69 = Question.create(user_id: creator.id, body: "What do you call animals that only eat plants?")
q70 = Question.create(user_id: creator.id, body: "What do you call animals that only eat meat?")
q71 = Question.create(user_id: creator.id, body: "How many teeth does an adult human have?")
q72 = Question.create(user_id: creator.id, body: "What is the hottest planet in the solar system?")
q73 = Question.create(user_id: creator.id, body: "H2SO4 is the chemical formula of which acid?")
q74 = Question.create(user_id: creator.id, body: "What is the atomic symbol of carbon?")
q75 = Question.create(user_id: creator.id, body: "What is 100 degree Celsius in Fahrenheit?")
q76 = Question.create(user_id: creator.id, body: "How many valves are in the heart of human body?")
q77 = Question.create(user_id: creator.id, body: "What is the freezing point of water?")
q78 = Question.create(user_id: creator.id, body: "What is atomic nuclei made of?")
q79 = Question.create(user_id: creator.id, body: "What is the name of the green pigment in plants which is also helpful in absorbing sunlight?")
q80 = Question.create(user_id: creator.id, body: "How many times does hummingbird beat its wings in a second?")
q81 = Question.create(user_id: creator.id, body: "What is quicksilver?")
q82 = Question.create(user_id: creator.id, body: "What tissue connects muscles to bones?")
q83 = Question.create(user_id: creator.id, body: "What is the largest animal on earth?")
q84 = Question.create(user_id: creator.id, body: "What is the standard unit of measurement for energy?")
q85 = Question.create(user_id: creator.id, body: "What are animals, which eat both plants and animals, called?")
q86 = Question.create(user_id: creator.id, body: "What is the closest planet to the sun?")
q87 = Question.create(user_id: creator.id, body: "Which organelle is also called the powerhouse of the cell?")
q88 = Question.create(user_id: creator.id, body: "What is the standard unit of measurement for force?")
q89 = Question.create(user_id: creator.id, body: "What is the lightest element in the periodic table?")
q90 = Question.create(user_id: creator.id, body: "What elements are the most common in the human body?")
q91 = Question.create(user_id: creator.id, body: "What is the single insight that changed your life the most?")
q92 = Question.create(user_id: creator.id, body: "If you were to have a superpower, what would you like it to be?")
q93 = Question.create(user_id: creator.id, body: "What is the coolest thing that happens when gravity is zero?")
q94 = Question.create(user_id: creator.id, body: "If you could revive one person from the dead, who would it be?")
q95 = Question.create(user_id: guest.id, body: "If you could travel at light speed, what would you see?")

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
Answer.create(user_id: u1.id, question_id: q12.id, body: "Most species of grass are green due to their chlorophyll.")
Answer.create(user_id: creator.id, question_id: q20.id, body: "No. Whales are marine mammals. Unlike fish, whales are warmblooded and do not have gills.")
Answer.create(user_id: guest.id, question_id: q21.id, body: "No. The earth is actually round.")
Answer.create(user_id: guest.id, question_id: q24.id, body: "The skin is the organ that covers the human body.")
Answer.create(user_id: creator.id, question_id: q25.id, body: "Alexander Graham Bell")
Answer.create(user_id: creator.id, question_id: q28.id, body: "Antarctic blue whale")
Answer.create(user_id: creator.id, question_id: q32.id, body: "The National Aeronautics and Space Administration, also known as NASA, is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.")
Answer.create(user_id: creator.id, question_id: q34.id, body: "The Venus flytrap (Dionaea muscipula) is a carnivorous plant native to subtropical wetlands on the East Coast of the United States in North Carolina and South Carolina.")
Answer.create(user_id: u1.id, question_id: q41.id, body: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.")
Answer.create(user_id: guest.id, question_id: q56.id, body: "Isaac Newton")
Answer.create(user_id: guest.id, question_id: q61.id, body: "The giraffe is the tallest land animal in the world.")
Answer.create(user_id: guest.id, question_id: q64.id, body: "The heart")
Answer.create(user_id: guest.id, question_id: q65.id, body: "118")
Answer.create(user_id: guest.id, question_id: q68.id, body: "The Nile River, located in Egypt, is the longest river on Earth.")
Answer.create(user_id: guest.id, question_id: q69.id, body: "Herbivores")
Answer.create(user_id: guest.id, question_id: q70.id, body: "Carnivores")
Answer.create(user_id: creator.id, question_id: q81.id, body: "Quicksilver is the alternative name for the metal Mercury.")
Answer.create(user_id: guest.id, question_id: q82.id, body: "Tendon")