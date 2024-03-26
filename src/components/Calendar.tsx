import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const Calendar = () => {
  const addItem = () =>{
    alert('clicked');
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
      initialView={"dayGridWeek"}
      customButtons={{
        addItemBtn: {
          text: 'Add Item',
          click: addItem,
        },
      }}
      headerToolbar={{
        left: 'today prev,next addItemBtn',
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth, timeGridWeek, timeGridDay",
      }}
    />
  );
};

export default Calendar;
