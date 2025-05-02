import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FightLogger from './components/FightLogger';
import Scoreboard from './components/Scoreboard';
import Badges from './components/Badges';
import FightHistory from './components/FightHistory';

const App = () => {
  const [fights, setFights] = useState([]);

  // Load from localStorage on first load
  useEffect(() => {
    const savedFights = JSON.parse(localStorage.getItem('fightHistory')) || [];
    setFights(savedFights);
  }, []);

  // Save to localStorage when fights change
  useEffect(() => {
    localStorage.setItem('fightHistory', JSON.stringify(fights));
  }, [fights]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Scoreboard + Logger Page */}
        <Route
          path="/log"
          element={
            <div>
              <Scoreboard fights={fights} />
              <FightLogger fights={fights} setFights={setFights} />
            </div>
          }
        />

        {/* Badges Page */}
        <Route
          path="/badges"
          element={<Badges fights={fights} />}
        />

        {/* Fight History Page */}
        <Route
          path="/history"
          element={<FightHistory />}
        />
      </Routes>
    </Router>
  );
};

export default App;
