import React from 'react';
import BellIcon from '../assets/bell.png';

function NotificationButton({onClick}){
  return (
    <button onClick={onClick} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}>
      <img src={BellIcon} alt="Click me" style={{ width: '50px', height: '50px' }} />
    </button>
  );
}

export default NotificationButton