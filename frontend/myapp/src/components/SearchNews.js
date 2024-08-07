import React, { useState } from 'react';
import api from '../api';

const SearchNews = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const searchNews = async () => {
    try {
      const response = await api.get('/news/search', { params: { query } });
      setArticles(response.data.articles);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.detail : 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Search News</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={searchNews}>Search</button>
      {error && <p>Error: {error}</p>}
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

export default SearchNews;
