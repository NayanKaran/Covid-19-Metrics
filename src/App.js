import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Continent from './pages/Continent';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/:continent" element={<Continent />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
