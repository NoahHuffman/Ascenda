import React from 'react';
import '../assets/styles.css'; 

const NotificationsCard = ({ isVisible, notifications, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="notification-dropdown">
      <div className="notification-header">Notifications</div>
      <ul className="notification-list">
        {notifications.map((notification, index) => (
          <li key={index} className="notification-item">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsCard;
