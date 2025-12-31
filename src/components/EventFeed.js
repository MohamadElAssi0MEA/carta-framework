import React from 'react';

const EventFeed = ({ events }) => {
  return (
    <div className="event-feed-container">
      <h3>Active Incident Storyboard</h3>
      <div className="scroll-area">
        {events.slice().reverse().map((event) => (
          <div key={event.id} className={`feed-item ${event.severity}`}>
            <div className="feed-header">
              <span className="timestamp">[{event.timestamp}]</span>
              <span className="layer-tag">{event.layer}</span>
            </div>
            <p className="narrative-text"><strong>Story:</strong> {event.narrative_log}</p>
            <div className="tech-subtext">
                <code>Log: {event.tech_log}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventFeed;
