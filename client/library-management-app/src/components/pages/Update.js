// UpdateBook.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBook = () => {
  const navigate = useNavigate();

  // State to track the entered ISBN
  const [inputISBN, setInputISBN] = useState('');
  const [currentBookDetails, setCurrentBookDetails] = useState({});
  const [updatedISBN, setUpdatedISBN] = useState('');
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedGenre, setUpdatedGenre] = useState('');
  const [updatedPublicationYear, setUpdatedPublicationYear] = useState('');

  const handleISBNSubmit = async (e) => {
    e.preventDefault();
    // Fetch book details based on the entered ISBN
    await fetchBookDetails(inputISBN);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3001/books/${updatedISBN}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ISBN: updatedISBN,
          title: updatedTitle,
          genre: updatedGenre,
          publicationYear: updatedPublicationYear,
        }),
      });

      if (response.ok) {
        console.log('Book updated successfully');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error('Error updating book:', error.message);
    }
  };

  const fetchBookDetails = async (ISBN) => {
    try {
      const response = await fetch(`http://localhost:3001/books/${ISBN}`);

      if (response.ok) {
        const bookDetails = await response.json();
        console.log(bookDetails);
        setCurrentBookDetails(bookDetails);
        setUpdatedISBN(bookDetails.ISBN || '');
        setUpdatedTitle(bookDetails.title || '');
        setUpdatedGenre(bookDetails.genre || '');
        setUpdatedPublicationYear(bookDetails.publicationYear || '');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error('Error fetching book details:', error.message);
    }
  };

  return (
    <div>
      <h2>Update Book</h2>

      {/* Section for entering ISBN */}
      <form onSubmit={handleISBNSubmit}>
        <div>
          <label htmlFor="inputISBN">Enter ISBN:</label>
          <input
            type="text"
            id="inputISBN"
            value={inputISBN}
            onChange={(e) => setInputISBN(e.target.value)}
          />
          <button type="submit">Fetch Book Details</button>
        </div>
      </form>

      {/* Section for displaying current book details */}
      <div>
        <strong>Current Book Details:</strong>
        <div>
          <strong>Title:</strong> {currentBookDetails.title}
        </div>
        <div>
          <strong>Genre:</strong> {currentBookDetails.genre}
        </div>
        <div>
          <strong>Publication Year:</strong> {currentBookDetails.publicationYear}
        </div>
      </div>

      {/* Section for updating book details */}
      <form>
        <div>
          <label htmlFor="updatedTitle">New Title:</label>
          <input
            type="text"
            id="updatedTitle"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="updatedGenre">New Genre:</label>
          <input
            type="text"
            id="updatedGenre"
            value={updatedGenre}
            onChange={(e) => setUpdatedGenre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="updatedPublicationYear">New Publication Year:</label>
          <input
            type="text"
            id="updatedPublicationYear"
            value={updatedPublicationYear}
            onChange={(e) => setUpdatedPublicationYear(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleUpdate}>
          Submit Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
