const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  
  const username = req.query.username;
  const password = req.query.password;

  // check whether both a username and password have been provided
  if (username && password) {

    // check whether username exists
    let samenameuser = users.filter((user) => { return user.username === username});
    if (samenameuser.length == 0) {
      users.push({"username":username, "password":password});
      return res.send("Successfully Registered User: " + username);
    } else {
      return res.status(404).send("User Already Exists");
    }
  }

  // if either username or password is not provided return message
  res.status(404).send("Provided user/password invalid");

});

// Get the book list available in the shop
public_users.get('/',function (req, res) {

  // return list of books to user
  let bookPromise = new Promise((resolve, reject) => {
    const data = JSON.stringify(books);
    resolve(data);
  })

  bookPromise.then(response => {
    res.send(response)
  }).catch(error => {
    res.status(500).send("Error getting books")
  })
  

});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {

    //get isbn from request
    const isbn = req.params.isbn

    let isbnPromise = new Promise((request, reject) => {
      let data = books[isbn]
      if (data) {
        resolve(data)
      } else {
        reject("Book " + string(isbn) + " not found");
      }
    });

    isbnPromise.then(response => {
      res.send(response);
    }).catch(error => {
      res.status(404).send(error)
    });

 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {

  const author = req.params.author; 

  let authorPromise = new Promise((resolve, reject) => {

    let filtered_books = {};
    for (let key in books){
      if (books[key].author == author) {
        filtered_books[key] = books[key];
      }
    }

    resolve(JSON.stringify(filtered_books));

  });

  authorPromise.then(response => {
    res.send(response);
  }).catch(error => {
    res.status(404).send(error)
  })

});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  
  const title = req.params.title;
  let filtered_books = {};

  let titlePromise = new Promise((resolve, reject) => {

    for (let key in books){
      if (books[key].title == title){
        filtered_books[key] = books[key];
      }
    }
    resolve(JSON.stringify(filtered_books));
  });

  titlePromise.then(response => {
    res.send(response);
  }).catch(error => {
    res.status(404).send(error);
  })

});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  
  const isbn = req.params.isbn;

  let book = books[isbn];
  if (book) {
    res.send(JSON.stringify(book["reviews"]));
  } else {
    res.send("Book " + isbn + " not found")
  }

});

module.exports.general = public_users;
