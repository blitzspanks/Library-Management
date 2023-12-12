//This file defines the API routes for your Express application

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController'); // Import your book controller

// Define routes for managing books
router.get('/books', bookController.getAllBooks); // Get a list of all books
router.get('/books/:ISBN', bookController.getBookByISBN); // Get a book by ID
router.post('/books', bookController.createBook); // Create a new book
router.put('/books/:ISBN', bookController.updateBook); // Update a book by ID
router.delete('/books/:ISBN', bookController.deleteBook); // Delete a book by ID

module.exports = router;
