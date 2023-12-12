import React from 'react';
import '../../styles/HomePage.css';
import LibraryImage from "../../assets/Images/pages/HomePage.jpg"

const HomePage = () => {
  console.log('Rendering HomePage component'); // Add this line to check for errors in console

  return (
    <div className="homepage" style={{ backgroundImage: `url(${LibraryImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="welcome-message">
        <h2>Welcome to the Library Management System</h2>
        <p>Explore and Discover the World of Books!</p>
      </div>
      <div className="library-image">
      </div>
    </div>
  );
};

export default HomePage;
