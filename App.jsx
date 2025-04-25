import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contests from './pages/Contests';
import Home from './pages/Home';
import './index.css';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contests">Contests</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contests" element={<Contests />} />
    </Routes>
  </Router>
);

export default App;