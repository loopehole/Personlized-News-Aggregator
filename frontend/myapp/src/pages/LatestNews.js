import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatestNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/news/latest')
      .then(response => setArticles(response.data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p><strong>Sentiment:</strong> {article.sentiment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestNews;
