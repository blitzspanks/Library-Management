import React, { useState } from 'react';
import '../../styles/BookForm.css'; // Import a CSS file for styling (create this file with your styles)

const BookForm = () => {
  const [bookData, setBookData] = useState({
    title: '',
    authors: [''],
    ISBN: '',
    genre: '',
    publicationYear: '',
    copiesAvailable: 1,
    isAvailable: true,
    coverImageURL: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleAuthorChange = (event, index) => {
    const authors = [...bookData.authors];
    authors[index] = event.target.value;
    setBookData({
      ...bookData,
      authors,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of bookData, e.g., send it to the server.
  };

  const addAuthorField = () => {
    setBookData({
      ...bookData,
      authors: [...bookData.authors, ''],
    });
  };

  const removeAuthorField = (index) => {
    const authors = [...bookData.authors];
    authors.splice(index, 1);
    setBookData({
      ...bookData,
      authors,
    });
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
          <label>Authors:</label>
          {bookData.authors.map((author, index) => (
            <div key={index}>
              <input
                type="text"
                value={author}
                onChange={(e) => handleAuthorChange(e, index)}
              />
              <button type="button" onClick={() => removeAuthorField(index)}>
                Remove Author
              </button>
            </div>
          ))}
          <button type="button" onClick={addAuthorField}>
            Add Author
          </button>
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
          <label>Copies Available:</label>
          <input
            type="number"
            name="copiesAvailable"
            value={bookData.copiesAvailable}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Is Available:</label>
          <input
            type="checkbox"
            name="isAvailable"
            checked={bookData.isAvailable}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cover Image URL:</label>
          <input
            type="text"
            name="coverImageURL"
            value={bookData.coverImageURL}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;