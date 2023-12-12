import React from 'react';
import '../../styles/Header.css';

const Header = () => {
  const routes=[{
    path: '/homepage',label:'Home'
  },
  {
    path: '/books',label:'Books Available'
  },
  {
    path: '/create',label:'Add Book'
  },
  {
    path: '/delete',label:'Delete Book'
  },
  {
    path: '/update',label:'Update Book'
  },]
  return (
    <header className="header">
      <nav>
        <h1 className="heading">Library Management System</h1>
        <ul className="nav-list">  {
          routes.map(route => (
          <li><a href={route.path}>{route.label}</a></li>
          ))
        }                  
        </ul>
      </nav>
    </header>
  );
};

export default Header;
