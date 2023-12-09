import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const history = useNavigate();

  const navigateToHomepage = () => {
    history('/homepage');
  };

  console.log('Rendering NotFound component'); // Add this line

  return (
    <div>
      <h2>Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>

      {/* Static navigation link to the homepage using the Link component */}
      <Link to="/homepage">Go to Homepage</Link>

      <br />

      {/* Dynamic navigation button to the homepage using the useHistory hook */}
      <button onClick={navigateToHomepage}>Go to Homepage</button>
    </div>
  );
};

export default NotFound;
