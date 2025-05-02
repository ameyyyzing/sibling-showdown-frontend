import React, { useEffect, useState } from 'react';
import './FightHistory.css';

const FightHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('fightHistory')) || [];
    setHistory(data);
  }, []);

  return (
    <div className="history-container">
      <h2>📜 Fight History</h2>
      {history.length === 0 ? (
        <p>No past fights found! Start logging some mischief 😆</p>
      ) : (
        history.map((fight) => (
          <div key={fight.id} className="history-entry">
            <div className="history-text">
              <strong>{fight.starter === 'bro' ? '👦 Bro' : '👧 Sis'}</strong> started a fight
              on <em>{fight.date}</em> at <em>{fight.time}</em> for "<strong>{fight.reason}</strong>"
              {fight.peaceMade && <span className="peace-icon"> 🕊️</span>}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FightHistory;
