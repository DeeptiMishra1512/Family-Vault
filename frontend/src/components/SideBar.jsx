import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import UploadPost from './UploadPost';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <div style={styles.sidebar}>
      <SidebarButton label="Home" onClick={() => navigate('/')} />
      <SidebarButton label="User Profile" onClick={() => navigate('/profile')} />
      <SidebarButton label="Add Post" onClick={() => navigate('/UploadPost')} />
      <SidebarButton label="Add New Connections" onClick={() => navigate('/add-connections')} />
      <SidebarButton label="Create Group" onClick={() => navigate('/add-group')} />
      <SidebarButton label="Logout" onClick={handleLogout} />
    </div>
  );
};


const SidebarButton = ({ label, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={{
        ...styles.button,
        backgroundColor: hover ? '#333' : styles.button.backgroundColor
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </button>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: 'white',
    padding: '10px',
    boxSizing: 'border-box',
    height: '100vh',
    display: 'flex',
    border: '1px solid #ccc',
    flexDirection: 'column'
  },
  button: {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    padding: '15px',
    backgroundColor: '#064d61',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background-color 0.3s ease'
  }
};

export default Sidebar;
