// DeleteBook.js

import React, { useState } from 'react';

const DeleteBook = ({ onDelete }) => {
  const [isbnInput, setIsbnInput] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/books/${isbnInput}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Book deleted successfully');
        onDelete(); // Notify the parent component to fetch the updated list of books
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.error('Error deleting book:', error.message);
    }
  };

  return (
    <div>
      <h2>Delete Book</h2>        
      <input
        type="text"
        placeholder="Enter ISBN"
        value={isbnInput}
        onChange={(e) => setIsbnInput(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteBook;
