import React, { useState } from 'react';
import '../assets/styles.css';

function EventForm({ onClose, onEventAdd }) {
  const [title, setTitle] = useState('');
  const [allDay, setAllDay] = useState(true);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      start: allDay ? date : `${date}T${startTime}`,
      end: allDay ? date : `${date}T${endTime}`,
      allDay
    };
    onEventAdd(newEvent);
    onClose(); // Close the form
  };

  return (
    <div className="event-form-container">
        <div className="create-header">Create</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="checkbox">
        <label >
          All Day
          <input 
            type="checkbox"
            checked={allDay}
            onChange={(e) => setAllDay(e.target.checked)}
          />
        </label>
        </div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        {!allDay && (
          <>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </>
        )}
        <button type="submit">Add Event</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default EventForm;
