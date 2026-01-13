import React from 'react';

const EventFeed = ({ events }) => {
  return (
    <div className="narrative-feed">
      <h3>Incident Storyboard</h3>
      <div className="feed-content">
        {events.slice().reverse().map(event => (
          <div key={event.id} className={`event-card ${event.severity}`}>
            <span className="time">[{event.timestamp}] - {event.layer}</span>
            <p>{event.narrative_log}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventFeed;
