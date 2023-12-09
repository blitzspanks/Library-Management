import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const HomePage = () => {
  console.log('Rendering HomePage component'); // Add this line

  return (
    <div className="homepage">
      <h1 className="title" data-text="Library Management System">Library Management System</h1>
      <div className="welcome-message">
        <h2>Welcome to the Library Management System</h2>
        <p>Explore, Borrow, and Discover the World of Books!</p>
      </div>
      <div className="library-image">
      </div>

      {/* Add navigation links to other components */}
      <Link to="/books">View Book List</Link>
      <Link to="/create">Add a Book</Link>
    </div>
  );
};

export default HomePage;
