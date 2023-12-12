import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/NotFound.css"

const NotFound = () => {
  const history = useNavigate();

  const navigateToHomepage = () => {
    history('/homepage');
  };

  console.log('Rendering NotFound component'); // Add this line for debugging

  return (
    <div>
      <h2 className='page-not-found'>Page Not Found</h2>
      {/* Dynamic navigation button to the homepage using the useNavigate hook */}
      <button onClick={navigateToHomepage}>Go to Homepage</button>
    </div>
  );
};

export default NotFound;
