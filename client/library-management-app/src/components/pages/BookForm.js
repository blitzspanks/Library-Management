import React, { useState } from 'react';
import '../../styles/BookForm.css'; // Import a CSS file for styling

const BookForm = () => {
  const [bookData, setBookData] = useState({
    title: '',
    ISBN: '',
    genre: '',
    publicationYear: '',
    isAvailable: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    if (response.ok) {
      // Optionally handle success (e.g., redirect to another page)
      console.log('Book submitted successfully');
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    console.error('Error submitting book:', error.message);
  }
};


  return (
    <div>
      <h2>Create a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>ISBN:</label>
          <input
            type="text"
            name="ISBN"
            value={bookData.ISBN}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={bookData.genre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Publication Year:</label>
          <input
            type="number"
            name="publicationYear"
            value={bookData.publicationYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Is Available:
          <input
            type="text"
            name="isAvailable"
            value='Yes'
          />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;