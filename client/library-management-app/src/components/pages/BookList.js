import React, { useState, useEffect } from 'react';
import ErrorHandler from './ErrorHandler';

const BookList = ({ books }) => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3001/books');

        if (response.ok) {
          const fetchedBooks = await response.json();
          setAllBooks(fetchedBooks);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  if (!Array.isArray(allBooks) || allBooks.length === 0) {
    return <ErrorHandler errorMessage={"There are no books available."} />;
  }

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {allBooks.map((book) => (
          <li key={book._id}>
            <div>
              <strong>Title:</strong> {book.title}
            </div>
            <div>
              <strong>ISBN:</strong> {book.ISBN}
            </div>
            <div>
              <strong>Genre:</strong> {book.genre}
            </div>
            <div>
              <strong>Publication Year:</strong> {book.publicationYear}
            </div>
            <div>
              <strong>Is Available:</strong> {book.isAvailable ? 'Yes' : 'No'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
