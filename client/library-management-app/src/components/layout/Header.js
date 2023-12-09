import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <h1 className="heading">Library Management System</h1>          
          <li><a href="/">Home</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="/create">Add Book</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
