import React, { useState, useEffect } from 'react';
import './FightLogger.css';

const FightLogger = ({ fights, setFights }) => {
  const [starter, setStarter] = useState('');
  const [reason, setReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const reasonsList = [
    "Stole remote 🕹️",
    "Ate my candy 🍬",
    "Tattled to mom 😈",
    "Didn't share phone 📱",
    "Took my toy 🧸",
    "Other 🧠"
  ];

  useEffect(() => {
    const savedFights = JSON.parse(localStorage.getItem('fightHistory')) || [];
    setFights(savedFights);
  }, []);

  useEffect(() => {
    localStorage.setItem('fightHistory', JSON.stringify(fights));
  }, [fights]);

  const getFinalReason = () => {
    return reason === "Other 🧠" ? customReason.trim() : reason;
  };

  const handleAddFight = () => {
    const finalReason = getFinalReason();
    if (!starter || !finalReason) {
      alert("Pick who started it and provide a reason!");
      return;
    }

    const newFight = {
      id: Date.now(),
      starter,
      reason: finalReason,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      peaceMade: false,
    };

    const updatedFights = [newFight, ...fights];
    setFights(updatedFights);
    setStarter('');
    setReason('');
    setCustomReason('');
  };

  const markPeace = (id) => {
    const updatedFights = fights.map(fight =>
      fight.id === id ? { ...fight, peaceMade: true } : fight
    );
    setFights(updatedFights);
  };

  return (
    <div className="fight-container">
      <h2>⚔️ Log a Fight!</h2>

      <div className="buttons">
        <button className={starter === 'bro' ? 'selected' : ''} onClick={() => setStarter('bro')}>👦 Bro</button>
        <button className={starter === 'sis' ? 'selected' : ''} onClick={() => setStarter('sis')}>👧 Sis</button>
      </div>

      <select value={reason} onChange={(e) => setReason(e.target.value)}>
        <option value="">-- Pick a reason --</option>
        {reasonsList.map((r, i) => <option key={i} value={r}>{r}</option>)}
      </select>

      {reason === "Other 🧠" && (
        <input
          type="text"
          value={customReason}
          placeholder="Enter custom reason"
          onChange={(e) => setCustomReason(e.target.value)}
        />
      )}

      <div className="action-buttons">
        <button className="add-btn" onClick={handleAddFight}>Add Fight</button>
      </div>

      <div className="fight-list">
        <h3>📝 Fight Log</h3>
        {fights.map((fight) => (
          <div key={fight.id} className={`fight-entry ${fight.peaceMade ? 'resolved' : ''}`}>
            <div className="fight-text">
              <strong>{fight.starter === 'bro' ? '👦 Bro' : '👧 Sis'}</strong> started a fight: 
              <em> {fight.reason}</em> at {fight.time}
              {fight.peaceMade && <span className="peace-emoji"> 🕊️</span>}
            </div>
            {!fight.peaceMade && (
              <button className="peace-btn-small" onClick={() => markPeace(fight.id)}>✌️ Peace Made</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FightLogger;
