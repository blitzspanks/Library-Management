//This file defines the data model (schema) for books

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String, //Displays the Title of the Book
    required: true,
  },
  authors: [
    {
      type: String,
      required: true, //Displays author/s of the Book
    },
  ],
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
  copiesAvailable: {
    type: Number, //Tells the user the amount of copies available
    default: 1,
  },
  isAvailable: {
    type: Boolean, //Tells the user if book is available
    default: true,
  },
  coverImageURL: {
    type: String, // Store the URL of the cover image
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
