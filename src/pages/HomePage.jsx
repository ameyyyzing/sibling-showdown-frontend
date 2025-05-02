import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="title">👊 Sibling Showdown! 💥</h1>
      <p className="subtitle">Who started it *this* time?</p>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDD8pJ2pfaNn7v_JXvig7B1O9n7PJqMf6Csg&s"
        alt="Cartoon fight between brother and sister"
        className="main-img"
      />

      <button className="start-btn" onClick={() => navigate('/log')}>
        Start Fight Logging
      </button>

      <div className="extra-links">
        <button onClick={() => navigate('/badges')} className="link-btn">🏅 View Badges</button>
        <button onClick={() => navigate('/history')} className="link-btn">📜 Fight History</button>
      </div>
    </div>
  );
};

export default HomePage;
