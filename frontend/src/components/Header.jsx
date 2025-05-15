// Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id="header" style = {styles.header}>
      <div className="VaultImage" onClick={() => navigate('/')}>
        <img src="/logos/Vault.png" alt="Vault Logo" style = {styles.image}/>
      </div>
      <div className="profileImage" onClick={() => navigate('/profile')}>
        <img src="/logos/profileLogo.png" alt="Profile" style= {styles.image} />
        <p id="user-name" style= {styles.userName}>Deepti Mishra </p>
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
    backgroundColor: '#064d61',
    height: '50px'
  },
   userName: {
    fontSize: '20px',
    fontWeight: '600',
    margin: '30',
    color: 'white',

  },
  image: {
    height: '60px',
    cursor: 'pointer',
    padding: '10px',
    border: '15px'
  }
};


export default Header;
