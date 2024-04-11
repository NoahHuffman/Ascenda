import React, { useState } from "react";
import ProfileDropdownCard from "./components/ProfileDropdownCard";
import "./assets/styles.css";
import Button from "./components/Button";
import NotificationButton from "./components/NotificationButton";
import ProfileIcon from "./components/ProfileIcon";
import NotificationsCard from "./components/NotificationsCard";
import Calendar from "./components/Calendar";

function App() {
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [isNotificationDropdownVisible, setNotificationDropdownVisible] =
    useState(false);
  const [events, setEvents] = useState([]); // Added state for events
  const [theme, setTheme] = useState("standard"); // Added state for theme

  // Dummy data for classes and assignments to be used in updateClasses and updateAssignments

  const dummyAssignments = [
    { title: "CPSC3600 Assignment", start: "2024-04-15", allDay: true },
    { title: "CPSC4900 Assignment", start: "2024-04-17", allDay: true },
    { title: "MKT 2000 Assignment", start: "2024-04-14", allDay: true },
    {
      title: "Math Class",
      start: "2024-04-16T13:00:00",
      end: "2024-04-16T14:00:00",
      allDay: false,
    },
    {
      title: "Math Class",
      start: "2024-04-18T13:00:00",
      end: "2024-04-18T14:00:00",
      allDay: false,
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
  const notifications = [
    "CPSC 3600 Assignment due @12:59pm",
    "Tech Symposium today @9:30am",
    "CPEN4700 Class today @2:15pm",
    // ... any other notifications
  ];
  const handleLogout = () => {
    console.log("Logout clicked");
    setProfileDropdownVisible(false);
  };

  const handleRefreshImports = () => {
    updateAssignments();
    setProfileDropdownVisible(false);
  };

  // Placeholder for Create button's onClick event handler
  const handleCreateEvent = () => {
    console.log("Create event clicked");
    // You'll need to implement the logic for creating a new event here
  };

  // Placeholder for Theme button's onClick event handler
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

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
        notifications={notifications}
        onClose={() => setNotificationDropdownVisible(false)}
      />
      <ProfileDropdownCard
        isVisible={isProfileDropdownVisible}
        onRefresh={handleRefreshImports}
        onClose={handleLogout}
      />
      <Calendar events={events} setEvents={setEvents} theme={theme} />
    </div>
  );
}

export default App;
