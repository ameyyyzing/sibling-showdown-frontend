import React from 'react';
import './Badges.css';

const Badges = ({ fights }) => {
  const fightCount = fights.length;
  const peaceCount = fights.filter(fight => fight.peaceMade).length;
  const customReasonCount = fights.filter(fight => fight.reason === "Other 🧠").length;

  // Badge logic
  const badges = [];

  if (fightCount >= 5) {
    badges.push({
      name: '🥇 Fight Club Pro',
      description: 'Logged 5 or more fights!',
    });
  }

  if (peaceCount >= 3) {
    badges.push({
      name: '🕊 Peacemaker',
      description: 'Made peace in at least 3 fights!',
    });
  }

  if (customReasonCount >= 3) {
    badges.push({
      name: '💡 Creative Soul',
      description: 'Used a custom reason 3 times!',
    });
  }

  if (fightCount >= 3 && peaceCount === 0) {
    badges.push({
      name: '🔥 Warrior Streak',
      description: 'Logged 3 fights in a row without peace!',
    });
  }

  return (
    <div className="badges-container">
      <h3>🏆 Your Badges</h3>
      <div className="badges-list">
        {badges.length === 0 ? (
          <p>No badges unlocked yet! Start fighting and making peace 😎</p>
        ) : (
          badges.map((badge, index) => (
            <div key={index} className="badge">
              <span className="badge-icon">{badge.name}</span>
              <span className="badge-description">{badge.description}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Badges;
