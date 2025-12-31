import React, { useState, useEffect } from 'react';
import NarrativeView from './components/NarrativeView';
import scenarioData from './data/scenario.json';
import './index.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [viewMode, setViewMode] = useState('Narrative'); // 'Narrative' or 'Forensic'

  const nextStep = () => {
    if (currentStep < scenarioData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>CARTA: Isomorphic Threat Abstraction</h1>
        <div className="toggle-container">
          <button 
            className={viewMode === 'Narrative' ? 'active' : ''} 
            onClick={() => setViewMode('Narrative')}
          >
            NARRATIVE (Executive)
          </button>
          <button 
            className={viewMode === 'Forensic' ? 'active' : ''} 
            onClick={() => alert("Forensic Mode Locked: Expert Evaluation Only")}
          >
            FORENSIC (Expert)
          </button>
        </div>
      </header>

      <main>
        {viewMode === 'Narrative' ? (
          <NarrativeView 
            activeZone={scenarioData[currentStep].zone} 
            events={scenarioData.slice(0, currentStep + 1)} 
          />
        ) : (
          <div className="locked-view">Expert Analysis Mode Required</div>
        )}
      </main>

      <footer className="controls">
        <button onClick={nextStep}>Trigger Next Attack Event</button>
        <div className="status-bar">
          Current Layer: {scenarioData[currentStep].layer}
        </div>
      </footer>
    </div>
  );
}

export default App;
