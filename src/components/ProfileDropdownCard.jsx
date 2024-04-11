import React from 'react';
import '../assets/styles.css';

const ProfileDropdownCard = ({ isVisible, onRefresh, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="card-dropdown">
      <div className="card-header">Castle Ford</div>
      <button onClick={onRefresh} className="dropdown-item">
        Refresh Imports
      </button>
      <button onClick={onClose} className="dropdown-item">
        Logout
      </button>
    </div>
  );
};

export default ProfileDropdownCard;
