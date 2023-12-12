//This file defines the data model (schema) for books

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String, //Displays the Title of the Book
    required: true,
  },
  ISBN: {
    type: String,
    unique: true,
    required: true, //Displays ISBN(International Standard Book Number)
  },
  genre: {
    type: String, //Displays the Genre of the Book
  },
  publicationYear: {
    type: Number, //Displays the Year of Publication
  },
  isAvailable: {
    type: Boolean, //Tells the user if book is available
    default: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
