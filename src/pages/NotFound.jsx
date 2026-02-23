import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found container">
    <h2>404 - Page Not Found</h2>
    <p>The page you requested does not exist.</p>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;