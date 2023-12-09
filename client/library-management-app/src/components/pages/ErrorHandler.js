import React from 'react';

const ErrorHandler = ({ errorMessage }) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorHandler;
