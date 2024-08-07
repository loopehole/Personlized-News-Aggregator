// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LatestNews from './pages/LatestNews';
import SearchNews from './pages/SearchNews';
import AnalyzeSentiment from './pages/AnalyzeSentiment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest" element={<LatestNews />} />
        <Route path="/search" element={<SearchNews />} />
        <Route path="/analyze" element={<AnalyzeSentiment />} />
      </Routes>
    </Router>
  );
}

export default App;
