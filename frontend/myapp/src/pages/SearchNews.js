import React, { useState } from 'react';
import axios from 'axios';

const SearchNews = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSearch = () => {
    axios.get(`/api/news/search?query=${query}`)
      .then(response => setArticles(response.data.articles))
      .catch(error => console.error('Error searching news:', error));
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
      <button onClick={handleSearch}>Search</button>
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
