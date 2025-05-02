import React from 'react';
import './Scoreboard.css';

const Scoreboard = ({ fights }) => {
  const broCount = fights.filter(f => f.starter === 'bro').length;
  const sisCount = fights.filter(f => f.starter === 'sis').length;
  const peaceCount = fights.filter(f => f.peaceMade).length;

  return (
    <div className="scoreboard">
      <h3>📊 Sibling Scoreboard</h3>
      <div className="score">
        <div className="card bro">👦 Bro: {broCount}</div>
        <div className="card sis">👧 Sis: {sisCount}</div>
        <div className="card peace">☮️ Peace Made: {peaceCount}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
