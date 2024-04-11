import React, { useState, useEffect } from "react";
import ProfileDropdownCard from "./components/ProfileDropdownCard";
import "./assets/styles.css";
import Button from "./components/Button";
import NotificationButton from "./components/NotificationButton";
import ProfileIcon from "./components/ProfileIcon";
import NotificationsCard from "./components/NotificationsCard";
import Calendar from "./components/Calendar";
import EventForm from "./components/EventForm";

function App() {
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [isNotificationDropdownVisible, setNotificationDropdownVisible] =
    useState(false);
  const [events, setEvents] = useState([]); // Added state for events
  const [theme, setTheme] = useState("standard"); // Added state for theme
  const [notifications, setNotifications] = useState([]);

  // Dummy data for classes and assignments to be used in updateClasses and updateAssignments

  const dummyAssignments = [
    {
      title: "CPSC3600 Assignment",
      start: "2024-04-15",
      allDay: true,
      eventType: "assignment",
    },
    {
      title: "CPSC4900 Assignment",
      start: "2024-04-17",
      allDay: true,
      eventType: "assignment",
    },
    {
      title: "MKT 2000 Assignment",
      start: "2024-04-14",
      allDay: true,
      eventType: "assignment",
    },
    {
      title: "MKT 2000 Assignment",
      start: "2024-04-11",
      allDay: true,
      eventType: "assignment",
    },
    {
      title: "Math Class",
      start: "2024-04-16T13:00:00",
      end: "2024-04-16T14:00:00",
      allDay: false,
      eventType: "class",
    },
    {
      title: "Math Class",
      start: "2024-04-18T13:00:00",
      end: "2024-04-18T14:00:00",
      allDay: false,
      eventType: "class",
    },
    {
      title: "Tech Symposium",
      start: "2024-04-15T09:00:00",
      end: "2024-04-15T14:00:00",
      allDay: false,
      eventType: "misc",
    },
    {
      title: "Study for CPEN4700",
      start: "2024-04-16T10:00:00",
      end: "2024-04-16T12:00:00",
      allDay: false,
      eventType: "study",
    },
    {
      title: "CPEN4700 Class",
      start: "2024-04-15T14:15:00",
      end: "2024-04-15T15:30:00",
      allDay: false,
      eventType: "class",
    },
    {
      title: "CPEN4700 Test",
      start: "2024-04-17T14:15:00",
      end: "2024-04-17T15:30:00",
      allDay: false,
      eventType: "test",
    },
    {
      title: "CPEN4700 Class",
      start: "2024-04-11T14:15:00",
      end: "2024-04-11T15:30:00",
      allDay: false,
      eventType: "class",
    },
    // ... other assignments
  ];

  const updateAssignments = () => {
    // Example implementation of updating assignments
    const newAssignments = dummyAssignments.map((assignment) => ({
      title: assignment.title,
      start: assignment.start,
      end: assignment.end,
      allDay: assignment.allDay,
      eventType: assignment.eventType,
    }));
    const filteredAssignments = newAssignments.filter(
      (newAssignment) =>
        !events.some(
          (event) =>
            event.title === newAssignment.title &&
            event.start === newAssignment.start
        )
    );

    // Add the new filtered assignments to the events array
    setEvents([...events, ...filteredAssignments]);
  };

  const handleProfileClick = () => {
    setProfileDropdownVisible(!isProfileDropdownVisible);
    if (isNotificationDropdownVisible) setNotificationDropdownVisible(false);
  };

  const handleNotificationClick = () => {
    setNotificationDropdownVisible(!isNotificationDropdownVisible);
    if (isProfileDropdownVisible) setProfileDropdownVisible(false);
  };
  const handleLogout = () => {
    console.log("Logout clicked");
    setProfileDropdownVisible(false);
  };

  const handleRefreshImports = () => {
    updateAssignments();
    setProfileDropdownVisible(false);
  };

  const handleEventAdd = (event) => {
    setEvents([...events, event]); // Add the new event to the events array
  };

  // Placeholder for Theme button's onClick event handler
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const [isEventFormVisible, setIsEventFormVisible] = useState(false);

  const handleCreateEvent = () => {
    setIsEventFormVisible(true);
  };

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to start of day

    const todaysEvents = events.filter((event) => {
      const eventDate = new Date(event.start);
      eventDate.setHours(0, 0, 0, 0); // Normalize event date to start of day
      return (
        eventDate.getTime() === today.getTime() ||
        (eventDate.toDateString() === today.toDateString() && !event.allDay)
      );
    });

    const newNotifications = todaysEvents.map((event) => {
      const eventTime = new Date(event.start);
      const startTime = eventTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      return `${event.title} starts at ${startTime}`;
    });

    setNotifications(newNotifications);
  }, [events]);

  return (
    <div className="App">
      <header className="header">
        <div>
          <Button label="Create" onClick={handleCreateEvent} />
          <Button
            label="Themes"
            onClick={() => handleThemeChange("bootstrap")}
          />
        </div>
        <div>
          <NotificationButton onClick={handleNotificationClick} />
          <ProfileIcon onClick={handleProfileClick} />
        </div>
      </header>
      <NotificationsCard
        isVisible={isNotificationDropdownVisible}
        notifications={notifications} // Now this will update based on today's events
        onClose={() => setNotificationDropdownVisible(false)}
      />
      <ProfileDropdownCard
        isVisible={isProfileDropdownVisible}
        onRefresh={handleRefreshImports}
        onClose={handleLogout}
      />
      {isEventFormVisible && (
        <EventForm
          onClose={() => setIsEventFormVisible(false)}
          onEventAdd={handleEventAdd}
        />
      )}
      <Calendar
        events={events}
        setEvents={setEvents}
        theme={theme}
        handleEventAdd={handleEventAdd}
      />
    </div>
  );
}

export default App;
