import profileIcon from '../assets/profile.png';

function ProfileIcon({onClick}){
  return (
    <button onClick={onClick} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}>
      <img src={profileIcon} alt="Click me" style={{ width: '50px', height: '50px' }} />
    </button>
  );
}

export default ProfileIcon