import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../assets/styles.css';

function Calendar({ events, setEvents, theme, handleEventAdd }) {
  
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
        select={(info) => {
          const title = prompt("Please enter a title for your event:");
          if (title) {
            const newEvent = {
              title,
              start: info.startStr,
              end: info.endStr,
              allDay: info.allDay,
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
