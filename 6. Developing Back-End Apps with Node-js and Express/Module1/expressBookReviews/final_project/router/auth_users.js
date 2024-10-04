const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ 
  
  // filter users to match the username parameter
  let validusers = users.filter((user) => {return user.username == username && user.password == password});

  // if validusers has length then provided user/password exists in database
  if (validusers.length > 0){
    return true;
  } else {
    return false;
  }

}

//only registered users can login
regd_users.post("/login", (req,res) => {
  
  // get username and password from the psot request
  const username = req.query.username;
  const password = req.query.password;

  console.log(users);

  // check whether both have been provided
  if (!username || !password) {
    return res.status(404).send("Error with credentials");
  }

  // authenticate user
  if (authenticatedUser(username, password)) {
    
    // create access token for user
    let token = jwt.sign({
      username: username,
      data: password
    }, 'access', {expiresIn: 60*60});

    // store token in session variable
    req.session.authorization = {
      accessToken: token, username
    }

    console.log(token);

    return res.send("User successfully logged in");

  } else {
    return res.status(208).send("Invalid Login. Check username and password");
  }

});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  
  const isbn = req.params.isbn;
  const review = req.body.review;
  const user = req.user;

  if (books[isbn]) {
    books[isbn].reviews[user.username] = review;
    res.send("Review successfully submitted");
  } else {
    res.send("Error Submitting Review")
  }

});

regd_users.delete("/auth/review/:isbn", (req, res) => {

  const isbn = req.params.isbn;
  const user = req.user;

  console.log(books[isbn].reviews)

  if (books[isbn]) {
    let newReviews = {};
    for (let key in books[isbn].reviews) {
      if (key != user.username) {
        newReviews[key] = books[isbn].reviews[key];
      }
    }
    
     books[isbn].reviews = newReviews;
    return res.send("Sussessfully Deleted Review")

  } else {
    return res.status(404).send("Could not find book")
  }

});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
