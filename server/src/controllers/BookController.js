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
      res.status(500).json({ error: 'Failed to create a new book.' });
    }
  },

  // Get a list of all books
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books); // 200 Indicates List was displayed
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve books.' });
    }
  },

  // Get a book by ID
  getBookById: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found.' });
      }
      res.status(200).json(book); // 200 Indicates Book was found
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve the book.' });
    }
  },

  // Update a book by ID
  updateBook: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found.' });
      }
      res.status(200).json(updatedBook); // 200 Indicates Book was updated
    } catch (error) {
      res.status(500).json({ error: 'Failed to update the book.' });
    }
  },

  // Delete a book by ID
  deleteBook: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedBook = await Book.findByIdAndDelete(id);
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
