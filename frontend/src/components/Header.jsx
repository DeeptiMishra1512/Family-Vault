// Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div id="header">
      <div className="lesson-link" onClick={() => navigate('/')}>
        <img src="/logos/Vault.png" alt="Vault Logo" />
      </div>
      <div className="zip-link">
        <img src="/logos/profileLogo.png" alt="Profile" />
        <p id="user-name">Deepti Mishra</p>
      </div>
    </div>
  );
};

export default Header;
