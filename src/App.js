import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleTasbihClick = () => {
    setCount(prev => prev + 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h1>🕋 Tasbih Digital</h1>
      <div className="counter-circle">
        <span className="counter-number">{count}</span>
      </div>
      <button className="tasbih-btn" onClick={handleTasbihClick}>
        📿 Compter
      </button>
      <button className="reset-btn" onClick={resetCount}>
        🔄 Réinitialiser
      </button>
    </div>
  );
}

export default App;








