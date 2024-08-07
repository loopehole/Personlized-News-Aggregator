import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/latest">Latest News</Link></li>
        <li><Link to="/search">Search News</Link></li>
        <li><Link to="/analyze">Analyze Sentiment</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
