import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Personalized News Aggregator</h1>
      <nav>
        <ul>
          <li>
            <Link to="/latest">Latest News</Link>
          </li>
          <li>
            <Link to="/search">Search News</Link>
          </li>
          <li>
            <Link to="/analyze">Analyze Sentiment</Link>
          </li>
        </ul>
      </nav>
      <footer>
        <p>Contact us at: <a href="mailto:decent.jai1995@gmail.com">decent.jai1995@gmail.com</a></p>
        <p>© 2024 Jai Srivastava. Personalized News Aggregator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
