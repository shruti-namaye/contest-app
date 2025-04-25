import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => (
  <div className="home-container">
    <header className="home-header">
      <h1>Welcome to Competetive Coding Lister</h1>
      <p>Your one-stop destination for upcoming coding contests.</p>
      <Link to="/contests" className="btn">
        View Contests
      </Link>
    </header>
    <section className="home-features">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Upcoming Contests</h3>
          <p>Stay updated with the latest coding contests from platforms like Codeforces, LeetCode, and more.</p>
        </div>
        <div className="feature-card">
          <h3>Filter by Platform</h3>
          <p>Filter contests by platform to focus on the ones you're interested in.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;