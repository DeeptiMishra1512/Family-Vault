// Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id="header" style = {styles.header}>
      <div className="VaultImage" onClick={() => navigate('/')}>
        <img src="/logos/Vault.png" alt="Vault Logo" style = {styles.logo}/>

      </div>
      <p id="App-name" style= {styles.appName}>Family Vault </p>
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
    padding: '10px 20px',
    backgroundColor: '#064d61',
    height: '80px', // updated to fit image and name
  },
  logo: {
     height: '60px', // updated to fit in header
     cursor: 'pointer',
     padding: '0',
     borderRadius: '50%',
     marginBottom: '10px',
     backgroundColor: 'navy',
  },
  appName: {
      fontSize: '18px',
      fontWeight: '800',
      marginTop: '4px',
      marginRight: '1120px',
      alignItems: 'left',
      color: 'white',

    },
  userName: {
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '4px',
    alignItems: 'center',
    color: 'white',
  },
  image: {
    height: '60px',
    cursor: 'pointer',
    padding: '0',
    borderRadius: '50%',
    marginTop: '10px',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
  }

};


export default Header;
