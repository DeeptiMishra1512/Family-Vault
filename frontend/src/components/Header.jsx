// Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id="header" style = {styles.header}>
      <div className="lesson-link" onClick={() => navigate('/')}>
        <img src="/logos/Vault.png" alt="Vault Logo" style = {styles.image}/>
      </div>
      <div className="zip-link">
        <img src="/logos/profileLogo.png" alt="Profile" style= {styles.image} />
        <p id="user-name">Deepti Mishra</p>
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 20px',
    backgroundColor: '#1b414b',
    height: '60px'

  },
  zipLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  userName: {
    fontSize: '16px',
    fontWeight: '500',
    margin: '0'
  },
  image: {
    height: '60px',
    cursor: 'pointer',
    padding: '10px'
  }
};


export default Header;
