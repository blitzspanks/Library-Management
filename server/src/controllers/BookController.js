//This file contains controller functions for handling book-related operations

const Book = require('../models/Book'); // Import the Book model

const bookController = {
  // Create a new book
  createBook: async (req, res) => {
    try {
      const { title, author, ISBN, genre, publicationYear } = req.body;
      const newBook = new Book({ title, author, ISBN, genre, publicationYear });
      await newBook.save();
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create a new book.'+error });
    }
  },

  // Get a list of all books
  getAllBooks: async (req, res) => {
    try {
      console.log(req.query.cat)
      const books = await Book.find();
      res.status(200).json(books); // 200 Indicates List was displayed
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve books.' });
    }
  },

  // Update a book by ISBN
  updateBook: async (req, res) => {
    const { ISBN } = req.params;
    try {
      const updatedBook = await Book.findOneAndUpdate({
        ISBN
      }, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found.' });
      }
      res.status(200).json(updatedBook); // 200 Indicates Book was updated
    } catch (error) {
      res.status(500).json({ error: 'Failed to update the book.' });
    }
  },

  // Find Book by ISBN

  getBookByISBN: async (req, res) => {
    const { ISBN } = req.params;
    try {
      const updatedBook = await Book.findOne({
        ISBN
      },);
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found.' });
      }
      res.status(200).json(updatedBook); // 200 Indicates Book was updated
    } catch (error) {
      res.status(500).json({ error: 'Failed to update the book.' });
    }
  },
  // Delete a book by ISBN
  deleteBook: async (req, res) => {
    const { ISBN } = req.params;
    try {
      const deletedBook = await Book.findOneAndDelete({ISBN});
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found.' });
      }
      res.status(204).send(); // 204 No Content indicates successful deletion
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete the book.' });
    }
  },
};

module.exports = bookController;
