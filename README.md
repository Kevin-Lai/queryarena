# Query Arena

[QueryArena Live](https://query-arena.herokuapp.com/#/)

## Table of Contents
* [Background](#background)
* [Technologies](#technologies)
* [Key Features](#key-features)
  * [Account Creation - (Sign Up)](#account-creation)
  * [Account Authentication - (Sign In)](#account-authentication)
  * [Questions](#questions)
  * [Answers](#answers)
  * [Search](#search)
* [Future Planned Features](#future-planned-features)


## Background
QueryArena is a web application that allows users to ask questions and share answers.

## Technologies
* Ruby on Rails
* PostgreSQL
* React.js
* Redux.js
* CSS

## Key Features

### Account Creation
* Users can sign up and create a new account on Query Arena.

---

### Account Authentication
* After creating an account, a user can sign in to access certain restricted features.
* Users who do not want to create an account can try out the website by logging in as a demo user.
* Once signed in, the splash page will change to the questions index page where the user can see all of the questions posted on the site.
* Once signed in, the splash page will always redirect to the questions index page unless the user signs out.

---

### Questions
* Users can view all of the questions posted to the website on the questions index page.
* Users can view each question's individual show page by clicking on the question's text.
* Users can create questions that will be posted to the website's questions index page.
* The create question form is rendered on a modal React.js component.
* Immediately after creating a question, the user will be redirected to their newly created question's show page.

---

### Search
* Users can search for questions by typing their query in the search bar.
* Letter cases do not matter for the search.
* Users will be redirected to a search results page after making a search.
* The search results page displays all of the questions that matched their query, regardless of whether there are any upper case or lower case letters within the query.

---

### Answers
* On each question's show page, users can view all of the answers posted for that question.

---

### Future Planned Features
* Allow users to access their profile page to see all questions and answers that they posted to the site.
* Allow users to create, edit, and delete their own answers to questions.
* Display the author's name on answers.
* Improve search functionality to include answers and users' names.
* Allow users to create comments on answers.
