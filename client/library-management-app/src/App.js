import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout'; // Import the Layout component
import HomePage from './components/pages/HomePage';
import NotFound from './components/pages/NotFound';
import BookList from './components/pages/BookList';
import ErrorHandler from './components/pages/ErrorHandler';
import BookForm from './components/pages/BookForm';
import DeleteBook from './components/pages/DeleteBook';
import './App.css';
import UpdateBook from './components/pages/Update';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/homepage"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/books"
            element={
              <Layout>
                <BookList books={[]}/>
              </Layout>
            }
          />
          <Route
            path="/create"
            element={
              <Layout>
                <BookForm />
              </Layout>
            }
          />
          <Route
            path="/delete"
            element={
              <Layout>
                <DeleteBook />
              </Layout>
            }
          />
          <Route
            path="/update"
            element={
              <Layout>
                <UpdateBook />
              </Layout>
            }
          />
          <Route
            path="/error"
            element={
              <Layout>
                <ErrorHandler />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const LandingPage = () => {
  const startApp = () => {
    window.location.href = '/homepage';
  };

  return (
    <div className="landing-container">
      <h1>Welcome to My Library</h1>
      <p>Your go-to source for managing books!</p>
      <button onClick={startApp}>Start My React App</button>
    </div>
  );
};

export default App;
