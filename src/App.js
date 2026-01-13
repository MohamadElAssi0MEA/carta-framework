import React, { useState } from 'react';
import NarrativeView from './components/NarrativeView';
import EventFeed from './components/EventFeed';
import scenarioData from './data/scenario.json'; 
import './index.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  if (!scenarioData || scenarioData.length === 0) {
    return <div style={{color: 'white', background: 'red'}}>JSON Data Missing</div>;
  }

  const nextStep = () => {
    if (currentStep < scenarioData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>CARTA v1.0</h1>
        <p>Abstraction Layer: Narrative Mode</p>
      </header>

      <main className="dashboard-body" style={{display: 'flex', gap: '20px'}}>
        <NarrativeView activeZone={scenarioData[currentStep]?.zone} />
        <EventFeed events={scenarioData.slice(0, currentStep + 1)} />
      </main>

      <footer className="controls">
        <button className="trigger-btn" onClick={nextStep}>NEXT ATTACK SEQUENCE</button>
        <div className="status-bar">Current Layer: {scenarioData[currentStep]?.layer}</div>
      </footer>
    </div>
  );
}
export default App;
