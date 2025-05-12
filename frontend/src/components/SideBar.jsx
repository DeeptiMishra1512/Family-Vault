// components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic later
   // console.log('User logged out');
   // navigate('/login');
  };

  return (
    <div style={styles.sidebar}>
      <button style={styles.button} onClick={() => navigate('/')}>Home</button>
      <button style={styles.button}>Add Connections</button>
      <button style={styles.button}>Add Group</button>
      <button style={styles.button} onClick={() => navigate('/UploadPost')}>Add Post</button>
      <button style={styles.button} onClick={() => navigate('/profile')}>User Profile</button>
      <button style={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#1b414b',
    padding: '10px',
    boxSizing: 'border-box',
    height: '100vh'
  },
  button: {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    padding: '15px',
    backgroundColor: '#0b084a',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'left'
  }
};

export default Sidebar;
