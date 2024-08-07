import React, { useState } from 'react';
import axios from 'axios';

const AnalyzeSentiment = () => {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState('');

  const handleAnalyze = () => {
    axios.post('/api/news/analyze', { text })
      .then(response => setSentiment(response.data.sentiment))
      .catch(error => console.error('Error analyzing sentiment:', error));
  };

  return (
    <div>
      <h1>Analyze Sentiment</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to analyze"
      />
      <button onClick={handleAnalyze}>Analyze</button>
      <p><strong>Sentiment:</strong> {sentiment}</p>
    </div>
  );
};

export default AnalyzeSentiment;
