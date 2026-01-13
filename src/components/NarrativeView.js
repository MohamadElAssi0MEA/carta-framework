import React from 'react';

const NarrativeView = ({ activeZone }) => {
  const zones = ["Perimeter", "Hallway", "Control Room", "Vault"];

  return (
    <div className="facility-map">
      {zones.map(zone => (
        <div 
          key={zone} 
          className={`zone-box ${activeZone === zone ? 'active-alarm' : ''}`}
        >
          <h3>{zone}</h3>
          {activeZone === zone && <div className="pulse"></div>}
        </div>
      ))}
    </div>
  );
};

export default NarrativeView;
