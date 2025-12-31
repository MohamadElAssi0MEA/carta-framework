import React from 'react';

const NarrativeView = ({ activeZone, events }) => {
  const zones = ["Perimeter", "Hallway", "Control Room", "Vault"];

  return (
    <div className="narrative-container">
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
      
      <div className="narrative-feed">
        <h3>Operational Story</h3>
        <div className="feed-content">
          {events.map(event => (
            <div key={event.id} className={`event-card ${event.severity}`}>
              <span className="time">{event.timestamp}</span>
              <p>{event.narrative_log}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NarrativeView;
