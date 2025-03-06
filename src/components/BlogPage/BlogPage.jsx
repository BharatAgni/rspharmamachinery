import React from 'react';
import './BlogPage.css';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-page error-message">
      <h1>Blog Page is Currently Unavailable</h1>
      <p>Sorry for the inconvenience. Please return to the home page.</p>
      <button onClick={() => navigate('/')}>Go Back Home</button>
    </div>
  );
};

export default BlogPage;
