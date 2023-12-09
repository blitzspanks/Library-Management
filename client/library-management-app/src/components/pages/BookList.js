import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <div>
              <strong>Title:</strong> {book.title}
            </div>
            <div>
              <strong>Authors:</strong> {book.authors.join(', ')}
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
              <strong>Copies Available:</strong> {book.copiesAvailable}
            </div>
            <div>
              <strong>Is Available:</strong> {book.isAvailable ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>Cover Image:</strong> {book.coverImageURL}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
