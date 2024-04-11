import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../assets/styles.css';

function Calendar({ events, setEvents, theme, handleEventAdd }) {
  const eventClassNames = (eventInfo) => {
    // Assuming eventInfo already contains the extendedProps directly
    return eventInfo.event.extendedProps && eventInfo.event.extendedProps.eventType
      ? `event-${eventInfo.event.extendedProps.eventType}`
      : '';
  };
  return (
    <div className="Calendar">
      <FullCalendar
  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
  initialView={"dayGridWeek"}
  headerToolbar={{
    start: "today prev,next",
    center: "title",
    end: "dayGridMonth,timeGridWeek,timeGridDay",
  }}
  height={"90vh"}
  events={events}
  editable={true}
  selectable={true}
  selectMirror={true}
  eventClassNames={eventClassNames} // This should apply the correct classes
  select={(info) => {
    const title = prompt("Please enter a title for your event:");
    if (title) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr,
        allDay: info.allDay,
        eventType: 'misc' // Default to 'misc' or derive based on some logic
      };
      handleEventAdd(newEvent);
    }
  }}
  themeSystem={theme}
/>

    </div>
  );
}

export default Calendar;
