// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import '../css/style.css';

const HomePage = () => {
  const [userName, setUserName] = useState('Deepti Mishra');

  useEffect(() => {
    // You can move your profile name logic here if dynamic later
  }, []);

  const fetchAllPosts = () => {
    console.log('Fetching all posts...');
    // Hook your fetch logic here
  };

  return (
    <div>
      {/* Header */}
      <div id="header">
        <div className="lesson-link">
          <img src="/logos/Vault.png" alt="Family Vault Logo" />
        </div>
        <div className="title">
          <h1>Welcome To Family Vault</h1>
        </div>
        <div className="zip-link">
          <img src="/logos/profileLogo.png" alt="User Profile Picture" />
          <p id="user-name">{userName}</p>
        </div>
      </div>

      {/* Main Container */}
      <div id="main">
        {/* Left Panel */}
        <div id="left-panel">
          <button
            className="nav-button"
            onClick={() => (window.location.href = '/UserProfileUpload')}
          >
            Show My Profiles
          </button>
          <button className="nav-button" onClick={fetchAllPosts}>
            Show My Recent Posts
          </button>
        </div>

        {/* Middle Panel */}
        <div id="middle-panel">
          <div id="posts-container">
            {/* Posts will be dynamically inserted here */}
          </div>
        </div>

        {/* Right Panel */}
        <div id="right-panel">
          <button
            className="nav-button"
            onClick={() => (window.location.href = '/UploadPosts')}
          >
            Upload New Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
