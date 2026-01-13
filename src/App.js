import React, { useState } from 'react';
import NarrativeView from './components/NarrativeView';
import EventFeed from './components/EventFeed';
import scenarioData from './data/scenario.json'; 
import './index.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [viewMode, setViewMode] = useState('Narrative');

  // RUTHLESS SAFETY CHECK: Prevents white screen if JSON fails
  if (!scenarioData || scenarioData.length === 0) {
    return (
      <div style={{color: 'white', background: 'red', padding: '20px', fontFamily: 'monospace'}}>
        <h1>CRITICAL ERROR</h1>
        <p>Data Source (scenario.json) is missing or empty.</p>
      </div>
    );
  }

  const nextStep = () => {
    if (currentStep < scenarioData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="app-container">
      <header>
        <div className="branding">
          <h1>CARTA <span className="version">v1.0</span></h1>
          <p className="subtitle">Causality-Aware Threat Abstraction</p>
        </div>
        
        <div className="toggle-container">
          <button 
            className={`toggle-btn ${viewMode === 'Narrative' ? 'active' : ''}`} 
            onClick={() => setViewMode('Narrative')}
          >
            NARRATIVE (Executive)
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'Forensic' ? 'active' : ''}`} 
            onClick={() => setViewMode('Forensic')}
          >
            FORENSIC (Expert)
          </button>
        </div>
      </header>

      <main className="dashboard-body">
        {viewMode === 'Narrative' ? (
          <div className="view-wrapper">
            <NarrativeView 
              activeZone={scenarioData[currentStep]?.zone || "Unknown"} 
            />
            <EventFeed 
              events={scenarioData.slice(0, currentStep + 1)} 
            />
          </div>
        ) : (
          <div className="locked-view">
            <h2>FORENSIC MODE LOCKED</h2>
            <p>System is currently in "Abstraction Mode" for Beginner Evaluation.</p>
            <div className="technical-stub">
                <code>Accessing Causal Graph Engine... [UNAVAILABLE]</code>
            </div>
          </div>
        )}
      </main>

      <footer className="controls">
        <div className="step-info">
            Event {currentStep + 1} of {scenarioData.length} | Layer: {scenarioData[currentStep]?.layer}
        </div>
        <button className="trigger-btn" onClick={nextStep}>
          NEXT ATTACK SEQUENCE
        </button>
      </footer>
    </div>
  );
}

export default App;
